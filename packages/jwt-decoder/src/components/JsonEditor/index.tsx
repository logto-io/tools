import classNames from 'classnames';
import Prism from 'prismjs';
import Editor from 'react-simple-code-editor';

import { useMounted } from '../../hooks/use-mounted';
import FallbackEditor from '../FallbackEditor';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly isReadOnly?: boolean;
};

// Keep a local JSON grammar instead of importing `prismjs/components/prism-json`.
// The prism-json side-effect module expects a global `Prism` variable, which can break
// when bundled as ESM chunks in host apps (e.g. website + workspace package integration).
// Grammar adapted from Prism's official JSON component:
// https://github.com/PrismJS/prism/blob/master/components/prism-json.js
const jsonGrammar: Prism.Grammar = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\n\r"\\])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\n\r"\\])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true,
  },
  comment: {
    pattern: /\/\/.*|\/\*[\S\s]*?(?:\*\/|$)/,
    greedy: true,
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[,[\]{}]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: 'keyword',
  },
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
          highlight={(code) => Prism.highlight(code, jsonGrammar, 'json')}
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
