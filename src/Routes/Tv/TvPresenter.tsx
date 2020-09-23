import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

interface IHomePresenter {
  topRated: Array<any>;
  popular: Array<any>;
  airingToday: Array<any>;
  error: string | null;
  loading: boolean;
}

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter: React.FC<IHomePresenter> = ({
  topRated, popular, airingToday, error, loading,
}) => (
    <>
        <Helmet>
            <title>Tv Shows | Krakflix</title>
        </Helmet>
        {loading ? <Loader /> : (
            <Container>
                {topRated && topRated.length > 0 && (
                    <Section title='Top Rated Shows'>
                        {topRated.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.original_name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title='Popular Shows'>
                        {popular.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.original_name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title='AiringToday Shows'>
                        {airingToday.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.original_name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message text={error} color='#EA2027' />}
            </Container>
        )}
    </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  airingToday: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
