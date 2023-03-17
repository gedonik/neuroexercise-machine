import React from 'react';
import styles from './MainProducts.module.scss';
import {Link} from "react-router-dom";
import girlBilgoBoard from "../../assets/images/mainProducts/girl-bilgo-board.png";
import rockerBoard from '../../assets/images/mainProducts/rockerboard.png';
import neuroeights from '../../assets/images/mainProducts/neuroeights.png';

const MainProducts: React.FC = () => {
    return (
        <div className={styles.mainProducts}>
            <div className="container">
                <div className={styles.mainProducts__wrapper}>
                    <div className={styles.mainCard}>
                        <article className={styles.mainCard__content}>
                            <h2 className={styles.mainCard__title}>Доска Бильгоу</h2>
                            <p className={styles.mainCard__descr}>
                                Доска Бильгоу — тренажер для мозжечковой стимуляции. С помощью него ребенок учится
                                удерживать равновесие и управлять своим телом, и, таким образом, активирует все свои
                                внутренние ресурсы.
                            </p>
                            <div className={styles.mainCard__img}>
                                <img src={girlBilgoBoard} alt="Девочка на доске Бильгоу"/>
                            </div>
                            <Link className={styles.mainCard__link} to={'/'}>Узнать подробности</Link>
                        </article>
                    </div>

                    <div className={`${styles.smallTopCard} ${styles.smallCards}`}>
                        <article className={styles.smallCards__content}>
                            <h2 className={styles.smallCards__title}>РокерБорд</h2>
                            <p className={styles.smallCards__descr}>
                                РокерБорд — игровой тренажер для развития и укрепления эмоционального, физического
                                здоровья ребенка.
                            </p>
                            <div className={styles.smallCards__img}>
                                <img src={rockerBoard} alt="РокерБорд"/>
                            </div>
                            <Link className={styles.smallCards__link} to={'/'}>Подробнее</Link>
                        </article>
                    </div>

                    <div className={`${styles.smallBottomCard} ${styles.smallCards}`}>
                        <article className={styles.smallCards__content}>
                            <h2 className={styles.smallCards__title}>Комплект нейровосьмерок</h2>
                            <p className={styles.smallCards__descr}>
                                Комплект лабиринтов —
                                комплекс тренажеров
                                для развивающих игр и
                                упражнений.
                            </p>
                            <div className={styles.smallCards__img}>
                                <img src={neuroeights} alt="Комплект нейровосьмерок"/>
                            </div>
                            <Link className={styles.smallCards__link} to={'/'}>Подробнее</Link>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProducts;