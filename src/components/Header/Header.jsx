import React from 'react';
import styles from './Header.module.css';




const Header = (props) => {
    return (
        <header className={styles.header}>
            <h4>Users list</h4>
        </header>
    );
}

export default Header;