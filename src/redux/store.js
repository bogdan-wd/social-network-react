import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import userReducer from './usersReducer';

const {createStore, combineReducers} = require ('redux');

let reducuers = combineReducers ({
    dialogsPage: dialogsReducer, 
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    usersPage: userReducer,
});

let store = createStore (reducuers);

export default store;
