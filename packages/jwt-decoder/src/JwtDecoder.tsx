import Decoder from './Decoder';
import { fallbackLanguage, I18NovaProvider, type Language } from './i18n';

type Props = {
  readonly currentLanguage?: Language;
  readonly className?: string;
};

const JwtDecoder = ({ currentLanguage, className }: Props) => {
  const resolvedLanguage = currentLanguage ?? fallbackLanguage;

  return (
    <I18NovaProvider currentLanguage={resolvedLanguage}>
      <Decoder className={className} />
    </I18NovaProvider>
  );
};

export default JwtDecoder;
