import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: FirstLevelMenuItem['id'],
  page: TopPageModel,
  products: ProductModel[],
}
