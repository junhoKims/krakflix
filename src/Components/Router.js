import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Tv from 'Routes/Tv';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Test from 'Routes/Test';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tv' exact component={Tv} />
            <Route path='/tv/popular' exact render={() => <div>test</div>} />
            <Route path='/search' exact component={Search} />
            <Route path='/movie/:id' exact component={Detail} />
            <Route path='/show/:id' exact component={Detail} />
            <Route path='/test' exact component={Test} />
            <Redirect from='*' to='/'/>
        </Switch>
    </Router>
)