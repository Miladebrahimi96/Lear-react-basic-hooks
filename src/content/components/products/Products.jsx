import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../product/Product';
import styles from "./Products.module.css"

//api
import { getProducts } from '../../../core/services/fetchProoducts';

//context
import { ProductContext } from '../../../context/ProductContextProvider';

const Products = () => {

    const products = useContext(ProductContext)

    console.log(products)

    return (
        <div className={styles.container}>
            {
                products &&
                products.map(product => (
                    <Product key={product.id} data={product} />
                ))
            }
        </div>
    );
};

export default Products;