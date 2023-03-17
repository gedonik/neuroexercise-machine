import React, {useEffect, useState} from 'react';
import {ProductCardType} from "../../types";
import {useFetching} from "../hooks/useFetching";
import api from "../../services/fetch/api/api";
import ProductsOfMonthSceleton from "../ui/skeleton/ProductsOfMonthSkeleton";
import styles from "../neuropsychologists/Neuropsychologists.module.scss";
import ProductCard from "../productCard/ProductCard";

const NeuroexerciseMachines = () => {
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
                <h2 className="section-title">Нейротренажеры</h2>
                <a className="catalog-link" href="#">В каталог</a>
            </div>

            {dataError
                ? <h2>Sorry we have some error</h2>
                : isLoading
                    ?
                    <ProductsOfMonthSceleton/>
                    :
                    <div className="product-list">
                        {products.map(product => (
                                <ProductCard product={product} key={product.id}/>
                            )
                        )}
                    </div>
            }
        </div>
    );
};

export default NeuroexerciseMachines;