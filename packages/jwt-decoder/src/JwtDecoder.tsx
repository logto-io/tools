import Decoder from './Decoder';
import { I18NovaProvider, type Language } from './i18n';

type Props = {
  readonly currentLanguage: Language;
  readonly className?: string;
};

const JwtDecoder = ({ currentLanguage, className }: Props) => {
  return (
    <I18NovaProvider currentLanguage={currentLanguage}>
      <div className={className}>
        <Decoder />
      </div>
    </I18NovaProvider>
  );
};

export default JwtDecoder;
