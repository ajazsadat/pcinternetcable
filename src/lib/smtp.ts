export const smtpConfig = {
  host: "mail.careernhustle.com",
  port: 465,
  secure: true,
  auth: {
    user: "shah@careernhustle.com",
    pass: "Sherry@123$$",
  },
  from: "PC Internet Cable <shah@careernhustle.com>",
  to: "info@pcinternetcable.com",
} as const;
