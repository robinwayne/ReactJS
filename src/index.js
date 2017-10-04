import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './';
import Main from './Main';
//import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';


/*
ReactDOM.render(<App 
	testValue='helloParent'
	testValue2='value2'
	/>, document.getElementById('root'));
registerServiceWorker();
*/

ReactDOM.render(<Main />, document.getElementById('root'));
