import Header from "./components/Header";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header name="Никита Сиваев" role="Фронтенд-разработчик" avatar='./src/images/ava.jpg' />

      <About text="Junior-разработчик, изучаю React. :)" />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Проекты</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <ContactForm />

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2026 Никита Сиваев
      </footer>
    </div>
  );
}
