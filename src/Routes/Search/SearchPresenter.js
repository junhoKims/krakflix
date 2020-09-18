import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';

const Container = styled.div`
    padding: 0px 20px;
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
                        {movieResults.map(movie =>  (
                            <span key={movie.key}>{movie.title}</span>
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title='Tv Results'>
                        {tvResults.map(show =>  (
                            <span key={show.key}>{show.name}</span>
                        ))}
                    </Section>
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