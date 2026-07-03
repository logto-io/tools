export type ProviderData = {
  id: string;
  name: string;
  Icon: React.FunctionComponent;
  oidcSupported?: boolean;
  endpoints: {
    oidcDiscoveryEndpoint?: string;
    issuer?: string;
    authorizationEndpoint?: string;
    tokenEndpoint?: string;
    jwksUri?: string;
    revocationEndpoint?: string;
    userinfoEndpoint?: string;
    endSessionEndpoint?: string;
    introspectionEndpoint?: string;
  };
  documentations?: Array<{
    title: string;
    url: string;
  }>;
};
