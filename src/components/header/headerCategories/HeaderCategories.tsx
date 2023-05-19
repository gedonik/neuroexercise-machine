import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import MobileToggle from '../../ui/mobileToggle/MobileToggle';
import { headerCategories } from '../links';

import styles from './HeaderCategories.module.scss';
import MobCategoryList from './MobCategoryList';

function HeaderCategories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.categories}>
      <ul className={styles.categories__list}>
        {headerCategories.map((category) => (
          <li className={styles.categories__item} key={category.keyName}>
            <NavLink className={styles.categories__link} to="#">
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {isMenuOpen ? (
        <MobileToggle
          title="Каталог продукции"
          content={<MobCategoryList />}
          setVisible={setIsMenuOpen}
        />
      ) : (
        ''
      )}

      <button
        className={`reset-btn ${styles.categories__btn}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
      >
        Каталог продукции
      </button>
    </div>
  );
};

export default HeaderCategories;
