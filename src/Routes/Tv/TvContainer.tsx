import React from 'react';
import TvPresenter from './TvPresenter';
import { tvApi } from '../../apis';

class TvContainer extends React.Component {
  state = {
    topRated: [],
    popular: [],
    airingToday: [],
    error: null,
    loading: true,
  }

  componentDidMount = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
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
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TvContainer;
