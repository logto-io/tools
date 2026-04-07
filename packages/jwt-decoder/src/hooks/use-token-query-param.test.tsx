import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { useTokenQueryParam } from './use-token-query-param';

describe('useTokenQueryParam', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/?token=abc123');
  });

  it('reads the token query parameter after mount', async () => {
    const { result } = renderHook(() => useTokenQueryParam());

    await waitFor(() => {
      expect(result.current).toBe('abc123');
    });
  });
});
