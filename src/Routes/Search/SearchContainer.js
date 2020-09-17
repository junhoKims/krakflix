import React from 'react';
import SearchPresneter from './SearchPresneter';

export default class extends React.Component {

    state = {
        movieResult: null,
        tvResult: null,
        searchTerm: '',
        error: null,
        loading: false
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
            /> 
        )
    }
}