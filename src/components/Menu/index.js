import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import Button from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Reactflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        New Video
      </Button>
    </nav>
  );
}


export default Menu;