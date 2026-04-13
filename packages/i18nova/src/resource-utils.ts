import type { MayBeImport } from './types';

const isImportFunction = <T>(resource: MayBeImport<T>): resource is () => Promise<{ default: T }> =>
  typeof resource === 'function';

export const resolveMayBeImport = async <T>(resource: MayBeImport<T>): Promise<{ default: T }> =>
  isImportFunction(resource) ? resource() : { default: resource };

const singleKeyRecord = <Key extends string, Value>(key: Key, value: Value): Record<Key, Value> =>
  // TypeScript widens computed generic keys to `string`; this assertion restores the exact key type.
  // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/consistent-type-assertions
  ({ [key]: value }) as Record<Key, Value>;

export const withNamespace = async <Namespace extends string, T>(
  namespace: Namespace,
  loader: () => Promise<{ default: T }>
): Promise<{ default: Record<Namespace, T> }> => {
  const module = await loader();

  return {
    default: singleKeyRecord(namespace, module.default),
  };
};
