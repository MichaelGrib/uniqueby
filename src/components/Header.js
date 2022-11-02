import React from "react";

function Header () {
    return (
        <header>
            <div className="header__container">
                <a className="header__link" href="/">Изделия</a>
                <a className="header__link" href="/">Контакты</a>
                <a className="header__link" href="/">Примеры работ</a>
            </div>
        </header>      
    )
}

export default Header;