import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/MessageItem' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/Profile' render={ () => <Profile posts={props.posts} />}/>
                    <Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/News' render={ () => <News/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;