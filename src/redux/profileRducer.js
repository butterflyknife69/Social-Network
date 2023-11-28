const ADDpost = 'ADD-POST';
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
        case UPDATENEWPOSTTEXT:state.newPostText = action.newText;
        return state
        default:return state
    }
}

export const addPostActionCreator = () => ({ type: ADDpost })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATENEWPOSTTEXT, newText: text })

export default profileReducer;