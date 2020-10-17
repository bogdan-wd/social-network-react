import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

const {createStore, combineReducers} = require ('redux');

let reducuers = combineReducers ({
    dialogsPage: dialogsReducer, 
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore (reducuers);

export default store;
