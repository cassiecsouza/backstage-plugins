import { useEntity } from '@backstage/plugin-catalog-react';
import { match } from 'path-to-regexp';

export const useProjectSlugFromEntity = () => {
  let accountId;
  let orgId;
  let projectId;
  const { entity } = useEntity();
  const url = 'harness.io/project-url';
  const iacmProjectUrl = entity.metadata.annotations?.[url] as string;
  const urlMatch = match(
    '(.*)/account/:accountId/:module/orgs/:orgId/projects/:projectId/(.*)?',
    {
      decode: decodeURIComponent,
    },
  );

  const hostname = new URL(iacmProjectUrl).hostname;
  const envAB = hostname.split('.')[0];
  const envFromUrl = envAB === 'app' ? 'prod' : envAB;

  const urlParams: any = urlMatch(iacmProjectUrl ?? '');

  if (urlParams) {
    accountId = urlParams.params.accountId;
    orgId = urlParams.params.orgId;
    projectId = urlParams.params.projectId;
  }

  return { projectId, orgId, accountId, urlParams, envFromUrl };
};
