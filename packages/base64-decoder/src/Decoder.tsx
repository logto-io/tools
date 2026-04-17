import classNames from 'classnames';
import { useMemo, useState } from 'react';

import ActionBar from './components/ActionBar';
import Headline from './components/Headline';
import OptionsBar from './components/OptionsBar';
import Section from './components/Section';
import TextPane from './components/TextPane';
import { usePhrases } from './i18n';
import styles from './index.module.scss';
import { EditorMode } from './types';
import { Base64DecodeError, decodeBase64, encodeBase64 } from './utils';

type Props = {
  readonly className?: string;
};

type Computed = {
  plainText: string;
  base64Text: string;
  hasInvalidBase64: boolean;
};

const Decoder = ({ className }: Props) => {
  const { t } = usePhrases();
  const [mode, setMode] = useState<EditorMode>(EditorMode.Decode);
  const [urlSafe, setUrlSafe] = useState(false);
  const [plainInput, setPlainInput] = useState('');
  const [base64Input, setBase64Input] = useState(() => encodeBase64(t('welcome_sample')));

  const { plainText, base64Text, hasInvalidBase64 } = useMemo<Computed>(() => {
    if (mode === EditorMode.Encode) {
      return {
        plainText: plainInput,
        base64Text: encodeBase64(plainInput, urlSafe),
        hasInvalidBase64: false,
      };
    }

    try {
      return {
        plainText: decodeBase64(base64Input),
        base64Text: base64Input,
        hasInvalidBase64: false,
      };
    } catch (error: unknown) {
      if (error instanceof Base64DecodeError) {
        return {
          plainText: '',
          base64Text: base64Input,
          hasInvalidBase64: base64Input.trim() !== '',
        };
      }
      throw error;
    }
  }, [mode, urlSafe, plainInput, base64Input]);

  const onModeChange = (nextMode: EditorMode) => {
    if (nextMode === mode) {
      return;
    }

    if (nextMode === EditorMode.Decode) {
      setBase64Input(base64Text);
    } else {
      setPlainInput(plainText);
    }

    setMode(nextMode);
  };

  const output = mode === EditorMode.Encode ? base64Text : plainText;

  return (
    <Section className={className}>
      <Headline mode={mode} onModeChange={onModeChange} />
      <div className={classNames(styles.contentForm, styles[mode])}>
        <div className={styles.plainColumn}>
          <TextPane
            title={t('plain_text_label')}
            value={plainText}
            placeholder={mode === EditorMode.Encode ? t('plain_text_placeholder') : undefined}
            isReadOnly={mode === EditorMode.Decode}
            onChange={setPlainInput}
          />
        </div>
        <div className={styles.base64Column}>
          <TextPane
            title={t('base64_label')}
            value={base64Text}
            placeholder={mode === EditorMode.Decode ? t('base64_placeholder') : undefined}
            isReadOnly={mode === EditorMode.Encode}
            isInvalid={hasInvalidBase64}
            onChange={setBase64Input}
          />
          {hasInvalidBase64 && <div className={styles.errorText}>{t('invalid_base64')}</div>}
        </div>
      </div>
      <OptionsBar isUrlSafe={urlSafe} onUrlSafeChange={setUrlSafe} />
      <ActionBar output={output} />
    </Section>
  );
};

export default Decoder;
