import { fallbackLanguage, findLanguage, ReactI18Nova } from 'i18nova';

import Decoder from './Decoder';
import { I18NovaProvider, type Language } from './i18n';

type Props = {
  readonly currentLanguage?: Language;
  readonly className?: string;
};

const JwtDecoder = ({ currentLanguage, className }: Props) => {
  const inheritedLanguage = ReactI18Nova.useGlobalCurrentLanguage();
  const resolvedLanguage = currentLanguage ?? findLanguage(inheritedLanguage) ?? fallbackLanguage;

  return (
    <I18NovaProvider currentLanguage={resolvedLanguage}>
      <Decoder className={className} />
    </I18NovaProvider>
  );
};

export default JwtDecoder;
