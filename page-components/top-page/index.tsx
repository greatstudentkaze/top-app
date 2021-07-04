import React from 'react';
import { TopPageComponentProps } from './index.props';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
  return (
    <>
      {products && products.length}
    </>
  );
};

export default TopPageComponent;
