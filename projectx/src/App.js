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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;