import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '../../layout';
import { FirstLevelMenuItem, MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers';

const Type = ({ menu, page, products }: TypeProps) => {
  return (
    <div>
      type home
    </div>
  );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(item => `/${item.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(item => item.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/find`, {
    firstCategory: firstCategoryItem.id
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    }
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: FirstLevelMenuItem['id'],
}
