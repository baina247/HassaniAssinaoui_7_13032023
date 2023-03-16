import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../data/logements.json'
import leftArrow from '../../assets/left_carroussel.png';
import rightArrow from '../../assets/right_carroussel.png';

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
`;

const CarouselContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin: 0 20px;
  width: calc(100% - 160px);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`;

const CarouselItem = styled.img`
  width: 100%;
  max-width: 250px;
  margin-right: 20px;
`;

const Arrow = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const handleLeftArrowClick = () => {
    const carousel = document.getElementById('carousel');
    carousel.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const handleRightArrowClick = () => {
    const carousel = document.getElementById('carousel');
    carousel.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <CarouselContainer>
      <Arrow src={leftArrow} alt="Left arrow" onClick={handleLeftArrowClick} />
      <CarouselContent id="carousel" onScroll={handleScroll}>
        {data.map((item) =>
          item.pictures.map((picture) => (
            <CarouselItem key={picture} src={picture} alt={item.title} />
          ))
        )}
      </CarouselContent>
      <Arrow src={rightArrow} alt="Right arrow" onClick={handleRightArrowClick} />
    </CarouselContainer>
  );
};

export default Carousel;
