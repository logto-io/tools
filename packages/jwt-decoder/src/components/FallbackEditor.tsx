type Props = {
  readonly className?: string;
};

const FallbackEditor = ({ className }: Props) => {
  return <textarea readOnly className={className} value="" />;
};

export default FallbackEditor;
