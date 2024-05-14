import {
  ClosingBehavior,
  postEvent,
  setDebug,
} from '@tma.js/sdk';
import { DisplayGate, SDKProvider, useLaunchParams } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC, useEffect, useMemo } from 'react';

import { App } from '~/components/App.tsx';
import { ErrorBoundary } from '~/components/ErrorBoundary.tsx';
import { GlobalStyle } from '~/globalStyle.tsx';

const DisplayError: FC<{ error: unknown }> = ({ error }) => (
  <blockquote>
    <code>
      {error instanceof Error
        ? error.message
        : JSON.stringify(error)}
    </code>
  </blockquote>
);

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <DisplayError error={error} />
  </div>
);

const ErrorBoundarySDK: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>
      An error occurred while initializing the SDK. You are probably running the application
      outside of Telegram (in usual browser, for example).
    </p>
    <DisplayError error={error} />
  </div>
);

const Loading: FC = () => <div>Немного терпения</div>;

const Inner: FC = () => {
  const launchParams = useLaunchParams();

  postEvent('web_app_setup_back_button', { is_visible: false });
  postEvent('web_app_setup_settings_button', { is_visible: false });
  postEvent('web_app_set_header_color', { color: '#060606' });

  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  const closingBehaviour = new ClosingBehavior(false, postEvent);

  closingBehaviour.enableConfirmation();

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (launchParams.startParam === 'debug') {
      setDebug(true);
      import('eruda').then((lib) => lib.default.init());
    }
  }, [launchParams]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
        <DisplayGate error={ErrorBoundarySDK} loading={Loading} initial={Loading}>
          <GlobalStyle />
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <Inner />
  </ErrorBoundary>
);
