import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    return (
        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi ,how are you ?' LikesCount=' 5' />
                <Post message='It my first post' LikesCount=' 23'/>

            </div>
        </div>
    );

}

export default MyPosts;
