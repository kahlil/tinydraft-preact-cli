import Hoodie from '@hoodie/client';
import PouchDB from 'pouchdb';

// console.log(Buffer);

// Workaround for a Hoddie dependency.
global.process = { browser: true }

global.hoodie = new Hoodie({
  url: 'http://localhost:9999',
  PouchDB: PouchDB
});

// hoodie.account.signUp({
// 	username: 'pat',
// 	password: 'secret'
// }).then(function (accountProperties) {
//   alert('Account created for ' + accountProperties.username)
// }).catch(function (error) {
//   alert(error)
// })

// hoodie.connectionStatus.check()
// 	.then(function () {
// 		// Connection is good, connectionStatus.ok is true
// 		console.info('connection good')
// 	})
// 	.catch(function (err) {
// 		// Cannot connect to server, connectionStatus.ok is false
// 		console.error(err)
// 	})

hoodie.account.signIn({
	username: 'pat',
	password: 'secret'
}).then(function (sessionProperties) {
	console.info('👋', sessionProperties.username)
	// hoodie.store.removeAll().then(doc => console.info(doc))
}).catch(function (error) {
	console.error(error);
})
