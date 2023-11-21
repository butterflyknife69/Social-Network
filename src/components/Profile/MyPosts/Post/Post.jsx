import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296" />
          {props.message}
            <div>
                <span>Like</span>{props.LikesCount}
            </div>

        </div>
    )

}

export default Post;
