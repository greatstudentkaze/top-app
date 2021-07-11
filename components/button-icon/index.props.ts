import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import UpArrowIcon from './icons/up-arrow.svg';
import CrossIcon from './icons/cross.svg';
import BurgerIcon from './icons/burger.svg';

export const Icon = {
  UP_ARROW: UpArrowIcon,
  CROSS: CrossIcon,
  BURGER: BurgerIcon,
};

export type IconName = keyof typeof Icon;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: 'white',
  icon: IconName,
}
