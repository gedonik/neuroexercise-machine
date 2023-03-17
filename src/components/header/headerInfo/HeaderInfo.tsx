import React, {useState} from 'react';
import styles from './HeaderInfo.module.scss';
import logo from '../../../assets/images/icons/logo.svg';
import SearchInput from "../../ui/searchInput/SearchInput";
import {HeaderSvgGenerator} from "../headerSvgGenerator/HeaderSvgGenerator";
import MobileToggle from "../../ui/mobileToggle/MobileToggle";
import MobSearchForm from "./MobSearchForm";

const HeaderInfo: React.FC = () => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <div className={styles.headerInfo}>
            <a className={styles.headerInfo__logoLink} href="#">
                <img src={logo} alt="Нейротренажеры.рф лого"/>
            </a>

            <form className={styles.headerInfo__searchForm} action="#">
                <label htmlFor="header-search">
                    <SearchInput type="text" name="header-search"
                                 id="header-search" placeholder="Что вы ищите?"/>
                </label>
            </form>

            <address className={styles.headerAddress}>
                <div className={styles.headerAddress__contacts}>
                    <a className={styles.headerAddress__phone} href="tel:+7800554897">8(800) 55 48 97</a>
                    <a className={styles.headerAddress__mail} href="mailto:info@neyro-t.ru">info@neyro-t.ru</a>
                </div>
                <span><em>Время работы:</em> 07:00 - 19:00 по МСК</span>
            </address>

            {searchActive
                ?
                <MobileToggle
                    title="Поиск по сайту"
                    content={<MobSearchForm/>}
                    setVisible={setSearchActive}
                />
                : ''}

            <div className={styles.login}>
                <button
                    className={`reset-btn ${styles.search__btn}`}
                    type="button"
                    onClick={() => setSearchActive(!searchActive)}
                >
                    <HeaderSvgGenerator id={'search'}/>
                </button>

                <a href="#" className={styles.loginIcon}>
                    <HeaderSvgGenerator id={'login'}/>
                </a>
                <a href="#" className={styles.cartIcon}>
                    <HeaderSvgGenerator id={'cart'}/>
                    <span className={styles.cartNumber}>0</span>
                </a>

            </div>
        </div>
    );
};

export default HeaderInfo;