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

    let dialogs = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Kate"},
        {id: 3, name: "Bob"},
        {id: 4, name: "Michael"},
        {id: 5, name: "Kostya"}
    ]
    let messages = [
        {id: 1, message: "Hi there"},
        {id: 2, message: "Hello sweety"},
        {id: 3, message: "Howdy"},
        {id: 4, message: "Greetings!"},
        {id: 5, message: "Did you sign for Stalker 2?"}]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = messages.map( m => <MessageItem messageBlock={m.message} /> )

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>)
}

export default Dialogs;
