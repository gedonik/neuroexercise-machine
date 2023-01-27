import React from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = (props: any) => {
    return (
       <input {...props} className={styles.input}/>
    );
};

export default SearchInput;