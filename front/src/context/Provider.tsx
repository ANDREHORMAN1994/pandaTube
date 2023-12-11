import { type ReactNode, createContext, useMemo, useState } from 'react';

type Props = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  imgPerfil: string;
  setImgPerfil: (imgPerfil: string) => void;
};

export const AuthContext = createContext({} as Props);

export function Provider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [imgPerfil, setImgPerfil] = useState('');

  const contextValue = useMemo(
    () => ({
      isAuth,
      setIsAuth,
      imgPerfil,
      setImgPerfil,
    }),
    [imgPerfil, isAuth]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
