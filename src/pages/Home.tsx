import { useNavigate } from 'react-router-dom';
import ActionButton from '@/components/ActionButton';
import ActionGroup from '@/components/ActionGroup';
import { homeData } from '@/user';


const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="page-content">
      <section className="hero-section">
        <h1>{homeData.heading}</h1>
        <p>{homeData.subheading}</p>

        <ActionGroup>
          {homeData.actions.map((action) => (
            <ActionButton
              key={action.label}
              icon={action.icon}
              label={action.label}
              onClick={() => navigate(action.route)}
            />
          ))}
        </ActionGroup>
      </section>
    </main>
  );
};

export default Home;
