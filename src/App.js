import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
// import CakeContainer from './components/CakeContainer';
// import BeerContainer from './components/BeerContainer';
// import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksBeerContainer from './components/HooksBeerContainer';
// import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/> */}
        <HooksCakeContainer/>
        {/* <NewCakeContainer/> */}
        {/* <IceCreamContainer/> */}
        <HooksIceCreamContainer/>
        {/* <BeerContainer/> */}
        <HooksBeerContainer/>
      </div>
    </Provider>
  );
}

export default App;
