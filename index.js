import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Food from './modules/Food'
import AllFood from './modules/AllFood'
import Home from './modules/Home'

require("./styles.scss")

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/all-food" component={AllFood}>
                <Route path="/repos/:userName/:repoName" component={Food} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))
