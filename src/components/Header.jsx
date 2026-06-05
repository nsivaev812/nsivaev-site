// Шапка сайта: фото, имя и роль
export default function Header({ name, role, avatar }) {
  return (
    <header className="border-b bg-gradient-to-b from-secondary to-background">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="mx-auto mb-6 flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-2 border-primary/30 bg-secondary text-muted-foreground">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-xs">Фото</span>
          )}
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-primary">
          {name}
        </h1>
        <p className="mt-2 text-muted-foreground">{role}</p>
      </div>
    </header>
  );
}
