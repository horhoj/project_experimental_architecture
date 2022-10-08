import { FC } from 'react';
import { Page404 } from '../features/Page404';
import { Main } from '../features/Main';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['main', 'page404'] as const;

export type RouteNameList = typeof routeNameList[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  main: {
    path: '/main',
    component: Main,
  },
  page404: {
    path: '*',
    component: Page404,
  },
};
