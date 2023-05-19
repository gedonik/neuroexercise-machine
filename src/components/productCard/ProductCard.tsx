import React, { useState } from 'react';

import { ProductCardType } from '../../types';
import MainButton from '../ui/mainButton/MainButton';

import styles from './ProductCard.module.scss';

function ProductCard({ product }: ProductCardType) {
  const [quantity, setQuantity] = useState(1);

  const raiseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };

  const reduceQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const backgroundStatusChanger = (item) => {
    if (item === 'Рекомендуем') {
      return styles.statusRecommended;
    }
    if (item === 'Новинка') {
      return styles.statusNew;
    }
    if (item === '-30%' || item === '-10%') {
      return styles.statusSale;
    }
    if (item === 'Товар месяца') {
      return styles.statusProductOfMoth;
    }
    return '';
  };

  return (
    <article className={styles.product}>
      <div className={styles.content}>
        <a href="#" className={styles.imgLink}>
          <img className={styles.img} src={product.img} alt={product.title} />
          <div className={styles.statusWrapper}>
            {product.status.map((item) => (
              <span
                className={`${styles.status} ${backgroundStatusChanger(item)}`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </a>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.shortDescr}</p>
        <div className={styles.orderWrapper}>
          <div className={styles.priceWrapper}>
            {product.salePrice ? (
              <>
                <span className={styles.price}>{product.salePrice} p.</span>
                <span className={styles.salePrice}>{product.price} p.</span>
              </>
            ) : (
              <span className={styles.price}>{product.price} p.</span>
            )}
          </div>
          <div className={styles.changeQuantity}>
            <label htmlFor="productQuantity">
              <input
                className={styles.quantity}
                type="number"
                name="productQuantity"
                id="productQuantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
            <div className={styles.quantityBtns}>
              <button onClick={raiseQuantity} className={styles.addProduct}>
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 6 8"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66667 7L4.77974 4.40966C4.92082 4.29158 5 4.13184 5 3.96534C5 3.79883 4.92082 3.63909 4.77974 3.52101L1.74998 1"
                    stroke="white"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </button>
              <button onClick={reduceQuantity} className={styles.removeProduct}>
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 6 8"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66667 7L4.77974 4.40966C4.92082 4.29158 5 4.13184 5 3.96534C5 3.79883 4.92082 3.63909 4.77974 3.52101L1.74998 1"
                    stroke="white"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </button>
            </div>
            <button className={styles.buyBtn} type="submit">
              Купить
            </button>
          </div>
        </div>
        <MainButton className={styles.moreBtn}>Подробнее</MainButton>
      </div>
    </article>
  );
}

export default ProductCard;
