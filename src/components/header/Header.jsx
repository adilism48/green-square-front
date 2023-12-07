import logoImg from '../../img/logo.svg'
import './header.css'
import Userfront from "@userfront/toolkit/react";
import {useLocation} from "react-router-dom";

function Header() {
    const {pathname} = useLocation()

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo"/>
                        <span>Зелёный Квадрат</span>
                    </div>
                    {
                        pathname == "/admin" ? (
                            <a href="/" onClick={Userfront.logout}>Выйти</a>
                        ) : (
                            <a href="/login">Войти</a>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;