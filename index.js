import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Hoodie from '@hoodie/client';
import PouchDB from 'pouchdb';

const hoodie = new Hoodie({
  url: 'http://localhost:9999',
  PouchDB: PouchDB
});

console.log(hoodie);
hoodie.account.signUp({
  username: 'pat@Example.com',
  password: 'secret'
})
.then(function (accountAttributes) {
  hoodie.log.info('Signed up as %s', accountAttributes.username)
}).catch(function (error) {
  hoodie.log.error(error)
})

// console.log(hoodie)

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
