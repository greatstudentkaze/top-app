import { SortTypeEnum } from '../../components/sort/index.props';
import { ProductModel } from '../../interfaces/product.interface';

export type SortAction = { type: SortTypeEnum.Price } | { type: SortTypeEnum.Rating };

export interface State {
  sortType: SortTypeEnum,
  products: ProductModel[],
}

export const sortReducer = (state: State, action: SortAction): State => {
  switch (action.type) {
    case SortTypeEnum.Rating:
      return {
        ...state,
        products: state.products.sort((a, b) => a.initialRating - b.initialRating),
        sortType: SortTypeEnum.Rating
      };
    case SortTypeEnum.Price:
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
        sortType: SortTypeEnum.Price
      };
    default:
      return state;
  }
};
