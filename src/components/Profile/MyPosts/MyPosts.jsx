import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let PostData = [
        { id: 1, message: 'Hi ,how are you men?', LikesCount: 8 },
        { id: 2, message: 'It my first post', LikesCount: 24 }

    ]


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
                <Post message={PostData[0].message} LikesCount={PostData[0].LikesCount} />
                <Post message={PostData[1].message} LikesCount={PostData[1].LikesCount} />

            </div>
        </div>
    );

}

export default MyPosts;
