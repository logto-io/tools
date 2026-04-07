import { noop } from '@silverhand/essentials';
import { type ProtectedHeaderParameters, type JWTPayload } from 'jose';
import { createContext, useEffect, useMemo, useState } from 'react';

import { Algorithm } from '../keys';
import { EditorMode, type SecretMap } from '../types';
import { parseAlgorithmFromHeader } from '../utils';

type JwtContextType = {
  readonly mode: EditorMode;
  readonly jwt: string;
  readonly decodedHeader: ProtectedHeaderParameters;
  readonly decodedPayload: JWTPayload;
  readonly isJwtVerified?: boolean | undefined;
  readonly algorithm: Algorithm;
  readonly secretData: SecretMap;
  readonly setMode: React.Dispatch<React.SetStateAction<EditorMode>>;
  readonly setJwt: React.Dispatch<React.SetStateAction<string>>;
  readonly setDecodedHeader: React.Dispatch<React.SetStateAction<ProtectedHeaderParameters>>;
  readonly setDecodedPayload: React.Dispatch<React.SetStateAction<JWTPayload>>;
  readonly setAlgorithm: React.Dispatch<React.SetStateAction<Algorithm>>;
  readonly setSecretData: React.Dispatch<React.SetStateAction<SecretMap>>;
  readonly setIsJwtVerified: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const defaultValue: JwtContextType = {
  mode: EditorMode.Decode,
  jwt: '',
  decodedHeader: {},
  decodedPayload: {},
  algorithm: Algorithm.RS256,
  secretData: {},
  setMode: noop,
  setJwt: noop,
  setDecodedHeader: noop,
  setDecodedPayload: noop,
  setAlgorithm: noop,
  setSecretData: noop,
  setIsJwtVerified: noop,
};

export const JwtContext = createContext<JwtContextType>(defaultValue);

type Props = {
  readonly mode: EditorMode;
  readonly setMode: React.Dispatch<React.SetStateAction<EditorMode>>;
  readonly children: React.ReactNode;
};

export const JwtContextProvider = ({ children, mode, setMode }: Props) => {
  const [jwt, setJwt] = useState(defaultValue.jwt);
  const [decodedHeader, setDecodedHeader] = useState<ProtectedHeaderParameters>(
    defaultValue.decodedHeader
  );
  const [decodedPayload, setDecodedPayload] = useState<JWTPayload>(defaultValue.decodedPayload);
  const [algorithm, setAlgorithm] = useState<Algorithm>(defaultValue.algorithm);
  const [secretData, setSecretData] = useState<SecretMap>(defaultValue.secretData);
  const [isJwtVerified, setIsJwtVerified] = useState<boolean | undefined>();

  // Try to parse the algorithm from the header
  useEffect(() => {
    const algorithmFromHeader = parseAlgorithmFromHeader(decodedHeader);

    if (algorithmFromHeader) {
      setAlgorithm(algorithmFromHeader);
    }
  }, [decodedHeader]);

  const context = useMemo<JwtContextType>(
    () => ({
      mode,
      jwt,
      decodedHeader,
      decodedPayload,
      algorithm,
      secretData,
      isJwtVerified,
      setMode,
      setJwt,
      setDecodedHeader,
      setDecodedPayload,
      setAlgorithm,
      setSecretData,
      setIsJwtVerified,
    }),
    [algorithm, decodedHeader, decodedPayload, isJwtVerified, jwt, mode, secretData, setMode]
  );

  return <JwtContext.Provider value={context}>{children}</JwtContext.Provider>;
};
