import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: "AIzaSyCbCFdKcLM7UoCeuHseavVfmoEFnHNM8Xk",
			authDomain: "manager-7b991.firebaseapp.com",
			databaseURL: "https://manager-7b991.firebaseio.com",
			projectId: "manager-7b991",
			storageBucket: "",
			messagingSenderId: "131261473604"
		};
		firebase.initializeApp(config);
	}

	render () {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
