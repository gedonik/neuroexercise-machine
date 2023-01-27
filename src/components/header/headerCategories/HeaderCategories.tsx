import React from 'react';
import styles from './HeaderCategories.module.scss';

type HeaderCategoriesType = {
    title: string,
    keyName: string
}

const HeaderCategories: React.FC = () => {
    const headerCategories: HeaderCategoriesType[] = [
        {title: 'Мозжечковая стимуляция', keyName: 'cerebellarStimulation'},
        {title: 'Межполушарные доски', keyName: 'interHemisphereBoards'},
        {title: 'Нейрокосички', keyName: 'neurobraids'},
        {title: 'Балансиры', keyName: 'balanceWeights'},
        {title: 'Нейровосьмерки', keyName: 'neuroeights'},
        {title: 'Разное', keyName: 'different'},
    ]

    return (
        <div className={styles.headerCategories}>
            <ul className={styles.headerCategories__list}>
                {headerCategories.map((category) => (
                    <li className={styles.headerCategories__item} key={category.keyName}>
                        {category.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderCategories;