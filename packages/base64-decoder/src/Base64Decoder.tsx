import { type ReactNode } from 'react';

import Decoder from './Decoder';
import { I18nProvider, type Base64DecoderI18nAdapter } from './i18n';

type Props = {
  readonly i18n: Base64DecoderI18nAdapter;
  readonly className?: string;
  /**
   * Optional node rendered after the URL-safe hint (in parentheses), e.g. a
   * "learn more" link to a deeper explanation on the host page.
   */
  readonly urlSafeLearnMore?: ReactNode;
};

const Base64Decoder = ({ i18n, className, urlSafeLearnMore }: Props) => {
  return (
    <I18nProvider i18n={i18n}>
      <Decoder className={className} urlSafeLearnMore={urlSafeLearnMore} />
    </I18nProvider>
  );
};

export default Base64Decoder;
