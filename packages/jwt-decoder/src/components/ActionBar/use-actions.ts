import { useCallback, useContext } from 'react';
import { toast } from 'react-hot-toast';

import { buildDefaultHeader, defaultPayload, QueryParam } from '../../const';
import { HeaderPayloadEditorContext } from '../../context/HeaderPayloadEditorContextProvider';
import { JwtContext } from '../../context/JwtContextProvider';
import { usePhrases } from '../../i18n';
import { keys, type Algorithm } from '../../keys';
import { EditorMode, type Secrets } from '../../types';
import { encodeJwt, isHmac } from '../../utils';

const getSecretByAlgorithm = (algorithm: Algorithm): Secrets => {
  if (isHmac(algorithm)) {
    return {
      algorithm,
      secret: keys[algorithm],
    };
  }

  return {
    algorithm,
    publicKey: keys[algorithm].PUBLIC_KEY,
    privateKey: keys[algorithm].PRIVATE_KEY,
  };
};

const useActions = () => {
  const { t } = usePhrases('jwt_decoder');
  const { mode, jwt, setJwt, setSecretData } = useContext(JwtContext);
  const { setRawHeader, setRawPayload } = useContext(HeaderPayloadEditorContext);

  const setJwtExample = useCallback(
    async (algorithm: Algorithm) => {
      const secret = getSecretByAlgorithm(algorithm);
      const header = buildDefaultHeader(algorithm);
      setSecretData({ [algorithm]: secret });

      // Set JWT value on Decode mode.
      // Let the JwtEditor handle the decoding
      if (mode === EditorMode.Decode) {
        const jwt = await encodeJwt(header, defaultPayload, secret);
        if (jwt) {
          setJwt(jwt);
        }
        return;
      }

      // Set the raw header and payload on Encode mode.
      // Let the HeaderEditor and PayloadEditor handle the raw values parsing
      // Let the JwtEditor handle the encoding
      setRawHeader(JSON.stringify(header, null, 4));
      setRawPayload(JSON.stringify(defaultPayload, null, 4));
    },
    [mode, setJwt, setRawHeader, setRawPayload, setSecretData]
  );

  const onShareUrl = useCallback(async () => {
    const url = new URL(window.location.href);
    url.searchParams.set(QueryParam.Token, jwt);
    await navigator.clipboard.writeText(url.toString());
    toast.success(t('copy_to_clipboard'));
  }, [jwt, t]);

  return {
    setJwtExample,
    onShareUrl,
  };
};

export default useActions;
