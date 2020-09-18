import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../apis'

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: '',
        error: null,
        loading: false
    }

    updateTerm = event => {
        const { target: { value }} = event;
        this.setState({ searchTerm: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== ''){
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try {
            this.setState({ loading: true });
            const { data: { results: movieResults }} = await moviesApi.search(searchTerm);
            const { data: { results: tvResults }} = await tvApi.search(searchTerm);
            this.setState({ movieResults, tvResults });
        } catch {
            this.setState({ error: 'Can\'t find movies info' });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter 
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                
            /> 
        )
    }
}