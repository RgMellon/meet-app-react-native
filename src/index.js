import React from 'react';
import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import { store, persistor } from './store';

import App from './App';

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#22202c" />
        <App />
      </PersistGate>
    </Provider>
  );
}
