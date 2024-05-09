import { useLaunchParams } from '@tma.js/sdk-react';
import type { FC } from 'react';

import { DisplayData } from '~/components/DisplayData/DisplayData.tsx';
import { Link } from '~/components/Link/Link.tsx';
import { Page } from '~/components/Page/Page.tsx';

export const LaunchParamsPage: FC = () => {
  const lp = useLaunchParams();

  return (
    <Page
      title="Параметры запуска"
      disclaimer={(
        <>
          Эти параметры передаются в приложение при запуске. Подробнее о них можно
          {' '}
          <Link to="https://docs.telegram-mini-apps.com/platform/launch-parameters">
            прочитать в разделе
          </Link>
          .
        </>
      )}
    >
      <DisplayData
        rows={[
          { title: 'tgWebAppPlatform', value: lp.platform },
          { title: 'tgWebAppShowSettings', value: lp.showSettings },
          { title: 'tgWebAppVersion', value: lp.version },
          { title: 'tgWebAppBotInline', value: lp.botInline },
          { title: 'tgWebAppStartParam', value: lp.showSettings },
          { title: 'tgWebAppData', value: <Link to="/init-data">View</Link> },
          { title: 'tgWebAppThemeParams', value: <Link to="/theme-params">View</Link> },
        ]}
      />
    </Page>
  );
};
