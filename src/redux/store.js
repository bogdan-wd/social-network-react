import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

const {createStore, combineReducers} = require ('redux');

let reducuers = combineReducers ({
    dialogsPage: dialogsReducer, 
    profilePage:profileReducer,
    sidebar:sidebarReducer,
});

let store = createStore (reducuers);

export default store;
