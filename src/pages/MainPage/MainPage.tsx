import React from 'react';
import Header from "../../components/header/Header";
import MainProducts from "../../components/mainProducts/MainProducts";
import ProductsOfMonth from "../../components/productsOfMonth/ProductsOfMonth";
import styles from './MainPage.module.scss';
import Neuropsychologists from "../../components/neuropsychologists/Neuropsychologists";
import NeuroexerciseMachines from "../../components/neuroexerciseMachines/NeuroexerciseMachines";
import About from "../../components/about/About";
import Feedback from "../../components/feedback/Feedback";

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
            {/*<section className={styles.neuropsychologists}>*/}
            {/*    <Neuropsychologists/>*/}
            {/*</section>*/}
            {/*<section className={styles.neuroexerciseMachines}>*/}
            {/*    <NeuroexerciseMachines/>*/}
            {/*</section>*/}
            {/*<section className={styles.about}>*/}
            {/*    <About/>*/}
            {/*</section>*/}
            {/*<section className={styles.feedback}>*/}
            {/*    <Feedback/>*/}
            {/*</section>*/}
        </div>
    );
};

export default MainPage;