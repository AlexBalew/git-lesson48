import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'hi, how are you?', likesCounter: 15},
    {id: 2, message: 'fine, thanks', likesCounter: 25}
]

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
    {id: 5, message: "Did you sign for Stalker 2?"}
]


ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
