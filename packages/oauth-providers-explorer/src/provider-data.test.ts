import { describe, expect, it } from 'vitest';

import { getProviderById, searchProviders } from './provider-data';

describe('getProviderById', () => {
  it('returns the provider matching the given id', () => {
    expect(getProviderById('github')?.name).toBe('GitHub');
  });

  it('returns undefined for an unknown id', () => {
    expect(getProviderById('unknown-provider')).toBeUndefined();
  });
});

describe('searchProviders', () => {
  it('returns all providers when the keyword is empty', () => {
    expect(searchProviders().length).toBeGreaterThan(0);
    expect(searchProviders('')).toEqual(searchProviders());
  });

  it('matches provider names case-insensitively', () => {
    const results = searchProviders('GITHUB');
    expect(results).toHaveLength(1);
    expect(results[0]?.id).toBe('github');
  });

  it('returns an empty list when nothing matches', () => {
    expect(searchProviders('no-such-provider')).toHaveLength(0);
  });
});
