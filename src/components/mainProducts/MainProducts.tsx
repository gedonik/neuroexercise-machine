import React from 'react';
import styles from './MainProducts.module.scss';
import MainButton from "../ui/mainButton/MainButton";

const MainProducts: React.FC = () => {
    return (
        <div className={styles.mainProducts}>
            <div className="container">
                <div className={styles.mainProducts__wrapper}>
                    <div className={styles.bilgoBoard}>
                        <article className={styles.bilgoBoard__content}>
                            <h2 className={styles.bilgoBoard__title}>Доска Бильгоу</h2>
                            <p className={styles.bilgoBoard__descr}>
                                Cпециально разработанное устройство для работы над стимуляцией мозжечка. Принцип работы
                                балансировочной доски: Ребенок стоит на доске, которая закреплена на округлой основе,
                                что
                                заставляет
                                его удерживать равновесие.
                            </p>
                            <MainButton>Узнать подробности</MainButton>
                        </article>
                    </div>

                    <div className={`${styles.targetRack} ${styles.smallCards}`}>
                        <article className={styles.smallCards__content}>
                            <h2 className={styles.smallCards__title}>Стойка<br/> с мишенями-целями</h2>
                            <p className={styles.smallCards__descr}>
                                Стойка регулируется по высоте (от 60 до 120 см) стойка, На стойке расположено 5
                                мишеней-целей.
                            </p>
                            <a className={styles.smallCards__link} href="#">Подробнее</a>
                        </article>
                    </div>

                    <div className={`${styles.neuroeight} ${styles.smallCards}`}>
                        <article className={styles.smallCards__content}>
                        <h2 className={styles.smallCards__title}>Нейровосьмерка</h2>
                        <p className={styles.smallCards__descr}>
                            Один из тренажеров для мозжечковой стимуляции. Для успешного выполнения заданий необходимо
                            регулировать...
                        </p>
                            <a className={styles.smallCards__link} href="#">Подробнее</a>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProducts;