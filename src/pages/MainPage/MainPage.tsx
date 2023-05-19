import React from 'react';

import About from '../../components/about/About';
import Feedback from '../../components/feedback/Feedback';
import Header from '../../components/header/Header';
import MainProducts from '../../components/mainProducts/MainProducts';
import NeuroexerciseMachines from '../../components/neuroexerciseMachines/NeuroexerciseMachines';
import NewProducts from '../../components/newProducts/NewProducts';
import ProductsOfMonth from '../../components/productsOfMonth/ProductsOfMonth';

import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <section className="main-product">
        <MainProducts />
      </section>
      <section className="products-of-month">
        <ProductsOfMonth />
      </section>
      <section className={styles.newProducts}>
        <NewProducts />
      </section>
      {/* <section className={styles.neuroexerciseMachines}> */}
      {/*    <NeuroexerciseMachines/> */}
      {/* </section> */}
      {/* <section className={styles.about}> */}
      {/*    <About/> */}
      {/* </section> */}
      {/* <section className={styles.feedback}> */}
      {/*    <Feedback/> */}
      {/* </section> */}
    </div>
  );
}

export default MainPage;
