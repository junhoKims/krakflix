import React from 'react';
import { moviesApi } from 'apis';
import HomePresenter from './HomePresenter';

export default class extends React.Component {
  state = {
    nowPlaying: [],
    upcoming: [],
    popular: [],
    error: null,
    loading: true,
  }

  componentDidMount = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
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
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
