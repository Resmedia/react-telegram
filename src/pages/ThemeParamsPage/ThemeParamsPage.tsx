import { useThemeParams } from '@tma.js/sdk-react';
import type { FC } from 'react';

import { DisplayData } from '~/components/DisplayData/DisplayData.tsx';
import { Link } from '~/components/Link/Link.tsx';
import { Page } from '~/components/Page/Page.tsx';

export const ThemeParamsPage: FC = () => {
  const themeParams = useThemeParams();

  return (
    <Page
      title="Параметры темы"
      disclaimer={(
        <>
          Эти параметры используются для настройки темы приложения.
          {' '}
          <Link to="https://docs.telegram-mini-apps.com/platform/theming">
            Подробнее о них можно прочитать в документации
          </Link>
        </>
      )}
    >
      <DisplayData
        rows={
          Object
            .entries(themeParams.getState())
            .map(([title, value]) => ({
              title: title
                .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
                .replace(/background/, 'bg'),
              value,
            }))
        }
      />
    </Page>
  );
};
