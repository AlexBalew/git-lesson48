import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>
                    Insert text
                </button>
                <button>
                    Delete
                </button>
                New post
            </div>
            <div className={classes.posts}>
                <Post message='hi, how are you?' likesCounter=" 15" />
                <Post message='fine, thanks' likesCounter=" 25" />              
            </div>
        </div>
    )
};

export default MyPosts;