import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '../layout';

import { MenuItem } from '../interfaces/menu.interface';

const Search = ({ menu }: SearchProps): JSX.Element => {

  return <>
    search
  </>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/find`, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}
