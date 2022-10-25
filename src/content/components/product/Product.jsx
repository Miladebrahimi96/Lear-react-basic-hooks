import React from 'react';

import styles from "./Product.module.css"

const Product = ({ data }) => {

    const { image, title, price } = data
    return (
        <div className={styles.container}>
            <img src={image} alt={title} />
            <div>
                <p>{title}</p>
                <span>{price} $</span>
            </div>
        </div>
    );
};

export default Product;