import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://www.imagesystems.com.mt/wp-content/uploads/2019/10/Who-we-are-Image-1-1-768x657.png' ></img>
        </div>
        <div >
            ava+description
    </div>
        <div>
            my posts
      <div>
                New post
      </div>
            <div className={classes.item}>
                post 1
      </div>
            <div className={classes.item}>
                post 2
      </div>
        </div>
    </div>
};


export default Profile;
