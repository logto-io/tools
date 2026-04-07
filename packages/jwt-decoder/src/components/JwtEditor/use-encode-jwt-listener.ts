import { type ProtectedHeaderParameters, type JWTPayload } from 'jose';
import { useCallback, useContext, useEffect } from 'react';

import { JwtContext } from '../../context/JwtContextProvider';
import { EditorMode, type Secrets } from '../../types';
import { encodeJwt, parseAlgorithmFromHeader } from '../../utils';

/**
 * Encodes the JWT  and update the context
 *
 * - Listen to changes in the payload secret and header
 * - Update the context with the encoded JWT
 */
const useEncodeJwtListener = () => {
  const { mode, setJwt, secretData, decodedHeader, decodedPayload } = useContext(JwtContext);

  const asyncEncodeJwt = useCallback(
    async (header: ProtectedHeaderParameters, payload: JWTPayload, secret: Secrets) => {
      try {
        const encodedJwt = await encodeJwt(header, payload, secret);
        setJwt(encodedJwt ?? '');
      } catch (error: unknown) {
        console.error(error);
        setJwt('');
      }
    },
    [setJwt]
  );

  // Encode the JWT
  useEffect(() => {
    if (mode === EditorMode.Decode) {
      return;
    }

    const algorithm = parseAlgorithmFromHeader(decodedHeader);

    // If the algorithm is not supported or the secret is not provided, clear the JWT
    if (!algorithm || !secretData[algorithm]) {
      setJwt('');
      return;
    }

    void asyncEncodeJwt(decodedHeader, decodedPayload, secretData[algorithm]);
  }, [asyncEncodeJwt, decodedHeader, decodedPayload, mode, secretData, setJwt]);
};

export default useEncodeJwtListener;
