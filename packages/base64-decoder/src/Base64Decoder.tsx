import Decoder from './Decoder';
import { I18nProvider, type Base64DecoderI18nAdapter } from './i18n';

type Props = {
  readonly i18n: Base64DecoderI18nAdapter;
  readonly className?: string;
};

const Base64Decoder = ({ i18n, className }: Props) => {
  return (
    <I18nProvider i18n={i18n}>
      <Decoder className={className} />
    </I18nProvider>
  );
};

export default Base64Decoder;
