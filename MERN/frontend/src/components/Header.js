import {useEffect, useState} from 'react';
import "../css/Header.css"

import Auth from "./auth/Auth"

function Header() {
    const [authState, setAuthState] = useState();

    const AuthButton = () => {
        if(authState === 0){
            setAuthState(1)
        }
        else{
            setAuthState(0)
        }
    }

    useEffect(() => {
        setAuthState(0)
    }, [setAuthState])

    return (
        <header>
            <button className="authBtn" onClick={AuthButton}></button>
            <Auth authState={authState} setAuthState={setAuthState} />
        </header>
    );
}

export default Header;
