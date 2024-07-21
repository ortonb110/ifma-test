'use client';
import { Provider } from 'react-redux';
import { store } from '@/app/GlobalStore/Store';

export const Providers = ({ children }: { children: any }) => {
  return <Provider store={store}>{children}</Provider>;
};
