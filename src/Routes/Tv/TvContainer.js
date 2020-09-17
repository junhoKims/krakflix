import React from 'react';
import TvPresneter from './TvPresneter';

export default class extends React.Component {

    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    }

    render() {
        const { topRated, popular, airingToday, error, loading } = this.state;
        return (
            <TvPresneter 
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            /> 
        )
    }
}