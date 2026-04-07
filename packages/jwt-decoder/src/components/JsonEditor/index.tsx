import classNames from 'classnames';
import Prism from 'prismjs';
import Editor from 'react-simple-code-editor';
// eslint-disable-next-line import/no-unassigned-import
import 'prismjs/components/prism-json';

import { useMounted } from '../../hooks/use-mounted';
import FallbackEditor from '../FallbackEditor';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly isReadOnly?: boolean;
};

const JsonEditor = ({ title, value, onChange, isReadOnly }: Props) => {
  const mounted = useMounted();

  return (
    <div className={styles.editorPanel}>
      <div className={styles.editorTitle}>{title}</div>
      {mounted ? (
        <Editor
          className={classNames(styles.jsonEditor, isReadOnly && styles.readOnly)}
          readOnly={isReadOnly}
          value={value}
          tabSize={4}
          highlight={(code) =>
            Prism.languages.json ? Prism.highlight(code, Prism.languages.json, 'json') : code
          }
          padding={24}
          onValueChange={onChange}
        />
      ) : (
        <FallbackEditor
          className={classNames(styles.jsonEditor, isReadOnly && styles.readOnly, styles.fallback)}
        />
      )}
    </div>
  );
};

export default JsonEditor;
