import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(m => <Post message={m.message} likesCounter={m.likesCounter}/>)


    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button>
                        Insert text
                    </button>
                </div>
                <div>
                    <button>
                        Delete
                    </button>
                </div>
                <div>
                    New post
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;