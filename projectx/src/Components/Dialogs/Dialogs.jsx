import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let Path = "/dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink to={Path}> {props.name}</NavLink>
    </div>
}

const MessageItem = (props) => {
    return <div className={classes.message}>
        {props.messageBlock}
    </div>
}

const Dialogs = (props) => {

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Kate" id="2"/>
                <DialogItem name="Bob" id="3"/>
                <DialogItem name="Michael" id="4"/>
                <DialogItem name="Kostya" id="5"/>
            </div>
            <div className={classes.messages}>
                <MessageItem messageBlock="Hi there"/>
                <MessageItem messageBlock="Hello sweety"/>
                <MessageItem messageBlock="Howdy"/>
                <MessageItem messageBlock="Greetings!"/>
                <MessageItem messageBlock="Did you sign for Stalker 2?"/>
            </div>
        </div>)
}

export default Dialogs;
