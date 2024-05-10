import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { harnessIacmRouteRef } from './route-refs';

import { rootRouteRef } from './routes';

// Create a plugin instance and export this from your plugin package
export const harnessIacmPlugin = createPlugin({
  id: 'harness-iacm',
  routes: {
    root: rootRouteRef, // This is where the route ref should be exported for usage in the app
  },
});

// This creates a routable extension, which are typically full pages of content.
// Each extension should also be exported from your plugin package.
export const HarnessIacmPage = harnessIacmPlugin.provide(
  createRoutableExtension({
    name: 'HarnessIacmPage',
    // The component needs to be lazy-loaded. It's what will actually be rendered in the end.
    component: () => import('./components/Router').then(m => m.Router),
    // This binds the extension to this route ref, which allows for routing within and across plugin extensions
    mountPoint: harnessIacmRouteRef,
  }),
);

export const EntityHarnessIacmContent =
  harnessIacmPlugin.provide(
    createRoutableExtension({
      name: 'HarnnessIacmContent',
      component: () => import('./components/Router').then(m => m.Router),
      mountPoint: harnessIacmRouteRef,
    }),
  );
