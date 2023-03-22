import SignIn from "./SignUp"
import SignUp from "./SignIn"

function Auth({authState, setAuthState}) {
    return (
        <div className="authorization">
            {authState === 1 ? <SignIn setAuthState={setAuthState}/> : undefined}
            {authState === 2 ? <SignUp setAuthState={setAuthState}/> : undefined}
        </div>
    );
}

export default Auth;
