import classNames from 'classnames';
import { useState } from 'react';

import ActionBar from './components/ActionBar';
import HeaderEditor from './components/HeaderEditor';
import Headline from './components/Headline';
import JwtEditor from './components/JwtEditor';
import PayloadEditor from './components/PayloadEditor';
import SecretsEditor from './components/SecretsEditor';
import Section from './components/Section';
import { HeaderPayloadEditorContextProvider } from './context/HeaderPayloadEditorContextProvider';
import { JwtContextProvider } from './context/JwtContextProvider';
import styles from './index.module.scss';
import { EditorMode } from './types';

type Props = {
  readonly className?: string;
};

const Decoder = ({ className }: Props) => {
  const [mode, setMode] = useState<EditorMode>(EditorMode.Decode);

  return (
    <Section className={className}>
      <JwtContextProvider mode={mode} setMode={setMode}>
        <HeaderPayloadEditorContextProvider>
          <Headline />
          <div className={classNames(styles.contentForm, styles[mode])}>
            <div className={styles.jwtColumn}>
              <JwtEditor />
            </div>
            <div className={styles.contentColumn}>
              <HeaderEditor />
              <PayloadEditor />
            </div>
          </div>
          <SecretsEditor />
          <ActionBar />
        </HeaderPayloadEditorContextProvider>
      </JwtContextProvider>
    </Section>
  );
};

export default Decoder;
