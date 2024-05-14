import type { ComponentType, JSX } from 'react';

import { Friends } from '~/screens/Friends';
import { Main } from '~/screens/Main.tsx';
import { Market } from '~/screens/Market.tsx';
import { Tasks } from '~/screens/Tasks.tsx';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: Main },
  // TODO Remove this route when airdrop is implemented
  { path: '/airdrop', Component: Main },
  { path: '/friends', Component: Friends },
  { path: '/tasks', Component: Tasks },
  { path: '/market', Component: Market },
];
