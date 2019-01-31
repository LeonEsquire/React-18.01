import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Login from 'components/Login/login';
import Menu from 'components/Menu/menu';

class App extends Component {
	render(){
		return(
			<div>
				<Login/>
				<Menu/>
			</div>
			);
	} 
}

ReactDom.render(
	<App />, 
	document.getElementById('web-page') 
	);