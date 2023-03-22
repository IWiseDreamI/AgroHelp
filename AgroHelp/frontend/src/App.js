import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import "./css/App.css"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

Axios.defaults.withCredentials = true
Axios.defaults.baseURL = "http://localhost:5000/"

function App() {
    const [mainState, setMainState] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(Cookies.get("UserID"))
        setMainState("Start")
    }, [])

    return (
        <div className='App'>
            <Header main={mainState} user={user} setMain={setMainState}/>
            <Main main={mainState} user={user} setUser={setUser} setMain={setMainState}/>
            <Footer />
        </div>
    );
};

export default App;
