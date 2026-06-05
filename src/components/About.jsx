// Компонент About — выводит текст "Обо мне" из props
export default function About({ text }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="mb-4 text-2xl font-semibold">Обо мне</h2>
      <p className="leading-relaxed text-muted-foreground">{text}</p>
    </section>
  );
}
