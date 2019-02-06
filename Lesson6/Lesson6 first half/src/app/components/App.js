import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Switch} from 'react-router-dom';

import MainPage from '../pages/Main';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>Приложение v2</header>
        <ul>
          <li><Link to="/home">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/contacts/get/5">Контакты с параметрами</Link></li>
        </ul>

        <div>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/home" component={MainPage}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts/:action/:number" component={Contacts}/>
            <Route path="/contacts" component={Contacts}/>
          </Switch>
        </div>
      </div>
    );
  }
}