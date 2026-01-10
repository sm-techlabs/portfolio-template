import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js.',
    link: 'https://github.com/yourusername/project-alpha',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'A mobile-first responsive website for a local business.',
    link: 'https://github.com/yourusername/project-beta',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'An interactive data visualization tool using D3.js.',
    link: 'https://github.com/yourusername/project-gamma',
  },
];

const Projects = () => {
  return (
    <main className="page-content">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
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
