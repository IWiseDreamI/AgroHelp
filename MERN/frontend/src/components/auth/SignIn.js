import {useEffect, useState} from 'react';

function SignIn({setAuthState}) {
    const sendRequest = (event) => {
        event.preventDefault();
        const form = event.target
        const data = {}
        for(let item of form.childNodes){
            if(item.tagName === "INPUT"){
                data[item.name] = item.value
            }
        }
        if(data.password === data.passwordConfirmation){
            console.log(data)
        }
    }

    const changeForm = () => {
        setAuthState(1)
    }

    return (
        <div className="authorization">
            <form onSubmit={sendRequest}>
                <input type="text" name="username"  placeholder="Username"/>
                <input type="text" name="email"  placeholder="Email"/>
                <input type="text" name="password"  placeholder="Password"/>
                <input type="text" name="passwordConfirmation"  placeholder="Confirm password"/>
                <button></button>
                <button onClick={changeForm}>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
