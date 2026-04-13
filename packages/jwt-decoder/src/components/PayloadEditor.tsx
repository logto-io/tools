import { useContext, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { HeaderPayloadEditorContext } from '../context/HeaderPayloadEditorContextProvider';
import { JwtContext } from '../context/JwtContextProvider';
import { usePhrases } from '../i18n';
import { EditorMode } from '../types';

import JsonEditor from './JsonEditor';

const PayloadEditor = () => {
  const { t } = usePhrases();
  const { decodedPayload, setDecodedPayload, mode } = useContext(JwtContext);
  const { rawPayload, setRawPayload } = useContext(HeaderPayloadEditorContext);

  const debounceSetDecodedPayload = useDebouncedCallback((value: string) => {
    try {
      const json: unknown = JSON.parse(value);
      // @ts-expect-error Allow the payload to be any JSON object
      setDecodedPayload(json);
    } catch {
      setDecodedPayload({});
    }
  }, 200);

  // Listen to the decodedPayload changes and update the raw payload on decode mode
  useEffect(() => {
    if (mode === EditorMode.Decode) {
      setRawPayload(JSON.stringify(decodedPayload, null, 4));
    }
  }, [decodedPayload, mode, setRawPayload]);

  // Listen to the rawPayload changes and update the decoded payload on encode mode.
  // If the payload is not a valid JWT payload, set an empty object.
  useEffect(() => {
    if (mode === EditorMode.Decode) {
      return;
    }

    debounceSetDecodedPayload(rawPayload);
  }, [rawPayload, mode, debounceSetDecodedPayload]);

  return (
    <JsonEditor
      title={mode === EditorMode.Decode ? t('decoded_payload_label') : t('payload_label')}
      value={rawPayload}
      isReadOnly={mode === EditorMode.Decode}
      onChange={setRawPayload}
    />
  );
};

export default PayloadEditor;
