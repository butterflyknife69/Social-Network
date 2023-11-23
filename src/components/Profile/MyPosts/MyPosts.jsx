import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi ,how are you men?', LikesCount: 7 },
        { id: 2, message: 'Hi ,how are you men?', LikesCount: 8 },
        { id: 3, message: 'Hi ,how are you men?', LikesCount: 44 },
        { id: 4, message: 'Hi ,how are you men?', LikesCount: 22 },
        { id: 5, message: 'It my first post', LikesCount: 24 }

    ]
let postsElements=posts.
map(p=> <Post message={p.message} LikesCount={p.LikesCount} />);

    return (
        <div className={s.postBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

}

export default MyPosts;
