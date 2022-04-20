import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import BeerContainer from './components/BeerContainer';
import HooksBeerContainer from './components/HooksBeerContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <HooksIceCreamContainer/>
        <BeerContainer/>
        <HooksBeerContainer/>
      </div>
    </Provider>
  );
}

export default App;
