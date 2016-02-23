import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from './modules/App'
import About from './modules/About'
import Food from './modules/Food'
import FoodItem from './modules/FoodItem'
import Home from './modules/Home'
import Store from './reducers/CombinedReducer'

render((
    <Provider store={Store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About} />
                <Route path="/food" component={Food}>
                    <Route path="/food/:foodName" component={FoodItem} />
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'))

// To do!

// - Got the store working using Redux.
// - List all food items out using the template in FoodItem.js. Get each object out from the store for each individual page
// - For some reason the foodItem page is not being linked to. Get this all hooked up.
