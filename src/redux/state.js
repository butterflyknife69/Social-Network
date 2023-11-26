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
                { id: 4, message: 'Yoo' },
                { id: 5, message: 'Yoo' }
            ],
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ]
        },
        sideBar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('stte change');
    },
    addPost() {

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
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;

window.store = store;