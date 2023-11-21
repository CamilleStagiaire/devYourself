import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <nav className="main-nav">
      <Link to="/" aria-label="Accéder à la page d'accueil">Home</Link>
        <Link to="/project" aria-label="Accéder à la page profil">Projet</Link>
        <Link to="/about" aria-label="Accéder à la page réglage">Qui suis-je</Link>
        <Link to="/contact" aria-label="Accéder à la page communauté">Contact</Link>
    </nav>
  );
};

export default Header;
