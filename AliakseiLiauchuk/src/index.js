import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers'
import App from './containers/App'
import PageNotFound from './pages/PageNotFound'
import MainPage from './pages/Main'
import Layout from './components/Layout'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <BrowserRouter>
		  <Layout>
			  <Switch>
				  <Route exact path="/" component={MainPage}/>
				  <Route exact path="/users/" component={App}/>
				  <Route component={PageNotFound}/>
			  </Switch>
		  </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
