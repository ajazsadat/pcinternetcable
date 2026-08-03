type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="page-hero">
      <div className="container reveal">
        <p className="eyebrow" style={{ color: "#7ce7dc" }}>
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
