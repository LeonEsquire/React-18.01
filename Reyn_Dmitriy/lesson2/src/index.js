import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './ExportClass';

class App extends React.Component {
	render() {
		return <div>
			<h1>Первое приложение на React</h1>
			<p>Hello React!</p>
		</div>;
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
const dev = new Developer('Dmitriy', 28);
dev.printAll();