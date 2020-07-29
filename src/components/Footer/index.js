import React from 'react';
import { FooterBase } from './styles';
import Flogo from '../../assets/img/Footerlogo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img className="Flogo" src={Flogo} alt="Reactflix footerlogo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
