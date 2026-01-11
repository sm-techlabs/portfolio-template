import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/user';

const Projects = () => {
  return (
    <main className="page-content">
      <h1>{projectsData.title}</h1>

      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
