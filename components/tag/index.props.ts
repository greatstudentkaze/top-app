import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'small' | 'medium',
  color?: 'primary' | 'ghost' | 'red' | 'green' | 'gray',
  href?: string,
  children: React.ReactNode,
}
