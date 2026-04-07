import { useContext, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { HeaderPayloadEditorContext } from '../context/HeaderPayloadEditorContextProvider';
import { JwtContext } from '../context/JwtContextProvider';
import { usePhrases } from '../i18n';
import { EditorMode } from '../types';
import { isValidJwtHeader } from '../utils';

import JsonEditor from './JsonEditor';

const HeaderEditor = () => {
  const { t } = usePhrases('jwt_decoder');
  const { decodedHeader, setDecodedHeader, mode } = useContext(JwtContext);
  const { rawHeader, setRawHeader } = useContext(HeaderPayloadEditorContext);

  const debounceSetDecodedHeader = useDebouncedCallback((value: string) => {
    try {
      const json: unknown = JSON.parse(value);
      if (isValidJwtHeader(json)) {
        setDecodedHeader(json);
      }
    } catch {
      setDecodedHeader({});
    }
  }, 200);

  // Listen to the decodedHeader changes and update the raw header on decode mode
  useEffect(() => {
    if (mode === EditorMode.Decode) {
      setRawHeader(JSON.stringify(decodedHeader, null, 4));
    }
  }, [decodedHeader, mode, setRawHeader]);

  // Listen to the raw header changes and update the decoded header on encode mode.
  // If the header is not a valid JWT header, set an empty object.
  useEffect(() => {
    if (mode === EditorMode.Decode) {
      return;
    }

    debounceSetDecodedHeader(rawHeader);
  }, [rawHeader, mode, debounceSetDecodedHeader]);

  return (
    <JsonEditor
      title={mode === EditorMode.Decode ? t('decoded_header_label') : t('header_label')}
      value={rawHeader}
      isReadOnly={mode === EditorMode.Decode}
      onChange={setRawHeader}
    />
  );
};

export default HeaderEditor;
