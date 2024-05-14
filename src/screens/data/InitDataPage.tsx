import { useInitData, useInitDataRaw } from '@tma.js/sdk-react';
import { type FC, type ReactNode, useMemo } from 'react';
import type { User } from '@tma.js/sdk';

import { DisplayData, type DisplayDataRow } from '~/components/DisplayData/DisplayData.tsx';
import { Link } from '~/components/Link/Link.tsx';
import { Master } from '~/components/Master.tsx';

function getUserRows(user: User): DisplayDataRow[] {
  return [
    { title: 'ID', value: user.id.toString() },
    { title: 'Фамилия', value: user.lastName },
    { title: 'Имя', value: user.firstName },
    { title: 'Робот?', value: user.isBot },
    { title: 'Премиум', value: user.isPremium },
    { title: 'Язык', value: user.languageCode },
  ];
}

export const InitDataPage: FC = () => {
  const initData = useInitData();
  const initDataRaw = useInitDataRaw();

  const initDataRows = useMemo<DisplayDataRow[] | undefined>(() => {
    if (!initData || !initDataRaw) {
      return;
    }
    const {
      // hash,
      // queryId,
      // chatType,
      // chatInstance,
      authDate,
      // startParam,
      // canSendAfter,
      // canSendAfterDate,
    } = initData;
    return [
      { title: 'DATA', value: initDataRaw },
      { title: 'Дата авторизации', value: authDate.toLocaleString() },
      { title: 'Дата авторизации UNIX', value: authDate.getTime() / 1000 },
      // { title: 'ХЕШ', value: hash },
      // { title: 'can_send_after', value: canSendAfterDate?.toISOString() },
      // { title: 'can_send_after (raw)', value: canSendAfter },
      // { title: 'query_id', value: queryId },
      // { title: 'start_param', value: startParam },
      // { title: 'chat_type', value: chatType },
      // { title: 'chat_instance', value: chatInstance },
    ];
  }, [initData, initDataRaw]);

  const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return initData && initData.user ? getUserRows(initData.user) : undefined;
  }, [initData]);

  const receiverRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return initData && initData.receiver ? getUserRows(initData.receiver) : undefined;
  }, [initData]);

  const chatRows = useMemo<DisplayDataRow[] | undefined>(() => {
    if (!initData?.chat) {
      return;
    }
    const { id, title, type, username, photoUrl } = initData.chat;

    return [
      { title: 'ID', value: id.toString() },
      { title: 'Название', value: title },
      { title: 'Тип', value: type },
      { title: 'Логин', value: username },
      { title: 'URL фото', value: photoUrl },
    ];
  }, [initData]);

  let contentNode: ReactNode;

  if (!initDataRows) {
    contentNode = (
      <i>
        Данные не переданы. Проверьте ссылку и убедитесь, что она содержит параметры запуска.
      </i>
    );
  } else {
    contentNode = (
      <>
        <div className="init-data-page__section">
          <h2 className="init-data-page__section-title">
            Данные инициализации
          </h2>
          <DisplayData rows={initDataRows} />
        </div>

        <div className="init-data-page__section">
          <h2 className="init-data-page__section-title">
            Пользователь
          </h2>
          {userRows
            ? <DisplayData rows={userRows} />
            : (
              <i>
                Информация о пользователе отсутствует. Возможно, пользователь не авторизован.
              </i>
)}
        </div>

        <div className="init-data-page__section">
          <h2 className="init-data-page__section-title">
            Получатель
          </h2>
          {receiverRows
            ? <DisplayData rows={receiverRows} />
            : (
              <i>
                Информация о получателе отсутствует. Возможно, получатель не авторизован.
              </i>
)}
        </div>

        <div className="init-data-page__section">
          <h2 className="init-data-page__section-title">
            Чат
          </h2>
          {chatRows
            ? <DisplayData rows={chatRows} />
            : (
              <i>
                Информация о чате отсутствует. Возможно, чат не передан.
              </i>
)}
        </div>
      </>
    );
  }

  return (
    <Master>
      Страница для демонстрации передаваемых данных в
      {' '}
      приложение. Подробнее о передаваемых данных можно
      {' '}
      <Link to="https://docs.telegram-mini-apps.com/platform/launch-parameters">
        прочитать в разделе
      </Link>
      .
      {contentNode}
    </Master>
  );
};
