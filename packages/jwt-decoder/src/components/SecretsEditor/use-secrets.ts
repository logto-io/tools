import { useCallback, useContext, useState, useMemo, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { emptyAsymmetricSecret, emptyHmacSecret } from '../../const';
import { JwtContext } from '../../context/JwtContextProvider';
import { EditorMode, type Secrets } from '../../types';
import { isHmac, verifyJwt } from '../../utils';

const useSecrets = () => {
  const { algorithm, secretData, setSecretData, mode, jwt, setIsJwtVerified } =
    useContext(JwtContext);
  const [showJwksUrl, setShowJwksUrl] = useState(false);

  /**
   * Find the current secret based on the algorithm
   * @remarks
   * If the secret is not found for the algorithm, return an empty secret object
   */
  const currentSecret = useMemo<Secrets>(() => {
    const data = secretData[algorithm];

    if (data) {
      return data;
    }

    return {
      algorithm,
      ...(isHmac(algorithm) ? emptyHmacSecret : emptyAsymmetricSecret),
    };
  }, [algorithm, secretData]);

  const updateSecret = useCallback(
    (data: Secrets) => {
      setSecretData((previous) => ({ ...previous, [data.algorithm]: data }));
    },
    [setSecretData]
  );

  const toggleShowJwksUrl = useCallback(() => {
    setShowJwksUrl((previous) => !previous);
  }, []);

  const debouncedVerifyJwt = useDebouncedCallback(async (jwt: string, secret: Secrets) => {
    const isVerified = await verifyJwt(jwt, secret);
    setIsJwtVerified(isVerified);
  }, 200);

  // Verify the JWT on JWT or secret changes
  useEffect(() => {
    void debouncedVerifyJwt(jwt, currentSecret);
  }, [debouncedVerifyJwt, jwt, currentSecret]);

  // Do not show the JWKs URL input field on encode mode
  useEffect(() => {
    if (mode === EditorMode.Encode) {
      setShowJwksUrl(false);
    }
  }, [mode]);

  return {
    mode,
    showJwksUrl,
    currentSecret,
    toggleShowJwksUrl,
    updateSecret,
  };
};

export default useSecrets;
