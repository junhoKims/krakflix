import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IPoster {
  id: number;
  imageUrl?: string;
  title: string;
  rating?: number;
  year?: string;
  isMovie?: boolean;
}

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div<{ bgUrl: string }>`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 10px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 2px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const reduceTitle = (title: string) => {
  const regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
  if (regex.test(title) && title.length > 10) {
    return `${title.slice(0, 10)}...`;
  }

  if (title.length > 18) {
    return `${title.slice(0, 18)}...`;
  }
  return title;
};

const Poster: React.FC<IPoster> = ({
  id, imageUrl, title, rating, year, isMovie = false,
}) => (
  <Link to={isMovie ? `movie/${id}` : `show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('Assets/noPosterSmall.png')} />
        <Rating>
          <span role='img' aria-label='rating'>
            💛
          </span>{' '}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{reduceTitle(title)}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
