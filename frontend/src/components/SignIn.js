import Axios from "axios"
import Cookies from 'js-cookie';

function SignIn({changeAuth, setUser}){

    const switchAuth = () => {
        changeAuth("SignUp")
    }

    const signIn = async(event) => {
        
        event.preventDefault();
        const data = {};
        const form = event.target

        for(let child of form.childNodes){
            if(child.tagName !== "INPUT"){
                continue
            }
            data[child.name] = child.value
        }

        await Axios.post("/auth/signIn", data).then(() => {
            setUser(Cookies.get("UserID"))
        })
    }
    
    return (
        <div className="SignIn AuthDiv">
            <div className="AuthDiv__div"></div>
            <form onSubmit={signIn}>
                <h2>Войти</h2>
                <input type="text"  placeholder="Email"     name="email"    required    minLength={5}/>
                <input type="text"  placeholder="Пароль"    name="password" required    minLength={8}/>
                <p type="button"   onClick={switchAuth}>У вас ещё нет аккаунта? <b>Зарегестрироваться</b></p>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default SignIn;
