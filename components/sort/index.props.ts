import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sortType: SortTypeEnum,
  setSortType: (sortType: SortTypeEnum) => void,
}

export enum SortTypeEnum {
  Rating,
  Price,
}
