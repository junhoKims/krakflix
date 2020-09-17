import React from 'react';
import TvPresneter from './TvPresneter';
import { tvApi } from '../../apis'

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    }

    componentDidMount = async () => {
        try {
            const {
                data: { results: topRated } 
            } = await tvApi.topRated();
            const {
                data: { results: popular } 
            } = await tvApi.popular();
            const {
                data: { results: airingToday } 
            } = await tvApi.airingToday();
            this.setState({ topRated, popular, airingToday });
        } catch {
            this.setState({ error: 'Can\'t find movies info' });
        } finally {
            this.setState({ loading: false });
        }
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