import React from 'react';
import DetailPresneter from './DetailPresneter';

export default class extends React.Component {

    state = {
        result: null,
        error: null,
        loading: true
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