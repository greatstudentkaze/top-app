import { createContext, PropsWithChildren, useState } from 'react';

import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[],
  setMenu?: (newMenu: MenuItem[]) => void;
  firstCategory: TopLevelCategory,

}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ children, firstCategory, menu }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  return <AppContext.Provider value={{ menu: menuState, setMenu: setMenuState, firstCategory }}>
    {children}
  </AppContext.Provider>;
};
