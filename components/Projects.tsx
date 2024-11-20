import FlipCard from "./FlipCard";
import SectionTitle from "./SectionTitle";
import projects from "@/lib/projects";

const Projects = () => {
  return (
    <div className="w-full max-w-8xl mx-auto relative h-fit flex justify-center items-center">
      <SectionTitle title="projects" id={4} />
      <div className="w-full max-w-5xl relative mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {projects.map((p, i) => (
            <FlipCard
              key={i}
              title={p.name}
              description={p.description}
              subtitle={p.subHeader || undefined}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
