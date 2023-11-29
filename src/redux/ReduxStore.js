import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import profileReducer from './profileRducer';
import dialogReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer
})


let store = createStore(reducers);


export default store;