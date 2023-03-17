import React from 'react';
import styles from './MainButton.module.scss';

type Props = {
    children: any,
    props: any
}

const MainButton = ({children, ...props}: Props) => {
    return (
        <button {...props} className={`${styles.btn} ${props.className}`}>
            {children}
        </button>
    );
};

export default MainButton;