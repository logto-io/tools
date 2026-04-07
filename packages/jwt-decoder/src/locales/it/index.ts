const jwt_decoder = {
  title: 'Decodificatore e codificatore JWT (JWT decoder & encoder) | Sicuro, semplice e intuitivo',
  description:
    "Decodifica e codifica rapidamente i JWT online e verifica le loro firme. Esplora esempi di JWT utilizzando diversi algoritmi, insieme a guide passo-passo per l'implementazione di JWT.",
  encoder: 'Codificatore',
  decoder: 'Decodificatore',
  subtitle:
    'I tuoi dati sono al 100% privati -- JWT è completamente decodificato e codificato direttamente sul tuo dispositivo.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'JWT codificato',
  decoded_header_label: 'Intestazione decodificata',
  header_label: 'Intestazione',
  decoded_payload_label: 'Payload decodificato',
  payload_label: 'Payload',
  signature_verified: 'Firma verificata!',
  invalid_signature: 'Firma non valida!',
  jwt_editor_placeholder: 'Incolla qui il tuo JWT',
  hmac_secret_placeholder: 'Inserisci il segreto HMAC',
  public_key_placeholder: 'Inserisci qui la chiave pubblica',
  private_key_placeholder: 'Inserisci qui la chiave privata',
  jwks_endpoint_uri_placeholder: "Inserisci l'URL dell'endpoint JWKs",
  hmac_secret_label: 'Chiave di firma',
  jwks_endpoint_uri_label: "URI dell'endpoint JWKs",
  public_key_label: 'Chiave pubblica',
  private_key_label: 'Chiave privata',
  base64_encoded_label: 'Codificato in Base64',
  jwks_endpoint_uri_link: "URI dell'endpoint JWKs",
  public_key_link: 'Verifica tramite chiave pubblica',
  jwt_examples: 'Esempi di JWT',
  share_jwt: 'Condividi JWT',
  copy_to_clipboard: 'URL copiato negli appunti',
  instruction: {
    title: 'Scopri di più sui JWT',
    subtitle:
      'Tutte le informazioni che ti interessano sui JWT e una guida passo-passo per verificare i JWT in diversi framework.',
    what_is_jwt: {
      title: "Cos'è un JWT?",
      description:
        "JWT (JSON Web Token) è un token autonomo e senza stato che contiene informazioni in un formato strutturato e leggibile. Che tu stia proteggendo un'API o adottando l'autenticazione basata su token per la tua applicazione, i JWT sono uno strumento potente perché:",
      bullets: [
        {
          label: 'Senza stato',
          description:
            "I JWT sono autonomi e non richiedono uno stato lato server per essere validati. Il JWT può garantire l'integrità dei dati tramite firme.",
        },
        {
          label: 'Compatibilità tra servizi',
          description:
            'I JWT possono essere facilmente condivisi e verificati tra diversi servizi.',
        },
        {
          label: 'Estendibile',
          description:
            'Il payload di un JWT può contenere rivendicazioni personalizzate, consentendo autorizzazioni flessibili e condivisione di informazioni.',
        },
      ],
    },
    jwt_structure: {
      title: 'La struttura del JWT',
      description:
        'Un JWT tipico è suddiviso in tre parti, ciascuna codificata in Base64URL e separata da punti (.):',
      bullets: [
        {
          label: 'Intestazione',
          description:
            "Contiene metadati, come l'algoritmo di firma (es. HS256 o RS256) e il tipo di token (JWT).",
        },
        {
          label: 'Payload',
          description:
            'Contiene i dati effettivi, come ID utente, profilo utente, tempo di scadenza o ambiti.',
        },
        {
          label: 'Firma',
          description:
            "Una combinazione hash dell'intestazione, payload e sicura utilizzando una chiave segreta. Ha lo scopo di garantire l'integrità del token e confermare che non è stato alterato.",
        },
      ],
      summary:
        'Questa struttura consente ai JWT di fornire un modo compatto e sicuro di trasmettere informazioni tra le parti.',
    },
    token_claims: {
      title: 'Rivendicazioni comuni del token in JWT',
      description:
        'Le rivendicazioni fanno parte del payload e contengono le informazioni chiave. Ecco alcune rivendicazioni registrate standardizzate per il tuo riferimento:',
      table: {
        headers: ['Rivendicazioni', 'Nome completo', 'Descrizione'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Emittente',
            description: "L'entità che ha emesso il JWT, come il server di autorizzazione.",
          },
          {
            claim: 'sub',
            full_name: 'Soggetto',
            description:
              "Identifica il soggetto del JWT, solitamente rappresentando l'utente autenticato.",
          },
          {
            claim: 'aud',
            full_name: 'Destinatari',
            description:
              'Specifica quali destinatari possono accettare e processare il token. Questo può essere un array di valori per più destinatari o un singolo valore per un solo destinatario.',
          },
          {
            claim: 'exp',
            full_name: 'Tempo di scadenza',
            description:
              'Imposta un tempo di scadenza sul token dopo il quale diventa non valido. Questo aiuta a prevenire attacchi di replay limitando la durata di validità di un token.',
          },
          {
            claim: 'nbf',
            full_name: 'Non prima',
            description:
              'Rende un token valido solo dopo questo timestamp. Utile in situazioni in cui gli orologi non sono accessibili.',
          },
          {
            claim: 'iat',
            full_name: 'Emesso a',
            description:
              "Quando è stato creato il token. Questo può essere utilizzato per determinare l'età del token.",
          },
          {
            claim: 'jti',
            full_name: 'ID del JWT',
            description:
              'Un identificatore univoco per il token, utile per prevenire che lo stesso token venga utilizzato più volte (ad esempio, in attacchi di replay).',
          },
        ],
      },
      other_token_claims: {
        description:
          "A seconda della specifica e della configurazione del server di autorizzazione, possono essere incluse ulteriori rivendicazioni nel payload per supportare casi d'uso specifici. Puoi anche aggiungere rivendicazioni personalizzate al JWT per soddisfare esigenze aziendali uniche.",
        id_token: {
          title: 'Token ID',
          description:
            "Utilizzato in OpenID Connect, include rivendicazioni come informazioni sul profilo (es., nome, email, ecc.) relative all'utente autenticato.",
        },
        access_token: {
          title: 'Token di accesso',
          description:
            "Utilizzato in OAuth 2.0, concede l'accesso a risorse o API specifiche per conto dell'utente o dell'applicazione.",
        },
      },
      notification: {
        label: 'Attenzione',
        description:
          'Non memorizzare informazioni private o sensibili nelle rivendicazioni del JWT. Sebbene le rivendicazioni del JWT siano codificate (usando Base64URL), esse non sono criptate. Questo significa che chiunque con il token può decodificarlo e visualizzare le rivendicazioni, anche se non può alterarlo senza invalidare la firma. Usa metodi sicuri o la crittografia per proteggere i dati sensibili quando necessario.',
      },
    },
    when_to_use: {
      title: 'Quando utilizzare il JWT?',
      description: 'I JWT possono essere particolarmente vantaggiosi nei seguenti scenari:',
      bullets: [
        {
          label: 'Architettura a microservizi',
          description: 'Per autentificazione senza stato tra più servizi.',
        },
        {
          label: 'Sistemi di single sign-on (SSO)',
          description: "Consentendo l'accesso a più applicazioni con un'autenticazione unica.",
        },
        {
          label: 'Applicazioni mobili',
          description: 'Mantenendo efficacemente le sessioni utente tra le chiamate API.',
        },
        {
          label: 'Applicazioni ad alto traffico',
          description: 'Riducendo il carico sul database in ambienti ad alto volume.',
        },
        {
          label: 'Condivisione delle risorse tra origini diverse (CORS)',
          description: "Semplificando l'autenticazione tra domini multipli.",
        },
        {
          label: 'Architetture serverless',
          description:
            'Fornendo autenticazione senza stato dove le sessioni lato server sono difficili da gestire.',
        },
      ],
    },
    learn_more: 'Scopri di più',
  },
  verify_jwt: {
    title: 'Come verificare il JWT?',
    subtitle:
      "L'integrità di un JWT deve essere verificata per assicurarsi che la sua intestazione e payload non siano state manomesse. Di seguito sono riportati esempi passo passo per verificare i JWT nei principali ambienti di programmazione:",
    ruby_label: 'Verifica JWT in Ruby',
    dotnet_label: 'Verifica JWT in .NET',
    java_label: 'Verifica JWT in Java',
    php_label: 'Verifica JWT in PHP',
    python_label: 'Verifica JWT in Python',
    go_label: 'Verifica JWT in Go',
    nodejs_label: 'Verifica JWT in Node.js',
    rust_label: 'Verifica JWT in Rust',
  },
  related_topics: {
    title: 'Argomenti correlati ai JWT',
    subtitle:
      'Tutte le informazioni che ti interessano sui JWT e una guida passo-passo per verificare i JWT in diversi framework.',
    blogs: {
      jwt_algorithm: {
        title: 'Algoritmi JWT: EC vs. RSA',
        description:
          'Esplora gli algoritmi di firma dei JWT, come EC e RSA, e scopri come scegliere il metodo più sicuro ed efficiente per la tua applicazione.',
      },
      id_token_and_access_token: {
        title: 'Token ID & Token di accesso & Token di rinnovo',
        description:
          'Conosci gli scopi specifici dei Token ID, Token di Accesso e Token di Renew? Comprendi i loro ruoli nei processi di autenticazione e autorizzazione da una prospettiva JWT.',
      },
      custom_jwt_token_claims: {
        title: 'Rivendicazioni personalizzate del token JWT',
        description:
          'Come fa JWT a ottenere un controllo di accesso dettagliato? Confronta RBAC (Controllo Accessi Basato su Ruolo) e ABAC (Controllo Accessi Basato su Attributo) per trovare la soluzione migliore per la tua applicazione.',
      },
      opaque_token_vs_jwt: {
        title: 'Token opaco vs. Token JWT',
        description:
          "Esplora le principali differenze tra JWT e Token opachi, e scopri perché JWT è diventato la scelta moderna per l'autenticazione con alte prestazioni e scalabilità.",
      },
      api_authorization: {
        title: 'Autorizzazione API: chiavi API vs. Autenticazione di base vs. Token JWT OAuth',
        description:
          'Esplora tre comuni meccanismi di autorizzazione API con i loro pro e contro. Scendi in una best practice per proteggere le tue API utilizzando i token JWT OAuth.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Autenticazione di sessione',
        description:
          "L'autenticazione basata su sessione si basa su memorizzazione lato server per mantenere le sessioni utente, mentre l'autenticazione basata su token consente comunicazioni scalabili e senza stato tra client e server. Scopri come JWT sta rivoluzionando la sicurezza delle API e perché sta diventando la scelta preferita per l'autenticazione moderna.",
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'I termini alla moda come OAuth, OpenID Connect (OIDC), SAML, SSO e JWT sono frequentemente utilizzati nel dominio della gestione delle identità e degli accessi (IAM), ma cosa significano? Come funzionano insieme?',
      },
    },
  },
  unblock_more_subtitle:
    'Semplifica il tuo flusso di lavoro e garantisci una gestione sicura degli utenti con Logto Cloud. Basato su OpenID Connect (OIDC), sfrutta JWT per fornire un sistema di autenticazione e autorizzazione affidabile progettato per scalare con le tue esigenze.',
};

export default Object.freeze(jwt_decoder);
