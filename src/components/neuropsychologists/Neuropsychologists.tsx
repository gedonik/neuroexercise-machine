import React, {useEffect, useState} from 'react';
import styles from './Neuropsychologists.module.scss';
import ProductsOfMonthSceleton from "../ui/skeleton/ProductsOfMonthSkeleton";
import ProductCard from "../productCard/ProductCard";
import {ProductCardType} from "../../types";
import {useFetching} from "../hooks/useFetching";
import api from "../../services/fetch/api/api";

const Neuropsychologists = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<ProductCardType[]>([])

    const [fetching, dataError] = useFetching(async () => {
        const response = await api.fetchData();
        setProducts([...products, ...response.data]);
    }, setIsLoading)

    useEffect(() => {
        fetching();
    }, [])

    return (

        <div className="container">
            <div className="catalog-head">
                <h2 className="section-title">Для нейропсихологов</h2>
                <a className="catalog-link" href="#">В каталог</a>
            </div>
            <div className={styles.wrapper}>
                <div className="video">
                    <a className={`video__link ${styles.video__linkNeuro}`} href="https://www.youtube.com/watch?v=WDoBzGs_QMI" target="_blank">
                        <svg width="50" height="40" viewBox="0 0 50 40" fill="inherit"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 39.0625C18.638 39.0625 13.0547 38.6466 9.49107 38.2978C4.97978 37.8563 1.38562 34.416 0.750538 29.9318C-0.250179 22.8294 -0.250179 16.2331 0.750538 9.13056C1.38562 4.64648 4.97978 1.20615 9.49107 0.764647C13.0546 0.41582 18.638 0 25 0C31.362 0 36.9453 0.41582 40.5089 0.764647C45.0202 1.20615 48.6144 4.64648 49.2495 9.13066C50.2502 16.2331 50.2502 22.8294 49.2495 29.9319C48.6144 34.416 45.0202 37.8563 40.5089 38.2978C36.9453 38.6466 31.362 39.0625 25 39.0625ZM25 3.90625C18.7957 3.90625 13.3486 4.31191 9.87165 4.65244C7.16004 4.91787 4.9999 6.98456 4.61844 9.67831C4.14538 13.0185 3.90553 16.3335 3.90553 19.5313C3.90553 22.7292 4.14538 26.044 4.61844 29.3842C4.9999 32.0781 7.16004 34.1448 9.87165 34.4102C13.3487 34.7506 18.7957 35.1564 25 35.1564C31.2043 35.1564 36.6514 34.7507 40.1283 34.4102C42.84 34.1448 45.0001 32.0781 45.3816 29.3843C45.8546 26.0441 46.0945 22.7292 46.0945 19.5313C46.0945 16.3335 45.8546 13.0186 45.3816 9.67841C45.0001 6.98456 42.84 4.91787 40.1283 4.65244C36.6514 4.31191 31.2043 3.90625 25 3.90625ZM22.4664 28.7886C19.855 28.8242 17.5167 26.5597 17.5779 23.9175V15.0962C17.5779 13.3296 18.4981 11.7516 20.0396 10.875C21.5931 9.9914 23.4377 10.0096 24.9732 10.923L32.387 15.3337C35.5416 17.1435 35.5408 21.8706 32.387 23.6799L24.9732 28.0905C24.1914 28.5556 23.3292 28.7886 22.4664 28.7886ZM22.471 14.136C22.2432 14.136 22.0619 14.2188 21.9707 14.2707C21.7891 14.374 21.4844 14.6185 21.4844 15.0962V23.9175C21.4844 24.3952 21.7891 24.6397 21.9707 24.7429C22.1228 24.8295 22.525 25.0018 22.976 24.7334L30.3897 20.3227C31.0209 19.946 31.0218 19.0683 30.3897 18.6908L22.976 14.2802C22.7955 14.1728 22.6229 14.136 22.471 14.136Z"
                                fill="#FA91B4"/>
                        </svg>
                    </a>
                </div>

                {dataError
                    ? <h2>Sorry we have some error</h2>
                    : isLoading
                        ?
                        <ProductsOfMonthSceleton/>
                        :
                        <div className={styles.list}>
                            {products.map(product => (
                                    <ProductCard product={product} key={product.id}/>
                                )
                            )}
                        </div>
                }

            </div>
        </div>
    );
};

export default Neuropsychologists;