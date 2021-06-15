import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {


        let postsData = [
            {id:1, message:'hi, how are you?', likesCounter: 15},
            {id:2, message:'fine, thanks', likesCounter: 25}
        ]

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
                <Post message={postsData[0].message} likesCounter={postsData[0].likesCounter} />
                <Post message={postsData[1].message} likesCounter={postsData[1].likesCounter} />
            </div>
        </div>
    )
};

export default MyPosts;