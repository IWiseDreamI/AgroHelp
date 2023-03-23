import { useEffect, useState } from "react";
import SignIn from "./SignIn"
import SignUp from "./SignUp"


function Auth({setUser, setMain}) {
    const [authState, setAuthState] = useState();

    useEffect(() => {
        setAuthState("SignIn")
    }, [])

    return (
        <div className="Auth">
            {authState === "SignIn"? <SignIn changeAuth={setAuthState} setUser={setUser}/>: <SignUp changeAuth={setAuthState} setUser={setUser} setMain={setMain}/>}
        </div>
    );
};

export default Auth;
