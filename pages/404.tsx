import React from 'react';

import { HeadingTag } from '../components';
import { withLayout } from '../layout';

export const Error404 = (): JSX.Element => (
  <>
    <HeadingTag level="1">
      Ошибка 404
    </HeadingTag>
  </>
);

export default withLayout(Error404);
