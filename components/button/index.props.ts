import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: 'ghost',
  children: ReactNode,
}
