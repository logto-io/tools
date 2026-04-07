/**
 * @fileoverview
 * Use this context to manage the state of the raw JWT header and payload content.
 */

import { noop } from '@silverhand/essentials';
import { useState, useMemo, createContext } from 'react';

type ContextType = {
  readonly rawHeader: string;
  readonly rawPayload: string;
  readonly setRawHeader: React.Dispatch<React.SetStateAction<string>>;
  readonly setRawPayload: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  readonly children: React.ReactNode;
};

export const HeaderPayloadEditorContext = createContext<ContextType>({
  rawHeader: '{}',
  rawPayload: '{}',
  setRawHeader: noop,
  setRawPayload: noop,
});

export const HeaderPayloadEditorContextProvider = ({ children }: Props) => {
  const [rawHeader, setRawHeader] = useState('{}');
  const [rawPayload, setRawPayload] = useState('{}');

  const context = useMemo<ContextType>(
    () => ({
      rawHeader,
      rawPayload,
      setRawHeader,
      setRawPayload,
    }),
    [rawHeader, rawPayload]
  );

  return (
    <HeaderPayloadEditorContext.Provider value={context}>
      {children}
    </HeaderPayloadEditorContext.Provider>
  );
};
