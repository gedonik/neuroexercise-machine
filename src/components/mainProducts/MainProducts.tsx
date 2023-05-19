import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchProducts, selectProducts } from '../../store/slices/catalogSlice';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';

import styles from './MainProducts.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.scss';

function MainProducts() {
  const dispatch = useAppDispatch();
  const { isLoading, products, error } = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const mainProducts = products.filter((product) =>
    product.category.find((item) => item === 'main-product')
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>error...</h2>;
  }

  return (
    <div className={styles.mainProducts}>
      <div className="container">
        <div className={styles.mainProducts__wrapper}>
          {mainProducts.map((item, idx) => {
            if (item.category.find((cat) => cat === 'main-card')) {
              return (
                <div className={styles.mainCard} key={item.id}>
                  <article className={styles.mainCard__content}>
                    <h2 className={styles.mainCard__title}>{item.title}</h2>
                    <p className={styles.mainCard__descr}>{item.titleDescr}</p>
                    <div className={styles.mainCard__img}>
                      <img src={item.altImg} alt={item.title} />
                    </div>
                    <Link className={styles.mainCard__link} to="/">
                      Узнать подробности
                    </Link>
                  </article>
                </div>
              );
            }
            return (
              <div
                className={`${
                  idx === 1 ? styles.smallTopCard : styles.smallBottomCard
                } ${styles.smallCards}`}
                key={item.id}
              >
                <article className={styles.smallCards__content}>
                  <h2 className={styles.smallCards__title}>{item.title}</h2>
                  <p className={styles.smallCards__descr}>{item.titleDescr}</p>
                  <div className={styles.smallCards__img}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <Link className={styles.smallCards__link} to="/">
                    Подробнее
                  </Link>
                </article>
              </div>
            );
          })}
        </div>

        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {mainProducts.map((item, idx) => {
            if (item.category.find((cat) => cat === 'main-card')) {
              return (
                <SwiperSlide key={item.id}>
                  <div className={`${styles.mobCard} ${styles.mainCard}`}>
                    <article className={styles.mobCard__content}>
                      <h2 className={styles.mobCard__title}>{item.title}</h2>
                      <div className={styles.mobCard__img}>
                        <img src={item.altImg} alt={item.title} />
                      </div>
                      <Link className={styles.mobCard__link} to="/">
                        Узнать подробности
                      </Link>
                    </article>
                  </div>
                </SwiperSlide>
              );
            }
            return (
              <SwiperSlide key={item.id}>
                <div
                  className={`${
                    idx === 1 ? styles.smallTopCard : styles.smallBottomCard
                  } ${styles.mobCard}`}
                >
                  <article className={styles.mobCard__content}>
                    <h2 className={styles.mobCard__title}>{item.title}</h2>
                    <div className={styles.mobCard__img}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <Link className={styles.mobCard__link} to="/">
                      Подробнее
                    </Link>
                  </article>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MainProducts;
