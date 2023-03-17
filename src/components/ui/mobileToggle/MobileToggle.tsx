import React from 'react';
import styles from "./MobileToggle.module.scss";

interface PropsType {
    title: string,
    content: React.FC,
    setVisible: () => boolean
}

const MobileToggle = (props: PropsType) => {
    const {title, content, setVisible} = props;

    return (
        <div className={styles.mobWrapper}>

            <div className={styles.mobHeader}>
                <h2 className={styles.mobTitle}>{title}</h2>
                <button className={`reset-btn ${styles.close}`} onClick={() => setVisible(false)}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {content}
        </div>
    );
};
//modal={<Modal/>}
export default MobileToggle;