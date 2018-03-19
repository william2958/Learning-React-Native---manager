import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
