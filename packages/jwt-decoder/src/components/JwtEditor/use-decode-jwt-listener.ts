import { decodeProtectedHeader, decodeJwt, type ProtectedHeaderParameters } from 'jose';
import { useContext, useEffect } from 'react';

import { JwtContext } from '../../context/JwtContextProvider';
import { Algorithm } from '../../keys';
import { EditorMode } from '../../types';

const parseAlgorithmFromHeader = (header: ProtectedHeaderParameters): Algorithm | undefined => {
  if (typeof header.alg !== 'string') {
    return undefined;
  }

  if (header.alg in Algorithm) {
    // eslint-disable-next-line no-restricted-syntax
    return header.alg as Algorithm;
  }
};

/**
 * Decode the JWT and update the context
 *
 * - Listen to changes in the JWT value and decode it.
 * - Update the context with the decoded header and payload.
 * - Update the secret algorithm with the algorithm from the header.
 *
 * @remarks
 * Only runs when the mode is {@link EditorMode.Decode}.
 */
const useDecodeJwtListener = () => {
  const { jwt, mode, decodedHeader, setDecodedHeader, setDecodedPayload, setAlgorithm } =
    useContext(JwtContext);

  // Decode the JWT
  useEffect(() => {
    if (mode === EditorMode.Encode) {
      return;
    }

    try {
      const header = decodeProtectedHeader(jwt);
      setDecodedHeader(header);
    } catch {
      setDecodedHeader({});
    }

    try {
      const payload = decodeJwt(jwt);
      setDecodedPayload(payload);
    } catch {
      setDecodedPayload({});
    }
  }, [jwt, mode, setDecodedHeader, setDecodedPayload]);

  // Try to parse the algorithm from the header
  useEffect(() => {
    if (mode === EditorMode.Encode) {
      return;
    }

    const algorithm = parseAlgorithmFromHeader(decodedHeader);

    if (algorithm) {
      setAlgorithm(algorithm);
    }
  }, [setDecodedHeader, mode, decodedHeader, setAlgorithm]);
};

export default useDecodeJwtListener;
