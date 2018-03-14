import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { FooterLink, FooterText, FooterWrapper, SocialDiv, SocialButton } from './../../styles/styles';
import twitterImage from './../../images/twitter.jpg';
import facebookImage from './../../images/facebook.jpg';
import instagramImage from './../../images/instagram.jpg';

const Footer = () => (
  <FooterWrapper>

    <FooterText>Copyright © 2018 Happy Irrigator. All rights reserved.</FooterText>
    <FooterText>Read our <Link to="/terms"><FooterLink>Terms &amp; Conditions</FooterLink></Link> and <Link to="/privacy"><FooterLink>Privacy Policy</FooterLink></Link></FooterText>

  </FooterWrapper>
);

export default Footer;
