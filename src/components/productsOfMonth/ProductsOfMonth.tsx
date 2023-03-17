import React, {useEffect, useState} from 'react';
import styles from './ProductsOfMonth.module.scss';
import ProductsOfMonthSceleton from "../ui/skeleton/ProductsOfMonthSkeleton";
import ProductCard from "../productCard/ProductCard";
import {useFetching} from "../hooks/useFetching";
import api from "../../services/fetch/api/api";
import {ProductCardType} from "../../types";

const ProductsOfMonth: React.FC = () => {
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
        <div className={styles.productsOfMonthWrapper}>
            <div className="container">
                <div className="catalog-head">
                    <h2 className="section-title">Товары месяца</h2>
                    <a className="catalog-link" href="#">В каталог</a>
                </div>

                {dataError
                    ? <h2>Sorry we have some error</h2>
                    : isLoading
                        ?
                        <ProductsOfMonthSceleton/>
                        :
                        <div className={styles.catalogList}>
                            {products.map(product => (
                                <ProductCard product={product} key={product.id}/>
                            ))}
                        </div>
                }
            </div>
        </div>
    );
};

export default ProductsOfMonth;