const ADDpost = 'ADD-POST';
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


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
            newMessageBody :""
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
        if (action.type === ADDpost) {
            // Знаходимо максимальний id серед існуючих об'єктів у posts
            let maxId = Math.max(...this._state.profilePage.posts.map(post => post.id));

            // Створюємо новий об'єкт з id на 1 більшим за максимальний
            let newPost = {
                id: maxId + 1,
                message: this._state.profilePage.newPostText,
                LikesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATENEWPOSTTEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
           
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            let maxId = Math.max(...this._state.dialogPage.messages.map(message => message.id));
            this._state.dialogPage.messages.push({ id: maxId + 1, message: body });
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADDpost })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATENEWPOSTTEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;

window.store = store;
