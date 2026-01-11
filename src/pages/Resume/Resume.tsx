import { resumeData } from '@/user';

const Resume = () => {
  return (
    <main className="page-content">
      <h1>{resumeData.title}</h1>

      {resumeData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </main>
  );
};

export default Resume;
