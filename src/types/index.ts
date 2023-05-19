export type HeadingsType = {
  title: string;
  keyName: string;
  link: string;
};

export type IconsType = {
  src: string;
  alt: string;
  link: string;
};

export type HeaderCategoriesType = {
  title: string;
  keyName: string;
};

export interface ProductCardType {
  id: number;
  img: string;
  title: string;
  shortDescr: string;
  price: number;
  salePrice: number;
}

export interface CatalogInitialStateType {
  isLoading: boolean;
  products: [];
  error: null;
}
