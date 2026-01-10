import ActionButton from '@/components/ActionButton';
import ActionGroup from '@/components/ActionGroup';
import { MailIcon, PersonStanding, FileCodeCorner } from 'lucide-react';

const Home = () => {
  return (
    <main className="page-content">
      <section className="hero-section">
        <h1>Hello, I'm #Name#</h1>
        <p>You have somehow found your way here. A rare treat, enjoyed by few.<br/> Check out this kick-ass portfolio.</p>
        <ActionGroup>
          <ActionButton
            icon={PersonStanding}
            label="About me"
            onClick={() => window.open('/projects', '_self')}
          />
          <ActionButton
            icon={FileCodeCorner}
            label="View My Projects"
            onClick={() => window.open('/projects', '_self')}
          />
          <ActionButton
            icon={MailIcon}
            label="Contact Me"
            onClick={() => window.open('/contact', '_self')}
          />
        </ActionGroup>
      </section>
    </main>
  );
};

export default Home;
