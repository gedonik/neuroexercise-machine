import React from 'react';
import styles from './HeadingsMenu.module.scss';
import {HeaderSvgGenerator} from "../headerSvgGenerator/HeaderSvgGenerator";
import {IconsType} from "../../../globalTypes";

type HeadingsType = {
    title: string,
    keyName: string
}

const HeadingsMenu: React.FC = () => {
    const headings: HeadingsType[] = [
        {title: 'Главная', keyName: 'main'},
        {title: 'О компании', keyName: 'about'},
        {title: 'Каталог', keyName: 'catalog'},
        {title: 'Покупателям', keyName: 'forCustomers'},
        {title: 'Доставка и оплата', keyName: 'deliveryAndPayment'},
        {title: 'Акции', keyName: 'sales'},
        {title: 'Блог', keyName: 'blog'},
        {title: 'Контакты', keyName: 'contacts'},
    ]

    const socialIcons: IconsType[] = [
        {src: 'vk', alt: 'Вконтакте', link: 'https://vk.ru/'},
        {src: 'instagram', alt: 'Инстаграмм', link: 'https://www.instagram.com/'},
        {src: 'whatsapp', alt: 'Ватсапп', link: 'https://www.whatsapp.com/'}
    ]

    return (
        <div className={styles.headingsMenu}>
            <ul className={styles.headingsMenu__list}>
                {headings.map((heading) => (
                    <li className={styles.headingsMenu__item} key={heading.keyName}>
                        <a href="#">
                            {heading.title}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className={styles.social}>
                {socialIcons.map(icon => (
                    <li key={icon.alt}>
                        <a className={styles.svg} href={icon.link} target="_blank">
                            <HeaderSvgGenerator id={icon.src}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeadingsMenu;