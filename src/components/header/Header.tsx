import React from 'react';
import HeadingsMenu from "./headingsMenu/HeadingsMenu";
import HeaderInfo from "./headerInfo/HeaderInfo";
import HeaderCategories from "./headerCategories/HeaderCategories";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__menu">
                    <HeadingsMenu/>
                    <HeaderInfo/>
                    <HeaderCategories/>
                </nav>
            </div>
        </header>
    );
};

export default Header;