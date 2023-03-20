import React from 'react';
import styles from './MainProducts.module.scss';
import {Link} from "react-router-dom";
import girlBilgoBoard from "../../assets/images/mainProducts/girl-bilgo-board.png";
import rockerBoard from '../../assets/images/mainProducts/rockerboard.png';
import neuroeights from '../../assets/images/mainProducts/neuroeights.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.scss';

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

                <Swiper
                    className={styles.swiper}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className={`${styles.mobCard} ${styles.mainCard}`}>
                            <article className={styles.mobCard__content}>
                                <h2 className={styles.mobCard__title}>Доска Бильгоу</h2>
                                <div className={styles.mobCard__img}>
                                    <img src={girlBilgoBoard} alt="Девочка на доске Бильгоу"/>
                                </div>
                                <Link className={styles.mobCard__link} to={'/'}>Узнать подробности</Link>
                            </article>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.mobCard} ${styles.smallTopCard}`}>
                            <article className={styles.mobCard__content}>
                                <h2 className={styles.mobCard__title}>РокерБорд</h2>
                                <div className={styles.mobCard__img}>
                                    <img src={rockerBoard} alt="РокерБорд"/>
                                </div>
                                <Link className={styles.mobCard__link} to={'/'}>Узнать подробности</Link>
                            </article>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.mobCard} ${styles.smallBottomCard}`}>
                            <article className={styles.mobCard__content}>
                                <h2 className={styles.mobCard__title}>Комплект нейровосьмерок</h2>
                                <div className={styles.mobCard__img}>
                                    <img src={neuroeights} alt="Комплект нейровосьмерок"/>
                                </div>
                                <Link className={styles.mobCard__link} to={'/'}>Узнать подробности</Link>
                            </article>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default MainProducts;