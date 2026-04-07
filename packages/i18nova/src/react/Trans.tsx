import { type ComponentType, type ReactNode } from 'react';

export type TransProps = {
  readonly phrase: string;
  readonly components?: Record<string, ComponentType<{ readonly children?: ReactNode }>>;
};

const TransSelfClosing = ({ phrase, components }: TransProps) => {
  // Extract all component names from the phrase and replace them with the corresponding
  // components from the components prop by matching the component name with the key in the
  // `components` prop.
  const componentRegex = /<(\w+)\s*\/>/g;
  const matches = [...phrase.matchAll(componentRegex)];

  if (matches.length === 0) {
    return phrase;
  }

  const parts = phrase.split(componentRegex);

  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return part;
    }

    const componentName = part;
    const Component = components?.[componentName];

    if (!Component) {
      return;
    }

    // eslint-disable-next-line react/no-array-index-key
    return <Component key={index} />;
  });
};

export const Trans = ({ phrase, components }: TransProps) => {
  // Extract all component names from the phrase and replace them with the corresponding
  // components from the components prop by matching the component name with the key in the
  // `components` prop.
  const componentRegex = /<(\w+)>([^<]*)<\/\1>/g;
  const splitRegex = /<(\w+)>[^<]*<\/\1>/g;
  const matches = [...phrase.matchAll(componentRegex)];

  if (matches.length === 0) {
    return <TransSelfClosing phrase={phrase} components={components} />;
  }

  const parts = phrase.split(splitRegex);

  return parts.map((part, index) => {
    if (index % 2 === 0) {
      // eslint-disable-next-line react/no-array-index-key
      return <TransSelfClosing key={index} phrase={part} components={components} />;
    }

    const componentName = part;
    const Component = components?.[componentName];
    const content = matches[(index + 1) / 2 - 1]?.[2];

    if (!Component) {
      return content;
    }

    // eslint-disable-next-line react/no-array-index-key
    return <Component key={index}>{content}</Component>;
  });
};
