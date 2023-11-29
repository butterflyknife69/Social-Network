const ADDpost = 'ADD-POST';
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi ,how are you men?', LikesCount: 7 },
        { id: 2, message: 'Hi ,how are you men?', LikesCount: 8 },
        { id: 3, message: 'Hi ,how are you men?', LikesCount: 44 },
        { id: 4, message: 'Hi ,how are you men?', LikesCount: 22 },
        { id: 5, message: 'It my first post', LikesCount: 24 }
    ],
    newPostText: 'samurai'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDpost:
            let maxId = Math.max(...state.posts.map(post => post.id));
            let newPost = {
                id: maxId + 1,
                message: state.newPostText,
                LikesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATENEWPOSTTEXT: state.newPostText = action.newText;
            return state
        default: return state
    }
}



export const addPostActionCreator = () => ({ type: ADDpost })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATENEWPOSTTEXT, newText: text })

export default profileReducer;