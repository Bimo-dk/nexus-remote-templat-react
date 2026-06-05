import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerNexusRemote } from '@bimo-dk/nexus-runtime-react';
import App from './app.js';

declare const __NEXUS_REMOTE_NAME__: string;
declare const __NEXUS_TOKEN__: string;
declare const __NEXUS_REGISTRY_URL__: string;

registerNexusRemote({
  name: __NEXUS_REMOTE_NAME__,
  url: `${window.location.origin}/remoteEntry.json`,
  exposedModule: './RemoteEntry',
  routePath: '__REMOTE_ROUTE__',
  registryUrl: __NEXUS_REGISTRY_URL__,
  token: __NEXUS_TOKEN__,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
);
