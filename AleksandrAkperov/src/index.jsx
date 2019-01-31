import develop from './Developer'
import App from './App'
const textHTML = develop.text;


document.body.innerHTML = '<h2>' + textHTML + '</h2>';

ReactDOM.render(<App />, document.getElementById('root' ));

