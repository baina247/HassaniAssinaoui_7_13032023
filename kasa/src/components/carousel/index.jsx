import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../data/logements.json';
import leftArrow from '../../assets/left_carroussel.png';
import rightArrow from '../../assets/right_carroussel.png';
import { useParams } from 'react-router-dom';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`

const CarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  display: flex;

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
`

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  border-radius: 25px;
`

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 100px;

`

const LeftArrow = styled(Arrow)`
  left: 20px;
`

const RightArrow = styled(Arrow)`
  right: 20px;
`

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const [setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const handleLeftArrowClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleRightArrowClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const { idLogement } = useParams();
  const logement = data.find((product) => product.id === idLogement);

  const length = logement.pictures.length;

  return (
    <CarouselContainer>
      {length > 1 && (
        <LeftArrow
          src={leftArrow}
          alt="Left arrow"
          onClick={handleLeftArrowClick}
        />
      )}

      <CarouselContent id="carousel" onScroll={handleScroll}>
        {logement.pictures.map(
          (picture, index) =>
            index === current && (
              <CarouselImg key={picture} src={picture} alt={logement.title} />
            )
        )}
      </CarouselContent>

      {length > 1 && (
        <RightArrow
          src={rightArrow}
          alt="Right arrow"
          onClick={handleRightArrowClick}
        />
      )}
    </CarouselContainer>
  );
};

export default Carousel;
