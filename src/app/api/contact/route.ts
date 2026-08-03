import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";
import { smtpConfig } from "@/lib/smtp";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  provider?: string;
  usage?: string;
  packages?: string[] | string;
  consent?: boolean | string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asPackages(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => asString(item)).filter(Boolean);
  }
  const single = asString(value);
  return single ? [single] : [];
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = asString(body.name);
    const phone = asString(body.phone);
    const email = asString(body.email);
    const address = asString(body.address);
    const provider = asString(body.provider) || "Not provided";
    const usage = asString(body.usage) || "Not provided";
    const packages = asPackages(body.packages);
    const consent = body.consent === true || body.consent === "true" || body.consent === "on";

    if (!name || !phone || !email || !address || !consent) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields and accept the consent checkbox." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const packageList = packages.length ? packages.join(", ") : "Not specified";
    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

    const text = [
      "New quote request from PC Internet Cable",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Address / ZIP: ${address}`,
      `Current Provider: ${provider}`,
      `Devices in Home: ${usage}`,
      `Packages: ${packageList}`,
      `Consent: Yes`,
      `Submitted: ${submittedAt} (CT)`,
      "",
      `Source: ${site.domain}`,
    ].join("\n");

    const html = `
      <h2>New quote request from PC Internet Cable</h2>
      <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Address / ZIP</strong></td><td>${escapeHtml(address)}</td></tr>
        <tr><td><strong>Current Provider</strong></td><td>${escapeHtml(provider)}</td></tr>
        <tr><td><strong>Devices in Home</strong></td><td>${escapeHtml(usage)}</td></tr>
        <tr><td><strong>Packages</strong></td><td>${escapeHtml(packageList)}</td></tr>
        <tr><td><strong>Consent</strong></td><td>Yes</td></tr>
        <tr><td><strong>Submitted</strong></td><td>${escapeHtml(submittedAt)} (CT)</td></tr>
      </table>
    `;

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.auth.user,
        pass: smtpConfig.auth.pass,
      },
    });

    await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: email,
      subject: `New quote request — ${name}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send your request right now. Please call us or try again." },
      { status: 500 },
    );
  }
}
