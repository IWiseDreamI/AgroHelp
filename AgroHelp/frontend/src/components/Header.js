import "../css/Header.css"

function Header({setMain, user}) {

    const changeMain = (event) => {
        setMain(event.target.id)
        
        const items = document.querySelector(".nav").childNodes
        for(let item of items){
            item.classList.remove("bold")
            if(item.id === event.target.id){
                item.classList.add("bold")
                if(item.id !== "Start" || (item.id !== "Personal" && user === undefined)){
                    item.parentNode.classList.add("nav-green")
                }
                else{
                    item.parentNode.classList.remove("nav-green")
                }
            }
        }
    }

    return (
        <header className='Header'>
            <div className="logo">AgroHelp</div>
            <nav className="nav">
                <div onClick={changeMain}   className="nav_item bold"   id="Start">Главная</div>
                <div onClick={changeMain}   className="nav_item"        id="News">Новости</div>
                <div onClick={changeMain}   className="nav_item"        id="Forum">Форум</div>
                <div onClick={changeMain}   className="nav_item"        id="Lectorium">Лекторий</div>
                {user !== undefined? 
                    <div onClick={changeMain}   className="nav_item"   id="Personal">Личный кабинет</div>: 
                    <div onClick={changeMain}   className="nav_button" id="Personal">  Войти</div>
                }
            </nav>
        </header>
    );
};

export default Header;
