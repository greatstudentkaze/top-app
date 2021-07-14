import React from 'react';

import { HeadingTag } from '../components';
import { withLayout } from '../layout';

const Error500 = (): JSX.Element => {

  return <>
    <HeadingTag level="1">
      Ошибка 500
    </HeadingTag>
  </>;
};

export default withLayout(Error500);
