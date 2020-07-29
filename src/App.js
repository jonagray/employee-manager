import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { create } from 'react-test-renderer';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCj0ZwEKePtWgQLdCHSR-0uIaCogIlNXZQ",
      authDomain: "manager-c5aa4.firebaseapp.com",
      databaseURL: "https://manager-c5aa4.firebaseio.com",
      projectId: "manager-c5aa4",
      storageBucket: "manager-c5aa4.appspot.com",
      messagingSenderId: "685056936129",
      appId: "1:685056936129:web:801790e857ca6eb97dec40",
      measurementId: "G-R7FBDH7XQR"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;