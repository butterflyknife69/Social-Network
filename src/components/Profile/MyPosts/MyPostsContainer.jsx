import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileRducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (<MyPosts 
        updateNewPostText={onPostChange}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} 
        addPost={addPost} />)
}
export default MyPostsContainer;
