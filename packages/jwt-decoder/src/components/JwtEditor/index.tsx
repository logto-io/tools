import classNames from 'classnames';
import Prism from 'prismjs';
import { useContext, useEffect, useMemo } from 'react';
import Editor from 'react-simple-code-editor';

import Check from '../../assets/check.svg?react';
import Close from '../../assets/close.svg?react';
import { QueryParam } from '../../const';
import { JwtContext } from '../../context/JwtContextProvider';
import { useMounted } from '../../hooks/use-mounted';
import { useTokenQueryParam } from '../../hooks/use-token-query-param';
import { usePhrases } from '../../i18n';
import { EditorMode } from '../../types';
import FallbackEditor from '../FallbackEditor';

import { jwtGrammar } from './grammar';
import styles from './index.module.scss';
import useDecodeJwtListener from './use-decode-jwt-listener';
import useEncodeJwtListener from './use-encode-jwt-listener';

const JwtEditor = () => {
  const { t, getObject } = usePhrases('jwt_decoder');
  const { jwt, isJwtVerified, setJwt, mode } = useContext(JwtContext);
  const readOnly = mode === EditorMode.Encode;
  const isJwtUnverified = isJwtVerified === false;
  const hasJwtVerifiedStatus = typeof isJwtVerified === 'boolean';
  const mounted = useMounted();
  const token = useTokenQueryParam(QueryParam.Token);

  useDecodeJwtListener();
  useEncodeJwtListener();

  useEffect(() => {
    if (mode === EditorMode.Encode || !token) {
      return;
    }

    setJwt(token);
  }, [mode, setJwt, token]);

  const placeholderText = useMemo(() => {
    if (mode === EditorMode.Decode) {
      return t('jwt_editor_placeholder');
    }

    return `{{${getObject('instruction.jwt_structure.bullets')
      ?.map(({ label }: { label: string }) => label.toLocaleLowerCase())
      .join('}}.{{')}}}`;
  }, [mode, getObject, t]);

  return (
    <div className={styles.editorPanel}>
      <div className={styles.editorTitle}>
        {mode === EditorMode.Decode ? t('jwt_label') : t('encoded_jwt_label')}
      </div>
      {mounted ? (
        <Editor
          className={classNames(
            styles.jwtEditor,
            readOnly && styles.readOnly,
            isJwtVerified && styles.signatureVerified,
            isJwtUnverified && styles.signatureInvalid
          )}
          readOnly={readOnly}
          value={jwt}
          tabSize={4}
          highlight={(code) => Prism.highlight(code, jwtGrammar, 'json')}
          padding={24}
          placeholder={placeholderText}
          style={
            hasJwtVerifiedStatus
              ? {
                  paddingBottom: 48,
                }
              : undefined
          }
          onValueChange={setJwt}
        />
      ) : (
        <FallbackEditor
          className={classNames(styles.jwtEditor, readOnly && styles.readOnly, styles.fallback)}
        />
      )}

      {hasJwtVerifiedStatus && (
        <div
          className={classNames(
            styles.signatureStatus,
            isJwtVerified ? styles.verified : styles.invalid
          )}
        >
          {isJwtVerified ? <Check /> : <Close />}
          {t(isJwtVerified ? 'signature_verified' : 'invalid_signature')}
        </div>
      )}
    </div>
  );
};

export default JwtEditor;
