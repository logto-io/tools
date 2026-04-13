import type en from '../en';

const jwt_decoder = {
  title: 'JWT-avkodare och -kodare (JWT decoder & encoder) | Säker, enkel och användarvänlig',
  description:
    'Avkoda och koda JWT snabbt online och verifiera deras signaturer. Utforska JWT-exempel med olika algoritmer, tillsammans med steg-för-steg-guider för JWT-implementering.',
  encoder: 'Encoder',
  decoder: 'Decoder',
  subtitle: 'Dina data är 100% privata -- JWT är helt avkodade och kodade direkt på din enhet.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Kodad JWT',
  decoded_header_label: 'Avkodad rubrik',
  header_label: 'Rubrik',
  decoded_payload_label: 'Avkodad payload',
  payload_label: 'Payload',
  signature_verified: 'Signatur verifierad!',
  invalid_signature: 'Ogiltig signatur!',
  jwt_editor_placeholder: 'Klistra in din JWT här',
  hmac_secret_placeholder: 'Ange HMAC-hemligheten',
  public_key_placeholder: 'Ange den offentliga nyckeln här',
  private_key_placeholder: 'Ange den privata nyckeln här',
  jwks_endpoint_uri_placeholder: 'Ange JWKs slutpunkts-URL',
  hmac_secret_label: 'Signeringsnyckel',
  jwks_endpoint_uri_label: 'JWKs slutpunkts-URI',
  public_key_label: 'Offentlig nyckel',
  private_key_label: 'Privat nyckel',
  base64_encoded_label: 'Base64 kodad',
  jwks_endpoint_uri_link: 'JWKs slutpunkts-URI',
  public_key_link: 'Verifiera via offentlig nyckel',
  jwt_examples: 'JWT-exempel',
  share_jwt: 'Dela JWT',
  copy_to_clipboard: 'URL kopierad till urklipp',
  instruction: {
    title: 'Lär dig om JWT',
    subtitle:
      'All information du behöver om JWT och steg-för-steg guide för att verifiera JWT i olika ramar.',
    what_is_jwt: {
      title: 'Vad är JWT?',
      description:
        'JWT (JSON Web Token) är en självständig, statslös token som bär information i ett strukturerat och läsbart format. Oavsett om du skyddar ett API eller adopterar tokenbaserad autentisering för din applikation, är JWTs ett kraftfullt verktyg, eftersom de:',
      bullets: [
        {
          label: 'Statslös',
          description:
            'JWTs är självständiga och kräver inte status på serversidan för att valideras. JWT kan säkerställa dataintegritet via signaturer.',
        },
        {
          label: 'Cross-tjänst-kompatibilitet',
          description: 'JWTs kan enkelt delas och verifieras över olika tjänster.',
        },
        {
          label: 'Extensible',
          description:
            'Payloaden av en JWT kan innehålla anpassade påståenden, vilket möjliggör flexibel auktorisering och informationsdelning.',
        },
      ],
    },
    jwt_structure: {
      title: 'Strukturen av JWT',
      description:
        'En typisk JWT är uppdelad i tre delar, var och en kodad i Base64URL och separerad av punkter (.):',
      bullets: [
        {
          label: 'Rubrik',
          description:
            'Innehåller metadata, såsom signeringsalgoritmen (t.ex. HS256 eller RS256) och tokenens typ (JWT).',
        },
        {
          label: 'Payload',
          description:
            'Innehåller de faktiska uppgifterna, som användar-ID, användarprofil, utgångstid eller omfattningar.',
        },
        {
          label: 'Signatur',
          description:
            'En hashad kombination av Rubrik, Payload, och säker med en hemlig nyckel. Syftet är att säkerställa tokenens integritet och bekräfta att den inte har ändrats.',
        },
      ],
      summary:
        'Denna struktur möjliggör för JWTs att tillhandahålla ett kompakt, säkert sätt att överföra information mellan parter.',
    },
    token_claims: {
      title: 'Vanliga token-påståenden i JWT',
      description:
        'Påståendena är en del av payloaden och håller nyckelinformationen. Här är standardiserade registrerade påståenden för din referens:',
      table: {
        headers: ['Påståenden', 'Fullständigt namn', 'Beskrivning'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Utgivare',
            description: 'Den enhet som utfärdade JWT, såsom auktoriseringsservern.',
          },
          {
            claim: 'sub',
            full_name: 'Ämne',
            description:
              "Identifierar JWT's ämne, typiskt representerande den autentiserade användaren.",
          },
          {
            claim: 'aud',
            full_name: 'Publik',
            description:
              'Anger vilka mottagare som kan acceptera och bearbeta tokenen. Detta kan vara en array av värden för flera publik eller ett enda värde för en enda mottagare.',
          },
          {
            claim: 'exp',
            full_name: 'Utgångstid',
            description:
              'Ställer in en utgångstid för tokenen efter vilken den blir ogiltig. Detta hjälper till att förhindra upprepningsattacker genom att begränsa hur länge en token förblir giltig.',
          },
          {
            claim: 'nbf',
            full_name: 'Inte före',
            description:
              'Gör en token giltig först efter detta tidsstämpel. Användbart i situationer där klockor inte är tillgängliga.',
          },
          {
            claim: 'iat',
            full_name: 'Utfärdades vid',
            description:
              'När tokenen skapades. Detta kan användas för att avgöra åldern på tokenen.',
          },
          {
            claim: 'jti',
            full_name: 'JWT-ID',
            description:
              'En unik identifierare för tokenen, användbar för att förhindra att samma token används flera gånger (t.ex. i upprepningsattacker).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Beroende på specifikationen och konfigurationen av auktoriseringsservern kan ytterligare påståenden inkluderas i payloaden för att stödja specifika användningsfall. Du kan också lägga till anpassade påståenden till JWT för att möta unika affärskrav.',
        id_token: {
          title: 'ID-token',
          description:
            'Används i OpenID Connect, den innehåller påståenden som profilinformation (t.ex., namn, e-post, etc.) om den autentiserade användaren.',
        },
        access_token: {
          title: 'Åtkomsttoken',
          description:
            'Används i OAuth 2.0, det ger tillgång till specifika resurser eller API:er på uppdrag av användaren eller applikationen.',
        },
      },
      notification: {
        label: 'Försiktighet',
        description:
          'Lagra inte privata eller känsliga uppgifter i JWT-påståenden. Även om JWT-påståenden är kodade (med Base64URL), är de inte krypterade. Detta innebär att vem som helst med tokenen kan avkoda den och se påståendena, även om de inte kan ändra den utan att ogiltigförklara signaturen. Använd kryptering eller andra säkra metoder för att skydda känsliga data vid behov.',
      },
    },
    when_to_use: {
      title: 'När ska man använda JWT?',
      description: 'JWTs kan vara särskilt fördelaktiga i följande scenarier:',
      bullets: [
        {
          label: 'Mikrotjänstarkitektur',
          description: 'För statsfri autentisering över flera tjänster.',
        },
        {
          label: 'Single sign-on (SSO) -system',
          description: 'Möjliggör åtkomst till flera applikationer med en autentisering.',
        },
        {
          label: 'Mobilapplikationer',
          description: 'Effektivt upprätthålla användarsessioner över API-anrop.',
        },
        {
          label: 'Applikationer med hög trafik',
          description: 'Minska databasladdning i högvolymsmiljöer.',
        },
        {
          label: 'CORS (Cross-Origin Resource Sharing)',
          description: 'Förenkla autentisering över flera domäner.',
        },
        {
          label: 'Serverlösa arkitekturer',
          description:
            'Tillhandahålla statsfri autentisering där server-side sessioner är utmanande.',
        },
      ],
    },
    learn_more: 'Lär dig mer',
  },
  verify_jwt: {
    title: 'Hur verifieras JWT?',
    subtitle:
      'Integriteten av en JWT måste verifieras för att säkerställa att dess rubrik och payload inte har manipulerats. Nedan finns steg-för-steg-exempel för att verifiera JWTs i populära programmeringsmiljöer:',
    ruby_label: 'Verifiera JWT i Ruby',
    dotnet_label: 'Verifiera JWT i .NET',
    java_label: 'Verifiera JWT i Java',
    php_label: 'Verifiera JWT i PHP',
    python_label: 'Verifiera JWT i Python',
    go_label: 'Verifiera JWT i Go',
    nodejs_label: 'Verifiera JWT i Node.js',
    rust_label: 'Verifiera JWT i Rust',
  },
  related_topics: {
    title: 'Relaterade JWT-ämnen',
    subtitle:
      'All information du behöver om JWT och steg-för-steg guide för att verifiera JWT i olika ramar.',
    blogs: {
      jwt_algorithm: {
        title: 'JWT-algoritmer: EC vs. RSA',
        description:
          'Dyk in i signeringsalgoritmerna för JWT, såsom EC och RSA, och lär dig hur du väljer den säkraste och mest effektiva metoden för din applikation.',
      },
      id_token_and_access_token: {
        title: 'ID token & Åtkomsttoken & Refresh token',
        description:
          'Känner du till de specifika syftena med ID Tokens, Åtkomsttokens och Refresh tokens? Förstå deras roller i autentisering och auktoriseringsprocesser från ett JWT-perspektiv.',
      },
      custom_jwt_token_claims: {
        title: 'Anpassade JWT-tokenpåståenden',
        description:
          'Hur uppnår JWT finfördelad åtkomstkontroll? Jämför RBAC (Rollbaserad åtkomstkontroll) och ABAC (Attributbaserad åtkomstkontroll) för att hitta den bästa lösningen för din applikation.',
      },
      opaque_token_vs_jwt: {
        title: 'Opaqa token vs. JWT-token',
        description:
          'Utforska de grundläggande skillnaderna mellan JWT och Opaque Tokens, och upptäck varför JWT har blivit det moderna valet för autentisering med sin höga prestanda och skalbarhet.',
      },
      api_authorization: {
        title:
          'API-auktorisering: API-nycklar vs. Grundläggande autentisering vs. OAuth JWT-tokens',
        description:
          'Utforska tre vanliga API-auktoriseringsmekanismer med deras för- och nackdelar. Dyk in i en bästa praxis om att skydda dina API:er med hjälp av OAuth JWT-tokens.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Sessionautentisering',
        description:
          'Sessionsbaserad autentisering förlitar sig på serverlagring för att upprätthålla användarsessioner, medan tokenbaserad autentisering möjliggör statsfri och skalbar kommunikation mellan klienter och servrar. Upptäck hur JWT revolutionerar API-säkerhet och varför det blir det föredragna valet för modern autentisering.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'De fanciga termerna som OAuth, OpenID Connect (OIDC), SAML, SSO och JWT används ofta inom området identitetshantering och åtkomstkontroll (IAM), men vad betyder de? Hur fungerar de tillsammans?',
      },
    },
  },
  unblock_more_subtitle:
    'Förenkla ditt arbetsflöde och säkerställ säker användarhantering med Logto Cloud. Byggt på OpenID Connect (OIDC), den utnyttjar JWT för att leverera ett pålitligt autentiserings- och auktoriseringssystem designat för att skala med dina behov.',
};

export default Object.freeze(jwt_decoder) satisfies typeof en;
