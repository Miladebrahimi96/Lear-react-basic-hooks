import React, { createContext, useEffect, useState } from 'react';
import { getProducts } from '../core/services/fetchProoducts';

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetch = async () => {
            setProducts(await getProducts('https://fakestoreapi.com/products'))
        }
        fetch()
    }, [])

    console.log(products)

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;