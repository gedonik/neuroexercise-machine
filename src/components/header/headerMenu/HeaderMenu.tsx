import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../../assets/images/icons/logo.svg';
import { HeaderSvgGenerator } from '../headerSvgGenerator/HeaderSvgGenerator';
import { headings, socialIcons } from '../links';

import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isMenuActive]);

  return (
    <div className={styles.menuWrapper}>
      <div
        className={isMenuActive ? styles.menuWrapperActive : ''}
        onClick={() => setIsMenuActive(false)}
      />
      <div
        className={`${styles.menu} ${isMenuActive ? styles.menuActive : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className={styles.menu__list}>
          {headings.map((heading) => (
            <li className={styles.menu__item} key={heading.keyName}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.menu__active : styles.menu__link
                }
                to={heading.link}
              >
                {heading.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className={styles.social}>
          {socialIcons.map((icon) => (
            <li key={icon.alt}>
              <a
                className={styles.svg}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
              >
                <HeaderSvgGenerator id={icon.src} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <NavLink className={styles.logo} to="/">
        <img src={logo} alt="Нейротренажеры.рф лого" />
      </NavLink>

      <div
        className={`${styles.burger} ${
          isMenuActive ? styles.burgerActive : ''
        }`}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default HeaderMenu;
