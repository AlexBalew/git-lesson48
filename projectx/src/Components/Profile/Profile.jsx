import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://www.imagesystems.com.mt/wp-content/uploads/2019/10/Who-we-are-Image-1-1-768x657.png' ></img>
            </div>
            <div >
                ava+description
            </div>
            <MyPosts />
        </div>
    )
};


export default Profile;
