import React, { Component } from 'react';
import Slider from 'react-slick';
import { CenteredDiv } from './../../styles/styles';


export default class Carousel extends Component {

  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1

    };

    return (
      <CenteredDiv>
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </CenteredDiv>
    );
  }
}
