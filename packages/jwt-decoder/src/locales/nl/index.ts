const jwt_decoder = {
  title: 'JWT decoder & encoder | Veilig, eenvoudig en gebruiksvriendelijk',
  description:
    "Snel JWT's online decoderen en coderen, en hun handtekeningen verifiëren. Ontdek JWT-voorbeelden met verschillende algoritmen, samen met stapsgewijze JWT-implementatiehandleidingen.",
  encoder: 'Encoder',
  decoder: 'Decoder',
  subtitle:
    'Jouw gegevens zijn 100% privé -- JWT wordt volledig gedecodeerd en gecodeerd direct op je apparaat.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Gecodeerde JWT',
  decoded_header_label: 'Gedecodeerde header',
  header_label: 'Header',
  decoded_payload_label: 'Gedecodeerde payload',
  payload_label: 'Payload',
  signature_verified: 'Handtekening geverifieerd!',
  invalid_signature: 'Ongeldige handtekening!',
  jwt_editor_placeholder: 'Plak je JWT hier',
  hmac_secret_placeholder: 'Voer de HMAC-geheim in',
  public_key_placeholder: 'Voer hier de openbare sleutel in',
  private_key_placeholder: 'Voer hier de privésleutel in',
  jwks_endpoint_uri_placeholder: 'Voer de JWKs-endpoint-URL in',
  hmac_secret_label: 'Ondertekeningssleutel',
  jwks_endpoint_uri_label: 'JWKs endpoint URI',
  public_key_label: 'Openbare sleutel',
  private_key_label: 'Privésleutel',
  base64_encoded_label: 'Base64 gecodeerd',
  jwks_endpoint_uri_link: 'JWKs endpoint URI',
  public_key_link: 'Verifiëren via openbare sleutel',
  jwt_examples: 'JWT voorbeelden',
  share_jwt: 'Deel JWT',
  copy_to_clipboard: 'URL gekopieerd naar klembord',
  instruction: {
    title: 'Leer meer over JWT',
    subtitle:
      'Alle informatie die je nodig hebt over JWT en een stapsgewijze handleiding om JWT te verifiëren in diverse frameworks.',
    what_is_jwt: {
      title: 'Wat is JWT?',
      description:
        'JWT (JSON Web Token) is een zelfgedragen, stateloze token die informatie draagt in een gestructureerd en leesbaar formaat. Of je nu een API beveiligt of token-gebaseerde authenticatie voor je applicatie aanneemt, JWTs zijn een krachtig hulpmiddel, omdat ze:',
      bullets: [
        {
          label: 'Stateloos',
          description:
            'JWTs zijn zelfgedragen en vereisen geen serverside status om te valideren. JWT kan gegevensintegriteit garanderen via handtekeningen.',
        },
        {
          label: 'Cross-service compatibiliteit',
          description:
            'JWTs kunnen gemakkelijk gedeeld en geverifieerd worden tussen verschillende diensten.',
        },
        {
          label: 'Uitschuifbaar',
          description:
            'De payload van een JWT kan aangepaste claims bevatten, waardoor flexibele autorisaties en het delen van informatie mogelijk zijn.',
        },
      ],
    },
    jwt_structure: {
      title: 'De structuur van JWT',
      description:
        'Een typische JWT is opgesplitst in drie delen, elk gecodeerd in Base64URL en gescheiden door punten (.):',
      bullets: [
        {
          label: 'Header',
          description:
            'Bevat metadata, zoals het ondertekeningsalgoritme (bijv. HS256 of RS256) en het type token (JWT).',
        },
        {
          label: 'Payload',
          description:
            'Bevat de daadwerkelijke gegevens, zoals gebruikers-ID, gebruikersprofiel, vervaltijd of scopes.',
        },
        {
          label: 'Handtekening',
          description:
            'Een gehashte combinatie van de header, payload en beveiligd met een geheime sleutel. Het doel is om de integriteit van het token te waarborgen en te bevestigen dat het niet is gewijzigd.',
        },
      ],
      summary:
        'Deze structuur stelt JWTs in staat om een compacte, veilige manier van het overbrengen van informatie tussen partijen te bieden.',
    },
    token_claims: {
      title: 'Veelvoorkomende token-aanvragen in JWT',
      description:
        'De claims maken deel uit van de payload en bevatten de belangrijkste informatie. Hier zijn gestandaardiseerde geregistreerde claims voor je referentie:',
      table: {
        headers: ['Claims', 'Volledige naam', 'Beschrijving'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Uitgever',
            description: 'De entiteit die de JWT heeft uitgegeven, zoals de autorisatieserver.',
          },
          {
            claim: 'sub',
            full_name: 'Onderwerp',
            description:
              'Identificeert het onderwerp van de JWT, meestal de geauthenticeerde gebruiker.',
          },
          {
            claim: 'aud',
            full_name: 'Doelgroep',
            description:
              'Specificeert welke ontvangers het token kunnen accepteren en verwerken. Dit kan een array van waarden zijn voor meerdere doelgroepen of een enkele waarde voor een enkele ontvanger.',
          },
          {
            claim: 'exp',
            full_name: 'Vervaltijd',
            description:
              'Stelt een verstrijktijd in op het token waarna het ongeldig wordt. Dit helpt om het herhalingsaanvallen te voorkomen door te beperken hoe lang een token geldig blijft.',
          },
          {
            claim: 'nbf',
            full_name: 'Niet eerder',
            description:
              'Maakt een token alleen geldig na dit tijdstip. Nuttig in situaties waarin klokken niet toegankelijk zijn.',
          },
          {
            claim: 'iat',
            full_name: 'Uitgegeven op',
            description:
              'Wanneer het token werd aangemaakt. Dit kan worden gebruikt om de leeftijd van het token te bepalen.',
          },
          {
            claim: 'jti',
            full_name: 'JWT-ID',
            description:
              'Een unieke identificator voor het token, nuttig om te voorkomen dat hetzelfde token meerdere keren wordt gebruikt (bijv. bij herhalingsaanvallen).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Afhankelijk van de specificatie en de configuratie van de autorisatieserver kunnen aanvullende claims worden opgenomen in de payload om specifieke use-cases te ondersteunen. Je kunt ook aangepaste claims toevoegen aan JWT om aan unieke zakelijke eisen te voldoen.',
        id_token: {
          title: 'ID Token',
          description:
            'Gebruikt in OpenID Connect, het bevat claims zoals profielinformatie (bijv. naam, e-mail, enz.) over de geauthenticeerde gebruiker.',
        },
        access_token: {
          title: 'Toegangstoken',
          description:
            'Gebruikt in OAuth 2.0, het verleent toegang tot specifieke bronnen of API’s namens de gebruiker of applicatie.',
        },
      },
      notification: {
        label: 'Voorzichtigheid',
        description:
          'Bewaar geen persoonlijke of gevoelige informatie in JWT-claims. Hoewel JWT-claims worden gecodeerd (met Base64URL), zijn ze niet versleuteld. Dit betekent dat iedereen met het token het kan decoderen en de claims kan bekijken, zelfs als ze het niet kunnen wijzigen zonder de handtekening ongeldig te maken. Gebruik versleuteling of andere veilige methoden om gevoelige gegevens indien nodig te beschermen.',
      },
    },
    when_to_use: {
      title: 'Wanneer gebruik je JWT?',
      description: 'JWTs kunnen bijzonder voordelig zijn in de volgende scenario’s:',
      bullets: [
        {
          label: 'Microservices architectuur',
          description: 'Voor stateloze authenticatie over meerdere services heen.',
        },
        {
          label: 'Single sign-on (SSO) systemen',
          description: 'Toegang tot meerdere applicaties met één authenticatie mogelijk maken.',
        },
        {
          label: 'Mobiele applicaties',
          description: 'Efficiënt bijhouden van gebruikerssessies over API-oproepen.',
        },
        {
          label: 'Hoog-verkeer applicaties',
          description: 'Verminderen van de databasebelasting in omgevingen met hoog volume.',
        },
        {
          label: 'Cross-origin resource sharing (CORS)',
          description: 'Eenvoudiger authentiseren over meerdere domeinen.',
        },
        {
          label: 'Serverloze architecturen',
          description: 'Zorg voor stateloze authenticatie waar serversessies moeilijk zijn.',
        },
      ],
    },
    learn_more: 'Leer meer',
  },
  verify_jwt: {
    title: 'Hoe verifieer je JWT?',
    subtitle:
      'De integriteit van een JWT moet worden geverifieerd om ervoor te zorgen dat de header en payload niet zijn gemanipuleerd. Hieronder staan stapsgewijze voorbeelden voor het verifiëren van JWTs in populaire programmeeromgevingen:',
    ruby_label: 'Verifieer JWT in Ruby',
    dotnet_label: 'Verifieer JWT in .NET',
    java_label: 'Verifieer JWT in Java',
    php_label: 'Verifieer JWT in PHP',
    python_label: 'Verifieer JWT in Python',
    go_label: 'Verifieer JWT in Go',
    nodejs_label: 'Verifieer JWT in Node.js',
    rust_label: 'Verifieer JWT in Rust',
  },
  related_topics: {
    title: 'Gerelateerde JWT-onderwerpen',
    subtitle:
      'Alle informatie die je nodig hebt over JWT en een stapsgewijze handleiding om JWT te verifiëren in diverse frameworks.',
    blogs: {
      jwt_algorithm: {
        title: 'JWT-algoritmen: EC vs. RSA',
        description:
          'Verdiep je in de ondertekeningsalgoritmen van JWT, zoals EC en RSA, en leer hoe je de veiligste en meest efficiënte methode voor je applicatie kiest.',
      },
      id_token_and_access_token: {
        title: 'ID token & Toegangstoken & Vernieuwings token',
        description:
          'Weet je wat de specifieke doeleinden zijn van ID Tokens, Toegangstokens en Vernieuwings tokens? Begrijp hun rol in authenticatie- en autorisatieprocessen vanuit een JWT-perspectief.',
      },
      custom_jwt_token_claims: {
        title: 'Aangepaste JWT-tokenclaims',
        description:
          'Hoe bereikt JWT fijnmazige toegangscontrole? Vergelijk RBAC (Role-Based Access Control) en ABAC (Attribute-Based Access Control) om de beste oplossing voor je applicatie te vinden.',
      },
      opaque_token_vs_jwt: {
        title: 'Opaque token vs. JWT-token',
        description:
          'Ontdek de belangrijkste verschillen tussen JWT en Opaque Tokens, en ontdek waarom JWT de moderne keuze is geworden voor authenticatie met zijn hoge prestaties en schaalbaarheid.',
      },
      api_authorization: {
        title: 'API-autorisatie: API-sleutels versus Basisautorisatie versus OAuth JWT-tokens',
        description:
          "Ontdek drie veelvoorkomende API-autorisatiemechanismen met hun voor- en nadelen. Verdiep je in een best practice voor het beveiligen van je API's met OAuth JWT-tokens.",
      },
      jwt_vs_session_authentication: {
        title: 'JWT versus Sessie authenticatie',
        description:
          'Sessie-gebaseerde authenticatie vertrouwt op serverside opslag om gebruikerssessies te onderhouden, terwijl token-gebaseerde authenticatie stateloze en schaalbare communicatie tussen clients en servers mogelijk maakt. Ontdek hoe JWT API-beveiliging revolutioneert en waarom het de voorkeur heeft als moderne authenticatiekeuze.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'De termen zoals OAuth, OpenID Connect (OIDC), SAML, SSO, en JWT worden vaak gebruikt in het domein van identiteit en toegangsbeheer (IAM), maar wat betekenen ze? Hoe werken ze samen?',
      },
    },
  },
  unblock_more_subtitle:
    'Vereenvoudig je workflow en zorg voor veilig gebruikersbeheer met Logto Cloud. Gebouwd op OpenID Connect (OIDC), het maakt gebruik van JWT om een betrouwbaar authenticatie- en autorisatiesysteem te bieden dat is ontworpen om mee te schalen met je behoeften.',
};

export default Object.freeze(jwt_decoder);
