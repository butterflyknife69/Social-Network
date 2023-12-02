import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileRducer";
import sideBarReducer from "./sideBarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi ,how are you men?', LikesCount: 7 },
                { id: 2, message: 'Hi ,how are you men?', LikesCount: 8 },
                { id: 3, message: 'Hi ,how are you men?', LikesCount: 44 },
                { id: 4, message: 'Hi ,how are you men?', LikesCount: 22 },
                { id: 5, message: 'It my first post', LikesCount: 24 }
            ],
            newPostText: 'samurai'
        },
        dialogPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is yor it-kamasutra' },
                { id: 3, message: 'Yoo' },
                { id: 4, message: 'Yoo' },
                { id: 5, message: 'Yoo' },
                { id: 6, message: 'Yoo' }
            ],
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            newMessageBody: ""
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('stte change');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);

    }
}

export default store;

window.store = store; 
