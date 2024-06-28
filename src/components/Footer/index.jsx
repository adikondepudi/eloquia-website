// index.jsx
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, Logo, WebsiteRights } from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <Logo onClick={toggleHome}>Eloquia</Logo>
      <WebsiteRights>Eloquia © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
