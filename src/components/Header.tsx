import { NavLink } from 'react-router-dom';
import './Header.css';
import { profile } from '@/user';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        {profile.name} | {profile.role}
      </div>

      <nav className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
