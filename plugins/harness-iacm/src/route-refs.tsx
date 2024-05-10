import { createRouteRef, createSubRouteRef } from '@backstage/core-plugin-api';

export const harnessIacmRouteRef = createRouteRef({
  id: 'harness-iacm',
});

// export const harnessFeatureRouteRef = createSubRouteRef({
//   id: 'harness-feature-flag/features',
//   parent: harnessFeatureFlagsRouteRef,
//   path: '/:buildId',
// });
