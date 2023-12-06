import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import profileReducer from './profileRducer';
import dialogReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage:usersReducer
})


let store = createStore(reducers);

window.store=store;

export default store;