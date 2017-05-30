import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

// import Header from './components/header';
import Home from './routes/home';
import New from './routes/new';

export default () => (
	<div id="app">
		<div class="ribbon"></div>
		<div class="app-container">
			<Router>
				<Home path="/" />
				<New path="/new" />
			</Router>
		</div>
	</div>
);
