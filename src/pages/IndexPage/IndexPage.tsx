import type { FC } from 'react';

import { Link } from '~/components/Link/Link.tsx';
import { Page } from '~/components/Page/Page.tsx';
import { routes } from '~/navigation/routes.tsx';

import './IndexPage.css';

export const IndexPage: FC = () => {
  return (
    <Page title="Привет Дмитрий!">
      <p className="panel">
        Это стартовая страница для демонстрации возможностей, запущенная в Docker контейнере на локальной машине, без деполя куда либо.
      </p>
      <ul className="index-page__links">
        {routes.map(({ path, title, icon }) => title && (
          <li className="index-page__link-item" key={path}>
            <Link className="index-page__link" to={path}>
              {icon && (
                <i className="index-page__link-icon">
                  {icon}
                </i>
              )}
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
};
