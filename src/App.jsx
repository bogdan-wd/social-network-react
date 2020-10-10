import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
     <Header/>
      <Nav/>
      <main className="content">
       <Profile/>
      </main>
    </div>
  );
}

export default App;
