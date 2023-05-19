import { HeadingsType, IconsType, HeaderCategoriesType } from '../../types';

export const headings: HeadingsType[] = [
  { title: 'Главная', keyName: 'main', link: '/' },
  { title: 'О компании', keyName: 'about', link: '/about' },
  { title: 'Каталог', keyName: 'catalog', link: '/catalog' },
  { title: 'Покупателям', keyName: 'forCustomers', link: '/for-customers' },
  {
    title: 'Доставка и оплата',
    keyName: 'deliveryAndPayment',
    link: '/delivery',
  },
  { title: 'Акции', keyName: 'sales', link: '/actions' },
  { title: 'Блог', keyName: 'blog', link: '/blog' },
  { title: 'Контакты', keyName: 'contacts', link: 'contacts' },
];

export const socialIcons: IconsType[] = [
  { src: 'vk', alt: 'Вконтакте', link: 'https://vk.com/neyrorf' },
  { src: 'whatsapp', alt: 'Ватсапп', link: 'https://www.whatsapp.com/' },
];

export const headerCategories: HeaderCategoriesType[] = [
  { title: 'Мозжечковая стимуляция', keyName: 'cerebellarStimulation' },
  { title: 'Межполушарные доски', keyName: 'interHemisphereBoards' },
  { title: 'Нейровосьмерки', keyName: 'Neuroeights' },
  { title: 'Балансиры и балансборды', keyName: 'balanceDesks' },
  { title: 'Кинезио мешки', keyName: 'kinesioSacks' },
  { title: 'Кинезио мячи', keyName: 'kinesioBalls' },
];
