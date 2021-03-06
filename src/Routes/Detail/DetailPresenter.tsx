import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

interface IDetailPresenter {
  result: ResultType;
  error: string | null;
  loading: boolean;
}

interface ResultType {
  original_title?: string;
  original_name?: string;
  backdrop_path?: string;
  poster_path?: string;
  release_date?: string;
  first_air_date?: string;
  runtime?: string;
  episode_run_time?: string;
  overview?: string;
  genres?: any;
}

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div<{ bgImage: string }>`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display:flex;
    width: 100%;
    z-index: 1;
    position: relative;
    height: 100%;
`;

const Cover = styled.div<{ bgImage: string }>`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.div`
    margin-bottom: 20px;
`;

const ItemContainer = styled.div`
    margin: 20px 0px;
`;

const Item = styled.span`
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const OverView = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;

const MessageContainer = styled.div`
    margin-top: 30px;
`;

const DetailPresenter: React.FC<IDetailPresenter> = ({ result, error, loading }) => (
    <>
      <Helmet><title>Loading | Krakflix</title></Helmet>
      {loading ? <Loader /> : (
        error ? (
          <MessageContainer>
              <Message text={error} color='#95afc0' />
          </MessageContainer>
        ) : (
          <Container>
            <Helmet>
              <title>{result.original_title ? result.original_title : result.original_name}</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
              <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : require('Assets/noPosterSmall.png')} />
              <Data>
                  <Title>
                    {result.original_title ? result.original_title : result.original_name}
                  </Title>
                  <ItemContainer>
                      <Item>{result.release_date
                        ? result.release_date.substring(0, 4)
                        : result.first_air_date && result.first_air_date.substring(0, 4)}</Item>
                      <Divider>·</Divider>
                      <Item>{result.runtime
                        ? `${result.runtime} min`
                        : result.episode_run_time && `${result.episode_run_time[0]} min`}</Item>
                      <Divider>·</Divider>
                      <Item>{result.genres && (
                        result.genres.map((genre: any, index: number): any => (
                          index === result.genres.length - 1
                            ? genre.name
                            : `${genre.name} / `
                        )))}
                      </Item>
                  </ItemContainer>
                  <OverView>{result.overview}</OverView>
              </Data>
            </Content>
          </Container>
        )
      )}
    </>
);

DetailPresenter.propTypes = {
  result: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
