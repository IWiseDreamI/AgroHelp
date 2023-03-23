import "../css/Footer.css"
import logo from "../images/logo2.svg"


function Footer() {
    return (
        <footer className="Footer">
            <img src={logo} alt="" className="footer-logo" />
            <hr />
            <div className="footer-content">
                <div>
                    <p>г.Якутск, ул.Курашова,, 28</p>
                    <p>E-mail: info.appsakha.ru</p>
                    <p>8(4112)-42-40-60</p>
                </div>
                <div>
                    <a href="https://agronii.ysn.ru/">https://agronii.ysn.ru/</a>
                    <a href="http://apksakha.ru/">http://apksakha.ru/</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
