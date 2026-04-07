const jwt_decoder = {
  title: 'JWT decoder & encoder | Secure, simple, and user-friendly',
  description:
    'Quickly decode and encode JWTs online, and verify their signatures. Explore JWT examples using different algorithms, along with step-by-step JWT implementation guides.',
  encoder: 'Encoder',
  decoder: 'Decoder',
  subtitle:
    'Your data is 100% private -- JWT is fully decoded and encoded directly on your device.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Encoded JWT',
  decoded_header_label: 'Decoded header',
  header_label: 'Header',
  decoded_payload_label: 'Decoded payload',
  payload_label: 'Payload',
  signature_verified: 'Signature verified!',
  invalid_signature: 'Invalid Signature!',
  jwt_editor_placeholder: 'Paste your JWT here',
  hmac_secret_placeholder: 'Enter the HMAC secret',
  public_key_placeholder: 'Enter the public key here',
  private_key_placeholder: 'Enter the private key here',
  jwks_endpoint_uri_placeholder: 'Enter the JWKs endpoint URL',
  hmac_secret_label: 'Signing key',
  jwks_endpoint_uri_label: 'JWKs endpoint URI',
  public_key_label: 'Public key',
  private_key_label: 'Private key',
  base64_encoded_label: 'Base64 encoded',
  jwks_endpoint_uri_link: 'JWKs endpoint URI',
  public_key_link: 'Verify via public key',
  jwt_examples: 'JWT examples',
  share_jwt: 'Share JWT',
  copy_to_clipboard: 'URL copied to clipboard',
  instruction: {
    title: 'Learn about JWT',
    subtitle:
      'All information you concern about JWT and step-by-step guide to verify JWT in diverse framework.',
    what_is_jwt: {
      title: 'What is JWT?',
      description:
        'JWT (JSON Web Token) is a self-contained, stateless token that carries information in a structured and readable format. Whether you’re protecting an API or adopting token-based authentication for your application, JWTs are a powerful tool, because they:',
      bullets: [
        {
          label: 'Stateless',
          description:
            'JWTs are self-contained and do not require server-side state to validate. JWT can ensure data integrity via signatures.',
        },
        {
          label: 'Cross-service compatibility',
          description: 'JWTs can be easily shared and verified across different services.',
        },
        {
          label: 'Extensible',
          description:
            'The payload of a JWT can contain custom claims, allowing for flexible authorization and info sharing.',
        },
      ],
    },
    jwt_structure: {
      title: 'The structure of JWT',
      description:
        'A typical JWT is split into three parts, each encoded in Base64URL and separated by periods (.):',
      bullets: [
        {
          label: 'Header',
          description:
            'Contains metadata, such as the signing algorithm (e.g., HS256 or RS256) and the token’s type (JWT).',
        },
        {
          label: 'Payload',
          description:
            'Contains the actual data, like user ID, user profile, expiration time, or scopes.',
        },
        {
          label: 'Signature',
          description:
            "A hashed combination of the Header, Payload, and secured using a secret key. Its purpose is to ensure the token's integrity and confirm that it has not been altered",
        },
      ],
      summary:
        'This structure enables JWTs to provide a compact, secure way of transmitting information between parties.',
    },
    token_claims: {
      title: 'Common token claims in JWT',
      description:
        'The claims are part of the payload and hold the key information. Here are standardized Registered Claims for your refer:',
      table: {
        headers: ['Claims', 'Full name', 'Description'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Issuer',
            description: 'The entity that issued the JWT, like the authorization server.',
          },
          {
            claim: 'sub',
            full_name: 'Subject',
            description:
              "Identifies the JWT's subject, typically representing the authenticated user.",
          },
          {
            claim: 'aud',
            full_name: 'Audience',
            description:
              'Specifies which recipients can accept and process the token. This can be an array of values for multiple audiences or a single value for a single recipient.',
          },
          {
            claim: 'exp',
            full_name: 'Expiration Time',
            description:
              'Sets an expiration time on the token after which it becomes invalid. This helps prevent replay attacks by limiting how long a token remains valid.',
          },
          {
            claim: 'nbf',
            full_name: 'Not Before',
            description:
              'Makes a token valid only after this timestamp. Helpful in situations where clocks are not accessible.',
          },
          {
            claim: 'iat',
            full_name: 'Issued At',
            description:
              "When the token was created. This can be used to determine the token's age.",
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description:
              'A unique identifier for the token, useful to prevent the same token from being used multiple times (e.g., in replay attacks).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Depending on the specification and the configuration of the authorization server, additional claims may be included in the payload to support specific use cases. You can also add custom claims to JWT to meet unique business requirements.',
        id_token: {
          title: 'ID Token',
          description:
            'Used in OpenID Connect, it includes claims like profile information (e.g., name, email, etc.) about the authenticated user.',
        },
        access_token: {
          title: 'Access Token',
          description:
            'Used in OAuth 2.0, it grants access to specific resources or APIs on behalf of the user or application.',
        },
      },
      notification: {
        label: 'Caution',
        description:
          'Do not store private or sensitive information in JWT claims. While JWT claims are encoded (using Base64URL), they are not encrypted. This means anyone with the token can decode it and view the claims, even if they cannot alter it without invalidating the signature. Use encryption or other secure methods to safeguard sensitive data when necessary.',
      },
    },
    when_to_use: {
      title: 'When to use JWT?',
      description: 'JWTs can be particularly beneficial in the following scenarios:',
      bullets: [
        {
          label: 'Microservices architecture',
          description: 'For stateless authentication across multiple services.',
        },
        {
          label: 'Single sign-on (SSO) systems',
          description: 'Enabling access to multiple applications with one authentication.',
        },
        {
          label: 'Mobile applications',
          description: 'Efficiently maintaining user sessions across API calls.',
        },
        {
          label: 'High-traffic applications',
          description: ' Reducing database load in high-volume environments.',
        },
        {
          label: 'Cross-origin resource sharing (CORS)',
          description: 'Simplifying authentication across multiple domains.',
        },
        {
          label: 'Serverless architectures',
          description:
            'Providing stateless authentication where server-side sessions are challenging.',
        },
      ],
    },
    learn_more: 'Learn more',
  },
  verify_jwt: {
    title: 'How to verify JWT?',
    subtitle:
      'The integrity of a JWT must be verified to ensure its header and payload have not been tampered with. Below are step-by-step examples for verifying JWTs in popular programming environments:',
    ruby_label: 'Verify JWT in Ruby',
    dotnet_label: 'Verify JWT in .NET',
    java_label: 'Verify JWT in Java',
    php_label: 'Verify JWT in PHP',
    python_label: 'Verify JWT in Python',
    go_label: 'Verify JWT in Go',
    nodejs_label: 'Verify JWT in Node.js',
    rust_label: 'Verify JWT in Rust',
  },
  related_topics: {
    title: 'Related JWT topics',
    subtitle:
      'All information you concern about JWT and step-by-step guide to verify JWT in diverse framework.',
    blogs: {
      jwt_algorithm: {
        title: 'JWT algorithms: EC vs. RSA',
        description:
          'Dive into the signature algorithms of JWT, such as EC and RSA, and learn how to choose the most secure and efficient method for your application.',
      },
      id_token_and_access_token: {
        title: 'ID token & Access token & Refresh token',
        description:
          'Do you know the specific purposes of ID Tokens, Access Tokens, and Refresh tokens? Understand their roles in authentication and authorization processes from a JWT perspective.',
      },
      custom_jwt_token_claims: {
        title: 'Custom JWT token claims',
        description:
          'How does JWT achieve fine-grained access control? Compare RBAC (Role-Based Access Control) and ABAC (Attribute-Based Access Control) to find the best solution for your application.',
      },
      opaque_token_vs_jwt: {
        title: 'Opaque token vs. JWT token',
        description:
          'Explore the core differences between JWT and Opaque Tokens, and discover why JWT has become the modern choice for authentication with its high performance and scalability.',
      },
      api_authorization: {
        title: 'API authorization: API keys vs. Basic authentication vs. OAuth JWT tokens',
        description:
          'Explore three common API authorization mechanisms with their pros and cons. Dive into a best practice about for safeguarding your APIs using OAuth JWT tokens.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Session authentication',
        description:
          'Session-based auth relies on server-side storage to maintain user sessions, whereas token-based auth enables stateless and scalable communication between clients and servers. Discover how JWT is revolutionizing API security and why it’s becoming the preferred choice for modern authentication.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'The fancy terms like OAuth, OpenID Connect (OIDC), SAML, SSO, and JWT are frequently used in the domain of identity and access management (IAM), but what do they mean? How do they work together?',
      },
    },
  },
  unblock_more_subtitle:
    'Simplify your workflow and ensure secure user management with Logto Cloud. Built on OpenID Connect (OIDC), it leverages JWT to deliver a reliable authentication and authorization system designed to scale with your needs.',
};

export default Object.freeze(jwt_decoder);
