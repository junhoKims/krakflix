import React from 'react';
import HomePresneter from './HomePresneter';

export default class extends React.Component {

    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return (
            <HomePresneter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            /> 
        )
    }
}