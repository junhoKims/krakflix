import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({ topRated ,popular ,airingToday, error, loading}) => 
    loading ? <Loader /> : (
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
                            year={show.first_air_date && show.first_air_date.slice(0,4)}
                            isMovie={true}
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
                            year={show.first_air_date && show.first_air_date.slice(0,4)}
                            isMovie={true}
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
                            year={show.first_air_date && show.first_air_date.slice(0,4)}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}
            {error && <Message text={error} color='#EA2027' />}
        </Container>
    )

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default TVPresenter;