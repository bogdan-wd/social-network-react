import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

function App (props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <main className="content">
          <Route
            exact
            path="/dialogs"
            render={() => <Dialogs store={props.store} />}
          />

          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                dispatch={props.dispatch}
                state={props.state.profilePage}
              />
            )}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
