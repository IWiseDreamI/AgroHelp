import { useEffect, useState } from "react";
import SignIn from "./SignIn"
import SignUp from "./SignUp"


function Auth({setUser}) {
    const [authState, setAuthState] = useState();

    useEffect(() => {
        setAuthState("SignIn")
    }, [])

    return (
        <div className="Auth">
            {authState === "SignIn"? <SignIn changeAuth={setAuthState} setUser={setUser}/>: <SignUp changeAuth={setAuthState} setUser={setUser}/>}
        </div>
    );
};

export default Auth;
