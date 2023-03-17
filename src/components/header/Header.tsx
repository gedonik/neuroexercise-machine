import React from 'react';
import HeaderMenu from "./headerMenu/HeaderMenu";
import HeaderInfo from "./headerInfo/HeaderInfo";
import HeaderCategories from "./headerCategories/HeaderCategories";
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                    <HeaderMenu/>
                    <HeaderInfo/>
                    <HeaderCategories/>
            </div>
        </header>
    );
};

export default Header;