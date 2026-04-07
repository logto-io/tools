import CheckBoxStroke from '../../assets/check-box-stroke.svg?react';
import CheckBox from '../../assets/check-box.svg?react';
import Connection from '../../assets/connection.svg?react';
import { usePhrases } from '../../i18n';
import { EditorMode } from '../../types';
import { isHmacSecret } from '../../utils';

import styles from './index.module.scss';
import useSecrets from './use-secrets';

const buildKeyPlaceholder = (
  placeholder: string,
  type: 'PUBLIC' | 'PRIVATE'
) => `-----BEGIN ${type} KEY-----
{${placeholder}}
-----END ${type} KEY-----
`;

const SecretsEditor = () => {
  const { t } = usePhrases('jwt_decoder');
  const { mode, showJwksUrl, currentSecret, toggleShowJwksUrl, updateSecret } = useSecrets();

  // Render the HMAC secret editor
  if (isHmacSecret(currentSecret)) {
    return (
      <div className={styles.secretForm}>
        <div className={styles.editorPanel}>
          <div className={styles.editorHeader}>
            <div className={styles.editorTitle}>{t('hmac_secret_label')}</div>
            <div className={styles.encodeCheckbox}>
              <input
                hidden
                type="checkbox"
                id="base64Encoded"
                checked={currentSecret.base64Encoded}
                onChange={(event) => {
                  updateSecret({ ...currentSecret, base64Encoded: event.target.checked });
                }}
              />
              <label htmlFor="base64Encoded">
                {currentSecret.base64Encoded ? <CheckBox /> : <CheckBoxStroke />}
                {t('base64_encoded_label')}
              </label>
            </div>
          </div>
          <textarea
            className={styles.secretEditor}
            placeholder={t('hmac_secret_placeholder')}
            value={currentSecret.secret}
            onChange={(event) => {
              updateSecret({ ...currentSecret, secret: event.target.value });
            }}
          />
        </div>
      </div>
    );
  }

  // Render the asymmetric secret editor
  return (
    <div className={styles.secretForm}>
      <div className={styles.editorPanel}>
        <div className={styles.editorHeader}>
          <div className={styles.editorTitle}>
            {showJwksUrl ? t('jwks_endpoint_uri_label') : t('public_key_label')}
          </div>
          {mode === EditorMode.Decode && (
            <button className={styles.linkButton} onClick={toggleShowJwksUrl}>
              <Connection /> {showJwksUrl ? t('public_key_link') : t('jwks_endpoint_uri_link')}
            </button>
          )}
        </div>
        {showJwksUrl ? (
          <input
            placeholder={t('jwks_endpoint_uri_placeholder')}
            className={styles.jwksUrlInput}
            value={currentSecret.jwksUrl}
            onChange={(event) => {
              updateSecret({ ...currentSecret, jwksUrl: event.target.value, publicKey: undefined });
            }}
          />
        ) : (
          <textarea
            placeholder={buildKeyPlaceholder(t('public_key_placeholder'), 'PUBLIC')}
            className={styles.secretEditor}
            value={currentSecret.publicKey}
            onChange={(event) => {
              updateSecret({ ...currentSecret, publicKey: event.target.value, jwksUrl: undefined });
            }}
          />
        )}
      </div>
      {mode === EditorMode.Encode && (
        <div className={styles.editorPanel}>
          <div className={styles.editorHeader}>
            <div className={styles.editorTitle}>{t('private_key_label')}</div>
          </div>
          <textarea
            placeholder={buildKeyPlaceholder(t('private_key_placeholder'), 'PRIVATE')}
            className={styles.secretEditor}
            value={currentSecret.privateKey}
            onChange={(event) => {
              updateSecret({ ...currentSecret, privateKey: event.target.value });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SecretsEditor;
