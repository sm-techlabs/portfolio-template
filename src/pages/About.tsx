import { aboutData } from '@/user';

const About = () => {
  return (
    <main className="page-content">
      <h1>{aboutData.title}</h1>

      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </main>
  );
};

export default About;
