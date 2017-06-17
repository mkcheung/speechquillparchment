import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { BrowserRouter, Redirect, Route, Link, Switch  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { isLoggedIn } from './util/AuthServices';
import registerServiceWorker from './components/registerServiceWorker';
import './index.css';

const Root = () => {
	const browserHistory = createHistory();
	return(
		<BrowserRouter history={browserHistory}>
			<App />
		</BrowserRouter>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
