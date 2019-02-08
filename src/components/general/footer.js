import React from 'react';
import { FooterLink, FooterText, FooterWrapper } from '../../styles/styles';

const Footer = () => (
  <FooterWrapper>

    <FooterText>Copyright © 2018 Happy Irrigator. All rights reserved.</FooterText>
    <FooterText>Read our <FooterLink to='/terms'>Terms &amp; Conditions</FooterLink> and <FooterLink to='/privacy'>Privacy Policy</FooterLink></FooterText>

  </FooterWrapper>
);

export default Footer;
