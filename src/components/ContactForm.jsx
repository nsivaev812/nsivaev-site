import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-lg border bg-card p-6 text-card-foreground">
        <h3 className="mb-4 text-lg font-semibold">Связаться со мной</h3>

        {sent ? (
          <p className="text-sm">
            Спасибо, {name || "друг"}! Сообщение отправлено.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              disabled={!name || !message}
              className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
