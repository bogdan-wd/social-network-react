import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';

let renderTree = state => {
  ReactDOM.render (
    <React.StrictMode>
      <App state={store.getState ()} 
      dispatch={store.dispatch.bind(store)} 
      store={store}
      />
    </React.StrictMode>,
    document.getElementById ('root')
  );
};

renderTree (store.getState ());

store.subscribe (renderTree);
