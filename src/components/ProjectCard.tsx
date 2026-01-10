import './ProjectCard.css';
import { ExternalLink } from 'lucide-react';
import ActionButton from './ActionButton';

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h2 className="project-card-title">{title}</h2>
      </div>
      <div className="project-card-body">
        <p>{description}</p>
      </div>
      {link && (
        <div className="project-card-actions">
          <ActionButton
            icon={ExternalLink}
            label="View Project"
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
