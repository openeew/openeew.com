import { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export default createContext({});

export const useAppContext = () => {
  const { t } = useTranslation();

  return {
    t,
  };
};
