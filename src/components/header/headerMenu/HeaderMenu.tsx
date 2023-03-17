import React, {useState} from 'react';
import styles from './HeaderMenu.module.scss';
import {HeaderSvgGenerator} from "../headerSvgGenerator/HeaderSvgGenerator";
import {NavLink} from "react-router-dom";
import {headings, socialIcons} from "../links";
import logo from "../../../assets/images/icons/logo.svg";

const HeaderMenu: React.FC = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <div className={`${styles.menuWrapper}`}>
            <div className={isMenuActive ? styles.menuWrapperActive: ""} onClick={(e) => setIsMenuActive(false)}/>
            <div
                className={`${styles.menu} ${isMenuActive ? styles.menuActive : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <ul className={styles.menu__list}>
                    {headings.map((heading) => (
                        <li className={styles.menu__item} key={heading.keyName}>
                            <NavLink
                                className={({isActive}) =>
                                    isActive ? styles.menu__active : styles.menu__link}
                                to={heading.link}
                            >
                                {heading.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className={styles.social}>
                    {socialIcons.map(icon => (
                        <li key={icon.alt}>
                            <a className={styles.svg} href={icon.link} target="_blank">
                                <HeaderSvgGenerator id={icon.src}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <NavLink className={styles.logo} to="/">
                <img src={logo} alt="Нейротренажеры.рф лого"/>
            </NavLink>

            <div className={`${styles.burger} ${isMenuActive ? styles.burgerActive : ""}`}
                 onClick={() => setIsMenuActive(!isMenuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default HeaderMenu;