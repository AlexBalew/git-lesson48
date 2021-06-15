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

    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Kate"},
        {id: 3, name: "Bob"},
        {id: 4, name: "Michael"},
        {id: 5, name: "Kostya"}
    ]

    let messagesData = [
        {id: 1, message: "Hi there"},
        {id: 2, message: "Hello sweety"},
        {id: 3, message: "Howdy"},
        {id: 4, message: "Greetings!"},
        {id: 5, message: "Did you sign for Stalker 2?"}
    ]

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <MessageItem messageBlock={messagesData[0].message} />
                <MessageItem messageBlock={messagesData[1].message} />
                <MessageItem messageBlock={messagesData[2].message} />
                <MessageItem messageBlock={messagesData[3].message} />
                <MessageItem messageBlock={messagesData[4].message} />
            </div>
        </div>)
}

export default Dialogs;
