import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import {
  harnessIacmPlugin,
  HarnessIacmPage,
} from '../src/plugin';

createDevApp()
  .registerPlugin(harnessIacmPlugin)
  .addPage({
    element: <HarnessIacmPage />,
    title: 'Root Page',
    path: '/harness-iacm',
  })
  .render();
