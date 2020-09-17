import React from 'react';
import SearchPresneter from './SearchPresneter';
import { moviesApi, tvApi } from '../../apis'

export default class extends React.Component {
    state = {
        movieResult: null,
        tvResult: null,
        searchTerm: '',
        error: null,
        loading: false
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== ''){
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try {
            this.setState({ loading: true });

            const movieResult = await moviesApi.search(searchTerm);
            const tvResult = await tvApi.search(searchTerm);
            this.setState({ movieResult, tvResult });
        } catch {
            this.setState({ error: 'Can\'t find movies info' });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { movieResult, tvResult, searchTerm, error, loading } = this.state;
        return (
            <SearchPresneter 
                movieResult={movieResult}
                tvResult={tvResult}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={() => this.handleSubmit}
            /> 
        )
    }
}