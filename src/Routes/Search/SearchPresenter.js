import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({ 
    movieResults,
    tvResults,
    searchTerm, 
    error,
    loading,
    handleSubmit,
    updateTerm
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder='Search Movies Or Tv Show' value={searchTerm} onChange={updateTerm} />
        </Form>
        {loading ? <Loader /> : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title='Movie Results'>
                        {movieResults.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title} 
                                imageUrl={movie.poster_path} 
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.slice(0,4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title='Tv Results'>
                        {tvResults.map(show => (
                            <Poster 
                                key={show.id}
                                id={show.id}
                                title={show.original_name} 
                                imageUrl={show.poster_path} 
                                rating={show.vote_average}
                                year={show.first_air_date && show.first_air_date.slice(0,4)}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message text={error} color='#EA2027' />}
                {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && (
                    <Message text={`Noting Found for '${searchTerm}'`} color={'#95afc0'} />
                )}
            </>
        )}
    </Container>
)

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;