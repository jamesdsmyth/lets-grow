// requiring my styles.scss file to be compiled
require('./styles/styles.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from './views/App'
import MyGardenContainer from './containers/MyGardenContainer'
import FoodContainer from './containers/FoodContainer'
import FoodItemContainer from './containers/FoodItemContainer'
import Store from './reducers/CombinedReducer'

render((
    <Provider store={Store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={FoodContainer} />
                <Route path="/my-garden" component={MyGardenContainer} />
                <Route path="/food" component={FoodContainer}>
                    <Route path="/food/:foodName" component={FoodItemContainer} />
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('lets-grow'));
