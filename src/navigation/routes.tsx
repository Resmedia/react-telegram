import type { ComponentType, JSX } from 'react';

import { IndexPage } from '~/pages/IndexPage/IndexPage';
import { InitDataPage } from '~/pages/InitDataPage/InitDataPage';
import { LaunchParamsPage } from '~/pages/LaunchParamsPage/LaunchParamsPage.tsx';
import { ThemeParamsPage } from '~/pages/ThemeParamsPage/ThemeParamsPage.tsx';
import { TONConnectPage } from '~/pages/TONConnectPage/TONConnectPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/init-data', Component: InitDataPage, title: 'Передоваемые данные TG' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Параметры темы' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Параметры запуска' },
  {
    path: '/ton-connect',
    Component: TONConnectPage,
    title: 'TON Connect'
  },
];
