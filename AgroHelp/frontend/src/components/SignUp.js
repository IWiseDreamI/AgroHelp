import Axios from "axios"
import Cookies from 'js-cookie';

function SignUp({changeAuth, setUser, setMain}) {

    const switchAuth = () => {
        changeAuth("SignIn")
    }

    const signUp = (event) => {
        const data = {};
        event.preventDefault();
        const form = event.target
        for(let child of form.childNodes){
            if(child.tagName !== "INPUT"){
                continue
            }
            if(child.value.length <= child.minLength){
                return false
            }
            data[child.name] = child.value
        }        
        Axios.post("/auth/signUp", data).then(() => {
            setUser(Cookies.get("UserID"));
            const items = document.querySelector(".nav").childNodes
            items.forEach((item) => {
                item.classList.add("nav-green")
            })
        }) 
        
    }

    return (
        <div className="SignUp AuthDiv">
        <div className="AuthDiv__div"></div>
            <form onSubmit={signUp}>
                <h2>Регистрация</h2>
                <input type="text" name="username"  placeholder="Введите имя и фамилию" required    minLength={5}/>
                <input type="text" name="email"     placeholder="Введите email"         required    minLength={5}/>
                <input type="text" name="password"  placeholder="Введите пароль"        required    minLength={6}/>
                <p type="button"   onClick={switchAuth}>Уже есть аккаунт? <b>Войти</b></p>
                <button>Зарегестрироваться</button>
            </form>
        </div>
    );
};

export default SignUp;
