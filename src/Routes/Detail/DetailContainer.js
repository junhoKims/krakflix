import React from 'react';
import DetailPresneter from './DetailPresneter';
import { moviesApi, tvApi } from '../../apis';

export default class extends React.Component {
    constructor(props) {
        super(props);

        const { location: { pathname }} = props;

        this.state = {
            result: null,
            error: null,
            loading: true,
            isDomainMovie: pathname.includes('/movie/'),
        }
    }
    

    componentDidMount = async () => {
        const { isDomainMovie } = this.state;
        const { 
            history: { push },
            match : {  params: { id } },
        } = this.props;

        const parsedId = Number(id);
        if (isNaN(Number(id))) {
            return push('/');
        }

        let result = null;
        try {
            if (isDomainMovie){
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
            <DetailPresneter 
                result={result}
                error={error}
                loading={loading}
            /> 
        )
    }
}