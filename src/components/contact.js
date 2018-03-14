import React from 'react';
import { render } from 'react-dom';
import { CenteredP, H2, H3, H4, P, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const Contact = () => (
  <div>
    <div className="Contact">
      <div className="Contact-header">
        <H2>Contact us</H2>
      </div>

      <div>

        <H4>Keep in touch!</H4>
        <CenteredP>If you’d like to know more about Spark, would like to be involved in our project, or just want to say hello, please email us:</CenteredP>
        <CenteredP><a href="mailto:hello@spark-app.net">hello@spark-app.net</a></CenteredP>
        <CenteredP>Or join us on:</CenteredP>

      </div>

    </div>
  </div>
);

export default Contact;
