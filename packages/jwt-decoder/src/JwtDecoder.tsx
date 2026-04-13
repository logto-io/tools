import Decoder from './Decoder';
import { I18nProvider, type JwtDecoderI18nAdapter } from './i18n';

type Props = {
  readonly i18n: JwtDecoderI18nAdapter;
  readonly className?: string;
};

const JwtDecoder = ({ i18n, className }: Props) => {
  return (
    <I18nProvider i18n={i18n}>
      <Decoder className={className} />
    </I18nProvider>
  );
};

export default JwtDecoder;
