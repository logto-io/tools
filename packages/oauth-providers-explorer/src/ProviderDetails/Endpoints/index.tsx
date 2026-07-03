import { usePhrases } from '../../i18n';
import { type ProviderData } from '../../types';

import Endpoint from './Endpoint';
import styles from './index.module.scss';

type Props = {
  readonly data: ProviderData;
};

const Endpoints = ({
  data: {
    name,
    endpoints: {
      oidcDiscoveryEndpoint,
      issuer,
      authorizationEndpoint,
      tokenEndpoint,
      userinfoEndpoint,
      jwksUri,
      revocationEndpoint,
      endSessionEndpoint,
      introspectionEndpoint,
    },
  },
}: Props) => {
  const { t } = usePhrases();

  return (
    <div className={styles.endpoints}>
      {oidcDiscoveryEndpoint && (
        <Endpoint
          title={t('oidc_discovery_endpoint', { name })}
          description={t('oidc_discovery_endpoint_description')}
          endpoint={oidcDiscoveryEndpoint}
        />
      )}
      {issuer && (
        <Endpoint
          title={t('issuer', { name })}
          description={t('issuer_description')}
          endpoint={issuer}
        />
      )}
      {authorizationEndpoint && (
        <Endpoint
          title={t('authorization_endpoint', { name })}
          description={t('authorization_endpoint_description')}
          endpoint={authorizationEndpoint}
        />
      )}
      {tokenEndpoint && (
        <Endpoint
          title={t('token_endpoint', { name })}
          description={t('token_endpoint_description')}
          endpoint={tokenEndpoint}
        />
      )}
      {userinfoEndpoint && (
        <Endpoint
          title={t('userinfo_endpoint', { name })}
          description={t('userinfo_endpoint_description')}
          endpoint={userinfoEndpoint}
        />
      )}
      {jwksUri && (
        <Endpoint
          title={t('jwks_uri', { name })}
          description={t('jwks_uri_description')}
          endpoint={jwksUri}
        />
      )}
      {revocationEndpoint && (
        <Endpoint
          title={t('revocation_endpoint', { name })}
          description={t('revocation_endpoint_description')}
          endpoint={revocationEndpoint}
        />
      )}
      {endSessionEndpoint && (
        <Endpoint
          title={t('end_session_endpoint', { name })}
          description={t('end_session_endpoint_description')}
          endpoint={endSessionEndpoint}
        />
      )}
      {introspectionEndpoint && (
        <Endpoint
          title={t('introspection_endpoint', { name })}
          description={t('introspection_endpoint_description')}
          endpoint={introspectionEndpoint}
        />
      )}
    </div>
  );
};

export default Endpoints;
