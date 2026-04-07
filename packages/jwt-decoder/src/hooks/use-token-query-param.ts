import { useMemo } from 'react';

import { useMounted } from './use-mounted';

export const useTokenQueryParam = (param = 'token') => {
  const mounted = useMounted();

  return useMemo(() => {
    if (!mounted) {
      return;
    }

    return new URLSearchParams(window.location.search).get(param) ?? undefined;
  }, [mounted, param]);
};
