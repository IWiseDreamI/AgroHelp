import logo from "../assets/svg/imi_logo.svg"

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <h3>Институт математики и информатики</h3>
            </div>
            <div className="header__options">
                <a className="option" href=" ">Личный кабинет</a><s />
                <p className="option">Контакты</p><s />
                <p className="option">+ 7 (4112) 49-68-34</p>
            </div>
        </header>
    );
}

export default Header;