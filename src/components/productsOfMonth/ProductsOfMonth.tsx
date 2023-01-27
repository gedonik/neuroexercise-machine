import React from 'react';
import styles from './ProductsOfMonth.module.scss';

const ProductsOfMonth: React.FC = () => {
    return (
        <div className={styles.productsOfMonthWrapper}>
            <div className="container">
                <div className={styles.catalogHead}>
                    <h2 className="section-title">Товары месяца</h2>
                    <a className={styles.catalogLink} href="#">В каталог</a>
                </div>
            </div>
        </div>
    );
};

export default ProductsOfMonth;