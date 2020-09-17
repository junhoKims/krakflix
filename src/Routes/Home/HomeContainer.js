import React from 'react';
import HomePresneter from './HomePresneter';
import { moviesApi } from '../../apis';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    componentDidMount = async () => {
        try {
            const {
                data: { results: nowPlaying } 
            } = await moviesApi.nowPlaying();
            const {
                data: { results: upcoming } 
            } = await moviesApi.upcoming();
            const {
                data: { results: popular } 
            } = await moviesApi.popular();
            this.setState({ nowPlaying, upcoming, popular });
        } catch {
            this.setState({ error: 'Can\'t find movies info' });
        } finally {
            this.setState({ loading: false });
        }
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