import type en from '../en';

const jwt_decoder = {
  title: 'Décodeur et encodeur JWT (JWT decoder & encoder) | Sécurisé, simple et convivial',
  description:
    'Décodez et encodez rapidement les JWT en ligne, et vérifiez leurs signatures. Explorez les exemples de JWT utilisant différents algorithmes, avec des guides de mise en œuvre étape par étape.',
  encoder: 'Encodeur',
  decoder: 'Décodeur',
  subtitle:
    'Vos données sont 100 % privées -- JWT est entièrement décodé et encodé directement sur votre appareil.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'JWT encodé',
  decoded_header_label: 'En-tête décodé',
  header_label: 'En-tête',
  decoded_payload_label: 'Charge utile décodée',
  payload_label: 'Charge utile',
  signature_verified: 'Signature vérifiée !',
  invalid_signature: 'Signature invalide !',
  jwt_editor_placeholder: 'Collez votre JWT ici',
  hmac_secret_placeholder: 'Entrez le secret HMAC',
  public_key_placeholder: 'Entrez la clé publique ici',
  private_key_placeholder: 'Entrez la clé privée ici',
  jwks_endpoint_uri_placeholder: "Entrez l'URL de l'endpoint JWKs",
  hmac_secret_label: 'Clé de signature',
  jwks_endpoint_uri_label: "URI de l'endpoint JWKs",
  public_key_label: 'Clé publique',
  private_key_label: 'Clé privée',
  base64_encoded_label: 'Encodé en Base64',
  jwks_endpoint_uri_link: "URI de l'endpoint JWKs",
  public_key_link: 'Vérifier via clé publique',
  jwt_examples: 'Exemples de JWT',
  share_jwt: 'Partager JWT',
  copy_to_clipboard: 'URL copié dans le presse-papiers',
  instruction: {
    title: 'Apprenez sur JWT',
    subtitle:
      'Toutes les informations qui vous concernent sur JWT et guide étape par étape pour vérifier JWT dans divers cadres.',
    what_is_jwt: {
      title: 'Qu’est-ce que JWT ?',
      description:
        'JWT (JSON Web Token) est un jeton autonome et sans état qui contient des informations dans un format structuré et lisible. Que vous protégez une API ou que vous adoptiez l’authentification basée sur les jetons pour votre application, les JWT sont un outil puissant, car ils :',
      bullets: [
        {
          label: 'Sans état',
          description:
            'Les JWT sont autonomes et ne nécessitent pas d’état côté serveur pour valider. JWT peut assurer l’intégrité des données via des signatures.',
        },
        {
          label: 'Compatibilité inter-services',
          description:
            'Les JWT peuvent être facilement partagés et vérifiés entre différents services.',
        },
        {
          label: 'Extensible',
          description:
            'La charge utile d’un JWT peut contenir des déclarations personnalisées, permettant une autorisation flexible et un partage d’informations.',
        },
      ],
    },
    jwt_structure: {
      title: 'La structure de JWT',
      description:
        'Un JWT typique est divisé en trois parties, chacune encodée en Base64URL et séparée par des points (.) :',
      bullets: [
        {
          label: 'En-tête',
          description:
            'Contient des métadonnées, telles que l’algorithme de signature (par exemple, HS256 ou RS256) et le type du jeton (JWT).',
        },
        {
          label: 'Charge utile',
          description:
            'Contient les données réelles, comme l’ID utilisateur, le profil utilisateur, le temps d’expiration ou les portées.',
        },
        {
          label: 'Signature',
          description:
            "Une combinaison hachée de l'en-tête, de la charge utile et sécurisée à l'aide d'une clé secrète. Son but est d'assurer l'intégrité du jeton et de confirmer qu'il n'a pas été modifié.",
        },
      ],
      summary:
        'Cette structure permet aux JWT de fournir un moyen compact et sécurisé de transmettre des informations entre les parties.',
    },
    token_claims: {
      title: 'Déclarations de jetons courantes dans JWT',
      description:
        'Les déclarations font partie de la charge utile et contiennent les informations clés. Voici les déclarations enregistrées standardisées pour votre référence :',
      table: {
        headers: ['Déclarations', 'Nom complet', 'Description'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Émetteur',
            description: 'L’entité qui a émis le JWT, comme le serveur d’autorisation.',
          },
          {
            claim: 'sub',
            full_name: 'Sujet',
            description:
              "Identifie le sujet du JWT, représentant généralement l'utilisateur authentifié.",
          },
          {
            claim: 'aud',
            full_name: 'Audience',
            description:
              'Spécifie quels destinataires peuvent accepter et traiter le jeton. Cela peut être un tableau de valeurs pour plusieurs audiences ou une seule valeur pour un seul destinataire.',
          },
          {
            claim: 'exp',
            full_name: 'Temps d’Expiration',
            description:
              "Définit un temps d'expiration sur le jeton après lequel il devient invalide. Cela aide à prévenir les attaques de relecture en limitant la durée de validité d'un jeton.",
          },
          {
            claim: 'nbf',
            full_name: 'Non Avant',
            description:
              'Rend un jeton valide seulement après cet horodatage. Utile dans les situations où les horloges ne sont pas accessibles.',
          },
          {
            claim: 'iat',
            full_name: 'Émis À',
            description:
              'Date de création du jeton. Cela peut être utilisé pour déterminer l’âge du jeton.',
          },
          {
            claim: 'jti',
            full_name: 'ID JWT',
            description:
              'Un identifiant unique pour le jeton, utile pour empêcher l’utilisation multiple du même jeton (par exemple, dans les attaques de relecture).',
          },
        ],
      },
      other_token_claims: {
        description:
          "Selon la spécification et la configuration du serveur d'autorisation, des déclarations supplémentaires peuvent être incluses dans la charge utile pour prendre en charge des cas d'utilisation spécifiques. Vous pouvez également ajouter des déclarations personnalisées aux JWT pour répondre à des exigences commerciales uniques.",
        id_token: {
          title: 'Jeton ID',
          description:
            "Utilisé dans OpenID Connect, il inclut des déclarations telles que des informations de profil (par exemple, nom, email, etc.) sur l'utilisateur authentifié.",
        },
        access_token: {
          title: 'Jeton d’accès',
          description:
            'Utilisé dans OAuth 2.0, il accorde l’accès à des ressources ou API spécifiques au nom de l’utilisateur ou de l’application.',
        },
      },
      notification: {
        label: 'Précaution',
        description:
          "Ne stockez pas d'informations privées ou sensibles dans les déclarations des JWT. Bien que les déclarations des JWT soient encodées (en utilisant Base64URL), elles ne sont pas chiffrées. Cela signifie que toute personne possédant le jeton peut le décoder et voir les déclarations, même si elle ne peut pas le modifier sans invalider la signature. Utilisez le chiffrement ou d'autres méthodes sécurisées pour protéger les données sensibles lorsque cela est nécessaire.",
      },
    },
    when_to_use: {
      title: 'Quand utiliser JWT ?',
      description: 'Les JWT peuvent être particulièrement bénéfiques dans les scénarios suivants :',
      bullets: [
        {
          label: 'Architecture de microservices',
          description: 'Pour une authentification sans état entre plusieurs services.',
        },
        {
          label: 'Systèmes de connexion unique (SSO)',
          description:
            'Permettre l’accès à plusieurs applications avec une seule authentification.',
        },
        {
          label: 'Applications mobiles',
          description: 'Maintenir efficacement les sessions utilisateur à travers des appels API.',
        },
        {
          label: 'Applications à fort trafic',
          description:
            ' Réduire la charge de la base de données dans des environnements à grand volume.',
        },
        {
          label: 'Partage de ressources cross-origin (CORS)',
          description: 'Simplifier l’authentification entre plusieurs domaines.',
        },
        {
          label: 'Architectures serverless',
          description:
            'Fournir une authentification sans état où les sessions côté serveur sont difficiles.',
        },
      ],
    },
    learn_more: 'En savoir plus',
  },
  verify_jwt: {
    title: 'Comment vérifier JWT ?',
    subtitle:
      'L’intégrité d’un JWT doit être vérifiée pour s’assurer que son en-tête et sa charge utile n’ont pas été altérés. Voici des exemples étape par étape pour vérifier les JWTs dans des environnements de programmation populaires :',
    ruby_label: 'Vérifiez JWT en Ruby',
    dotnet_label: 'Vérifiez JWT en .NET',
    java_label: 'Vérifiez JWT en Java',
    php_label: 'Vérifiez JWT en PHP',
    python_label: 'Vérifiez JWT en Python',
    go_label: 'Vérifiez JWT en Go',
    nodejs_label: 'Vérifiez JWT en Node.js',
    rust_label: 'Vérifiez JWT en Rust',
  },
  related_topics: {
    title: 'Sujets JWT connexes',
    subtitle:
      'Toutes les informations qui vous concernent sur JWT et guide étape par étape pour vérifier JWT dans divers cadres.',
    blogs: {
      jwt_algorithm: {
        title: 'Algorithmes JWT : EC vs. RSA',
        description:
          'Plongez dans les algorithmes de signature de JWT, tels que EC et RSA, et apprenez à choisir la méthode la plus sécurisée et efficace pour votre application.',
      },
      id_token_and_access_token: {
        title: 'Jeton ID & Jeton d’accès & Jeton de rafraîchissement',
        description:
          'Connaissez-vous les objectifs spécifiques des jetons ID, des jetons d’accès et des jetons de rafraîchissement ? Comprenez leurs rôles dans les processus d’authentification et d’autorisation d’un point de vue JWT.',
      },
      custom_jwt_token_claims: {
        title: 'Déclarations personnalisées de jetons JWT',
        description:
          "Comment JWT réalise-t-il un contrôle d'accès granulaire ? Comparez RBAC (Contrôle d'Accès Basé sur les Rôles) et ABAC (Contrôle d'Accès Basé sur les Attributs) pour trouver la meilleure solution pour votre application.",
      },
      opaque_token_vs_jwt: {
        title: 'Jeton opaque vs. Jeton JWT',
        description:
          "Explorez les principales différences entre les tokens JWT et les tokens opaques, et découvrez pourquoi JWT est devenu le choix moderne pour l'authentification avec ses hautes performances et sa scalabilité.",
      },
      api_authorization: {
        title: "Autorisation d'API : clés API vs. Authentification de base vs. Jetons OAuth JWT",
        description:
          "Explorez trois mécanismes d'autorisation API courants avec leurs avantages et inconvénients. Plongez dans une meilleure pratique pour protéger vos API en utilisant des jetons OAuth JWT.",
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Authentification de session',
        description:
          "L'authentification basée sur les sessions repose sur un stockage côté serveur pour maintenir les sessions utilisateur, tandis que l'authentification basée sur les jetons permet une communication sans état et évolutive entre les clients et les serveurs. Découvrez comment JWT révolutionne la sécurité des API et pourquoi il devient le choix préféré pour l'authentification moderne.",
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Les termes sophistiqués comme OAuth, OpenID Connect (OIDC), SAML, SSO, et JWT sont fréquemment utilisés dans le domaine de la gestion de l’identité et des accès (IAM), mais que signifient-ils ? Comment fonctionnent-ils ensemble ?',
      },
    },
  },
  unblock_more_subtitle:
    'Simplifiez votre flux de travail et assurez une gestion sécurisée des utilisateurs avec Logto Cloud. Basé sur OpenID Connect (OIDC), il utilise JWT pour fournir un système d’authentification et d’autorisation fiable conçu pour évoluer avec vos besoins.',
};

export default Object.freeze(jwt_decoder) satisfies typeof en;
