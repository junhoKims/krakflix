/* eslint-disable consistent-return */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../apis';

interface ResultType {
  original_title?: string;
  original_name?: string;
  backdrop_path?: string;
  poster_path?: string;
  release_date?: string;
  first_air_date?: string;
  runtime?: string;
  episode_run_time?: string;
  overview?: string;
  genres?: any;
}

interface MatchParams {
  id: string;
}

interface IDetailContainerStates {
  result: ResultType;
  isDomainMovie: boolean;
  error: string | null;
  loading: boolean;
}

// eslint-disable-next-line max-len
class DetailContainer extends React.Component<RouteComponentProps<MatchParams>, IDetailContainerStates> {
  constructor(props: RouteComponentProps<MatchParams>) {
    super(props);

    const { location: { pathname }} = props;

    this.state = {
      result: {},
      error: null,
      loading: true,
      isDomainMovie: pathname.includes('/movie/'),
    };
  }

  componentDidMount = async (): Promise<void> => {
    const { isDomainMovie } = this.state;
    const {
      history: { push },
      match: { params: { id } },
    } = this.props;

    const parsedId = Number(id);
    if (isNaN(Number(id))) {
      return push('/');
    }

    let result = null;
    try {
      if (isDomainMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: 'Can\'t find movies info' });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}

export default DetailContainer;
