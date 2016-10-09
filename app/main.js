//main.js
import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'
import configureStore from './store/configureStore'
import Greeter from './components/Greeter'

import Activity from './operations/Activity'

//创建异步事物记录
const store = configureStore()
const history = syncHistoryWithStore(browserHistory,store)

ReactDom.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path='/' component={Greeter}>
                <Route path='activity' component={Activity}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
