import "../css/Header.css"
import logo from "../images/logo.svg"
import logo2 from "../images/logo2.svg"

function Header({main, setMain, user}) {

    const changeMain = (event) => {
        setMain(event.target.id)
        
        const items = document.querySelectorAll(".nav_item")
        for(let item of items){
            if(item.id !== event.target.id){
                item.classList.remove("bold")
                continue
            }
            item.classList.add("bold")
            if(item.id !== "Start" && (item.id !== "Personal" && user === undefined)){
                items.forEach((item) => {
                    item.classList.add("nav-green")
                })
            }
            else if(user !== undefined && item.id !== "Start"){
                items.forEach((item) => {
                    item.classList.add("nav-green")
                })
            }
            else{
                items.forEach((item) => {
                    item.classList.remove("nav-green")
                })
            }
        }
    }

    return (
        <header className='Header'>
            <img onClick={changeMain} id="Start" src={main === "Start" || (main === "Personal" && user === undefined) ? logo2: logo} alt="AgroHelp" className="logo nav_item" />
            <nav className="nav">
                <div onClick={changeMain}   className="nav_item"        id="News">Новости</div>
                <div onClick={changeMain}   className="nav_item"        id="Forum">Форум</div>
                <div onClick={changeMain}   className="nav_item"        id="Lectorium">Лекторий</div>
                <div onClick={changeMain}   className="nav_item"        id="Production">Продукция</div>
                {user !== undefined? 
                    <div onClick={changeMain}   className="nav_item"   id="Personal">Личный кабинет</div>: 
                    <div onClick={changeMain}   className="nav_button" id="Personal">  Войти</div>
                }
            </nav>
        </header>
    );
};

export default Header;
