// Карточка одного проекта
export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs">
            {tag}
          </span>
        ))}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex h-9 items-center gap-1 rounded-md border border-input bg-background px-3 text-sm font-medium hover:bg-secondary"
          >
            Открыть ↗
          </a>
        )}
      </div>
    </div>
  );
}
