import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

function App () {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <main className="content">
          <Route path="/dialogs" component={Dialogs} /> 
          <Route path="/profile" component={Profile} /> 
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
