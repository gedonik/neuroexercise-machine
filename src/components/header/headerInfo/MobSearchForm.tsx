import React from 'react';
import styles from "./MobSearchMenu.module.scss";
import SearchInput from "../../ui/searchInput/SearchInput";

const MobSearchForm = () => {
        return (
        <form className={styles.searchForm} action="#">
            <label className={styles.searchLabel} htmlFor="header-search">
                <SearchInput type="text" name="header-search"
                             id="header-search" placeholder="Что вы ищите?"/>
            </label>
            <button className={`reset-btn ${styles.mobSearchBtn}`} type="submit">Искать</button>
        </form>
    );
};

export default MobSearchForm;