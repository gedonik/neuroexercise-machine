import React, { useEffect } from 'react';

import { fetchProducts, selectProducts } from '../../store/slices/catalogSlice';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import ProductCard from '../productCard/ProductCard';
import ProductsOfMonthSceleton from '../ui/skeleton/ProductsOfMonthSkeleton';

import styles from './ProductsOfMonth.module.scss';

function ProductsOfMonth() {
  const dispatch = useAppDispatch();
  const { isLoading, products, error } = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsOfMonth = products.filter((product) =>
    product.category.find((item) => item === 'product-of-month')
  );

  if (isLoading) {
    return <ProductsOfMonthSceleton />;
  }

  return (
    <div className={styles.productsOfMonthWrapper}>
      <div className="container">
        <div className="catalog-head">
          <h2 className="section-title">Товары месяца</h2>
          <a className="catalog-link" href="#">
            В каталог
          </a>
        </div>

        {error ? (
          <h2>{error.payload}</h2>
        ) : (
          <div className={styles.catalogList}>
            {productsOfMonth.length ? (
              productsOfMonth.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <h2>No product</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsOfMonth;
