import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers'
import Users from './containers/Users'
import PageNotFound from './pages/PageNotFound'
import MainPage from './pages/Main'
import Layout from './components/Layout'

const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
		  <Layout>
			  <Switch>
				  <Route exact path="/" component={MainPage}/>
				  <Route exact strict path="/users" component={Users}/>
				  <Route component={PageNotFound}/>
			  </Switch>
		  </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
