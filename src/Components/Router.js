import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Tv from 'Routes/Tv';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

export default () => (
    <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tv' exact component={Tv} />
            <Route path='/tv/popular' exact render={() => <div>test</div>} />
            <Route path='/search' exact component={Search} />
            <Route path='/detail' exact component={Detail} />
            <Redirect from='*' to='/'/>
        </Switch>
    </Router>
)