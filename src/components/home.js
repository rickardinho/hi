import React from 'react';
import { render } from 'react-dom';
import { NavButton, NavbarWrapper, H2, H3, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';
import GooglePlay from './general/google-play.js';
import AppStore from './general/app-store.js';
import sparkMainImage from './../images/homemainpictcut.jpg';
import pollImage from './../images/poll.png';
import inviteImage from './../images/invite.png';
import shareImage from './../images/share.png';
import saveImage from './../images/save.png';
import album from './../images/3album.jpg';
import resultVote from './../images/2-result-vote.jpg';
import message from './../images/1-message.jpg';
import Grid from './general/grid.js';
import Carousel from './general/carousel.js';

const data = [
  {"date":"1 Jan", "rainfall": 4, "sun": 6
},
  {"date":"2 Jan", "rainfall": 6, "sun": 3
    }
];              

const table = data.map((item) => 
     <div><H2>item.date</H2><H2>item.date</H2></div>;

const Home = () => (
  <div>
    <div className="Home">
      <div className="Home-header">
        <H2>Farm Summary</H2>
      </div>

    </div>

    <div>
      {table}
  
      

      <Grid />

    </div>



  </div>
);

export default Home;
