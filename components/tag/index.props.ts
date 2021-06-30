import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium',
  color?: 'primary' | 'ghost' | 'red' | 'green' | 'gray',
  href?: string,
  children: React.ReactNode,
}
