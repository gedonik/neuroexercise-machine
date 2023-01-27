import React from 'react';
import Header from "../../components/header/Header";
import MainProducts from "../../components/mainProducts/MainProducts";
import ProductsOfMonth from "../../components/productsOfMonth/ProductsOfMonth";
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Header/>
            <section className="main-product">
                <MainProducts/>
            </section>
            <section className="products-of-month">
                <ProductsOfMonth/>
            </section>
        </div>
    );
};

export default MainPage;