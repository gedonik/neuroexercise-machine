import React from 'react';

import { NavLink } from 'react-router-dom';

import { headerCategories } from '../links';

import styles from './MobCategoryList.module.scss';

function MobCategoryList() {
  return (
    <ul className={styles.categoriesList}>
      {headerCategories.map((category) => (
        <li className={styles.categoriesItem} key={category.keyName}>
          <NavLink className={styles.categories__link} to="#">
            {category.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MobCategoryList;
