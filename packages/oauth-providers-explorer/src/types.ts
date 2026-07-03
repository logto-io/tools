export type ProviderData = {
  id: string;
  name: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
