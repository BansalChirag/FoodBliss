import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImageSlider = styled(Slider)`
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .slick-list {
    overflow: hidden;
  }

  .slick-dots {
    bottom: 20px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #fff;
    opacity: 0.6;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
`;

const ImageSlide = styled.div`
  height: 100vh;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ExploreContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const ExploreButton = styled(Link)`
  padding: 15px 30px;
  background-color: #ff6b6b;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4d4d;
  }

  @media (max-width: 768px) {
    /* Styles for screens smaller than or equal to 768px */
    padding: 10px 20px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    /* Styles for screens smaller than or equal to 480px */
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Heading = styled.h1`
  color: #fff;

  @media (max-width: 768px) {
    /* Styles for screens smaller than or equal to 768px */
    font-size: 24px;
  }

  @media (max-width: 480px) {
    /* Styles for screens smaller than or equal to 480px */
    font-size: 20px;
  }
`;

const Home = () => {
  const sliderRef = useRef(null);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HomeContainer>
      <ImageSlider ref={sliderRef} {...carouselSettings}>
        <ImageSlide>
          <img src="https://source.unsplash.com/random/900x700/?burger" alt="Im 1" />
        </ImageSlide>
        <ImageSlide>
          <img src="https://source.unsplash.com/random/900x700/?pastry" alt="Im 2" />
        </ImageSlide>
        <ImageSlide>
          <img src="https://source.unsplash.com/random/900x700/?barbeque" alt="Im 3" />
        </ImageSlide>
      </ImageSlider>
      <ExploreContainer>
        <Heading>Delicious Food Awaits</Heading>
        <ExploreButton to="/menu">Explore Menu</ExploreButton>
      </ExploreContainer>
    </HomeContainer>
  );
};

export default Home;
