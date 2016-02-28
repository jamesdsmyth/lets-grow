// requiring my styles.scss file to be compiled
require('./styles/styles.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from './modules/App'
import About from './modules/About'
import Food from './modules/Food'
import FoodItemComponent from './modules/FoodItemComponent'
import Home from './modules/Home'
import Store from './reducers/CombinedReducer'

render((
    <Provider store={Store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About} />
                <Route path="/food" component={Food}>
                    <Route path="/food/:foodName" component={FoodItemComponent} />
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('lets-grow'))


// To do

// - Done - Got the store working using Redux.
// - Done - List all food items out using the template in FoodItem.js. Get each object out from the store for each individual page
// - Done - For some reason the foodItem page is not being linked to. Get this all hooked up
// - Done - Now need to pull in the individual food items instead of all items from within the store. Done by referencing the param in FoodItem.js
// - Done - Sass needs to be supported
// - Done - Months are now listed and if current month is one of the months that food grows in, add certain class
// - Partially done - Add some way of displaying when exactly the food should be grown through the months. Needs to be visual
// - Add a grow button that writes to the store
