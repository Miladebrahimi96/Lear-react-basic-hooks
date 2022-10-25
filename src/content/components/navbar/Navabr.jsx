import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navabr = () => {
    return (
        <div className={styles.container}>
            <a href="#">Test Project</a>
            <ul className={styles.listContainer}>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="#">Link 3</Link></li>
            </ul>
        </div>
    );
};

export default Navabr;