const jwt_decoder = {
  title:
    'JWT-dekooderi ja -kooderi (JWT decoder & encoder) | Turvallinen, yksinkertainen ja käyttäjäystävällinen',
  description:
    'Dekoodaa ja koodaa JWT:t nopeasti verkossa ja varmista niiden allekirjoitukset. Tutustu JWT-esimerkkeihin eri algoritmeilla sekä vaiheittaisiin JWT:n toteutusoppaisiin.',
  encoder: 'Kooderi',
  decoder: 'Dekooderi',
  subtitle: 'Tietosi ovat 100% yksityisiä -- JWT dekoodataan ja koodataan täysin laitteellasi.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Koodattu JWT',
  decoded_header_label: 'Dekoodattu otsikko',
  header_label: 'Otsikko',
  decoded_payload_label: 'Dekoodattu sisältö',
  payload_label: 'Sisältö',
  signature_verified: 'Allekirjoitus varmennettu!',
  invalid_signature: 'Virheellinen allekirjoitus!',
  jwt_editor_placeholder: 'Liitä JWT tähän',
  hmac_secret_placeholder: 'Anna HMAC-salasana',
  public_key_placeholder: 'Syötä julkinen avain tähän',
  private_key_placeholder: 'Syötä yksityinen avain tähän',
  jwks_endpoint_uri_placeholder: 'Anna JWKs-endpoint URL',
  hmac_secret_label: 'Allekirjoitusavain',
  jwks_endpoint_uri_label: 'JWKs-endpoint URI',
  public_key_label: 'Julkinen avain',
  private_key_label: 'Yksityinen avain',
  base64_encoded_label: 'Base64 koodattu',
  jwks_endpoint_uri_link: 'JWKs-endpoint URI',
  public_key_link: 'Varmista julkisen avaimen avulla',
  jwt_examples: 'JWT esimerkit',
  share_jwt: 'Jaa JWT',
  copy_to_clipboard: 'URL kopioitu leikepöydälle',
  instruction: {
    title: 'Opi JWT:stä',
    subtitle:
      'Kaikki JWT:hen liittyvät tiedot ja vaiheittainen opas JWT:n vahvistamiseen eri ympäristöissä.',
    what_is_jwt: {
      title: 'Mikä on JWT?',
      description:
        'JWT (JSON Web Token) on itsensä sisältävä, tilaton tunniste, joka kantaa tietoa jäsennellyssä ja luettavassa muodossa. Olipa kyseessä API:n suojaaminen tai tunnistepohjainen todennus sovelluksellesi, JWT:t ovat tehokas työkalu, koska ne:',
      bullets: [
        {
          label: 'Tilaton',
          description:
            'JWT:t ovat itsenäisiä eikä niiden tarkistamiseksi tarvita palvelinpuolen tilaa. JWT voi varmistaa tiedon eheyden allekirjoitusten avulla.',
        },
        {
          label: 'Palveluiden välinen yhteensopivuus',
          description: 'JWT:t voidaan helposti jakaa ja varmennetaan eri palveluiden välillä.',
        },
        {
          label: 'Laajennettavissa',
          description:
            'JWT:n sisältö voi sisältää mukautettuja vaatimuksia, jolloin voidaan turvallisesti jakaa tietoa ja määrittää auktorisointia.',
        },
      ],
    },
    jwt_structure: {
      title: 'JWT:n rakenne',
      description:
        'Tyypillinen JWT on jaettu kolmeen osaan, jotka kaikki on koodattu Base64URL-muotoon ja erotettu pisteillä (.):',
      bullets: [
        {
          label: 'Otsikko',
          description:
            'Sisältää metatiedot, kuten allekirjoitusalgoritmi (esim., HS256 tai RS256) ja tunnisteen tyyppi (JWT).',
        },
        {
          label: 'Sisältö',
          description:
            'Sisältää varsinaisen datan, kuten käyttäjän tunnus, käyttäjäprofiili, vanhenemisajankohta tai alueet.',
        },
        {
          label: 'Allekirjoitus',
          description:
            'Allekirjoitus on yhdistelmä Otsikosta, Sisällöstä ja suojattu salaisella avaimella. Sen tarkoitus on varmistaa tunnisteen eheys ja vahvistaa, ettei sitä ole muutettu.',
        },
      ],
      summary:
        'Tämä rakenne mahdollistaa JWT:n tarjota tiiviin ja turvallisen tavan tiedon välittämiseen osapuolten välillä.',
    },
    token_claims: {
      title: 'Yleiset tunnisteväitteet JWT:ssä',
      description:
        'Väitteet ovat osa sisältöä ja pitävät keskeisen tiedon. Tässä on standardoidut rekisteröidyt väitteet viitteeksi:',
      table: {
        headers: ['Väitteet', 'Koko nimi', 'Kuvaus'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Myöntäjä',
            description: 'Entiteetti, joka myönsi JWT:n, kuten auktorisointipalvelin.',
          },
          {
            claim: 'sub',
            full_name: 'Aihe',
            description: 'Määrittää JWT:n aiheen, yleensä edustaa todennettua käyttäjää.',
          },
          {
            claim: 'aud',
            full_name: 'Vastaanottaja',
            description:
              'Määrittää, mitkä vastaanottajat voivat hyväksyä ja käsitellä tunnisteen. Tämä voi olla arvojen jono useille vastaanottajille tai yksittäinen arvo yhdelle vastaanottajalle.',
          },
          {
            claim: 'exp',
            full_name: 'Vanhentumisaika',
            description:
              'Asettaa tunnisteelle vanhentumisajan, jonka jälkeen se muuttuu epävalidiksi. Tämä auttaa ehkäisemään toistoiskuja rajoittamalla tunnisteen voimassaoloaikaa.',
          },
          {
            claim: 'nbf',
            full_name: 'Ei ennen',
            description:
              'Tämän aikaleiman jälkeen tunniste on voimassa. Hyödyllinen tilanteissa, joissa kello ei ole käytettävissä.',
          },
          {
            claim: 'iat',
            full_name: 'Luontiaika',
            description:
              'Milloin tunniste luotiin. Tätä voidaan käyttää tunnisteen iän määrittämiseen.',
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description:
              'Yksilöllinen tunniste markkerille, hyödyllinen estääkseen saman tunnisteen moninkertaisen käytön (esim., toistoiskuissa).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Riippuen määrityksestä ja auktorisointipalvelimen kokoonpanosta, lisävaatimuksia voidaan sisällyttää sisältöön tukemaan tiettyjä käyttötapoja. Voit myös lisätä mukautettuja vaatimuksia JWT:hen täyttämään ainutlaatuiset liiketoimintatarpeet.',
        id_token: {
          title: 'ID Tunniste',
          description:
            'Käytetään OpenID Connectissä, se sisältää väitteitä, kuten profiilitietoja (esim., nimi, sähköposti, jne.) todennetusta käyttäjästä.',
        },
        access_token: {
          title: 'Käyttötunniste',
          description:
            'Käytetään OAuth 2.0:ssa, se myöntää pääsyn tiettyihin resursseihin tai API:ihin käyttäjän tai sovelluksen puolesta.',
        },
      },
      notification: {
        label: 'Varoitus',
        description:
          'Älä tallenna yksityisiä tai arkaluonteisia tietoja JWT-väitteisiin. Vaikka JWT-väitteet koodataan (käyttäen Base64URL:ä), niitä ei salata. Tämä tarkoittaa, että jos henkilöillä on tunniste, he voivat purkaa sen ja nähdä väitteet, vaikka he eivät voi muuttaa sitä ilman allekirjoituksen saamista epäkelvoksi. Käytä salaus- tai muita turvallisia menetelmiä suojataksesi arkoja tietoja tarvittaessa.',
      },
    },
    when_to_use: {
      title: 'Milloin käyttää JWT:tä?',
      description: 'JWT:t voivat olla erityisen hyödyllisiä seuraavissa tilanteissa:',
      bullets: [
        {
          label: 'Mikropalveluarkkitehtuuri',
          description: 'Tilattomaan todennukseen useissa palveluissa.',
        },
        {
          label: 'Single sign-on (SSO) -järjestelmät',
          description: 'Mahdollistaa pääsyn useisiin sovelluksiin yhdellä todennuksella.',
        },
        {
          label: 'Mobiilisovellukset',
          description: 'Käyttäjäistuntojen tehokas ylläpito API-kutsujen aikana.',
        },
        {
          label: 'Suuriliikenteiset sovellukset',
          description: 'Vähentää tietokannan kuormaa suurten volyymien ympäristöissä.',
        },
        {
          label: 'Cross-origin resource sharing (CORS)',
          description: 'Yksinkertaistaa todennuksen useiden verkkotunnusten välillä.',
        },
        {
          label: 'Palveluttomat arkkitehtuurit',
          description:
            'Tilattoman todennuksen tarjoaminen, kun palvelinpuolen istunnot ovat haastavia.',
        },
      ],
    },
    learn_more: 'Opi lisää',
  },
  verify_jwt: {
    title: 'Kuinka varmistaa JWT?',
    subtitle:
      'JWT:n eheys on varmistettava, jotta sen otsikko ja sisältö eivät ole muuttuneet. Alla ovat vaiheittaiset esimerkit JWT:n tarkistamisesta suosituissa ohjelmointiympäristöissä:',
    ruby_label: 'Vahvista JWT Ruby:ssa',
    dotnet_label: 'Vahvista JWT .NET:ssä',
    java_label: 'Vahvista JWT Javassa',
    php_label: 'Vahvista JWT PHP:ssa',
    python_label: 'Varmista JWT Python:ssa',
    go_label: 'Vahvista JWT Go:ssa',
    nodejs_label: 'Vahvista JWT Node.js:ssä',
    rust_label: 'Vahvista JWT Rust:ssa',
  },
  related_topics: {
    title: 'JWT:hen liittyvät aiheet',
    subtitle:
      'Kaikki JWT:hen liittyvät tiedot ja vaiheittainen opas JWT:n vahvistamiseen eri ympäristöissä.',
    blogs: {
      jwt_algorithm: {
        title: 'JWT-algoritmit: EC vs. RSA',
        description:
          'Sukella JWT:n allekirjoitusalgoritmeihin, kuten EC ja RSA, ja opi valitsemaan turvallisin ja tehokkain menetelmä sovelluksellesi.',
      },
      id_token_and_access_token: {
        title: 'ID-tunniste & Käyttötunniste & Päivitä tunniste',
        description:
          'Tiedätkö ID-tunnisteiden, käyttötunnisteiden ja päivitystunnisteiden erityiset tarkoitukset? Ymmärrä niiden roolit todennus- ja auktorisointiprosesseissa JWT:n näkökulmasta.',
      },
      custom_jwt_token_claims: {
        title: 'Mukautetut JWT-tunnistevaatimukset',
        description:
          'Kuinka JWT mahdollistaa hienorakeisen pääsynhallinnan? Vertaile RBAC:ia (roolipohjainen pääsynvalvonta) ja ABAC:ia (attribuutteihin perustuva pääsynvalvonta) löytääksesi parhaan ratkaisun sovelluksellesi.',
      },
      opaque_token_vs_jwt: {
        title: 'Epäselvä tunniste vs. JWT-tunniste',
        description:
          'Tutustu JWT:n ja epämääräisten tunnisteiden ydineroihin ja tutki, miksi JWT:stä on tullut moderni valinta todennukseen sen korkean suorituskyvyn ja skaalautuvuuden ansiosta.',
      },
      api_authorization: {
        title:
          'API-aukotusten käyttöoikeudet: API-avaimet vs. Perustodennus vs. OAuth JWT -tunnisteet',
        description:
          'Tutustu kolmeen yleiseen API:n auktorisointimenetelmään niiden etujen ja haittojen kanssa. Sukella parhaisiin käytäntöihin suojella API:ta käyttäen OAuth JWT -tunnisteita.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Istuntoautentikointi',
        description:
          'Istuntopohjainen autentikointi perustuu palvelinpuolisen tallennustilaan käyttäjäistuntojen ylläpitämiseksi, kun taas tunnistepohjainen autentikointi mahdollistaa tilattoman ja skaalautuvan viestinnän asiakkaiden ja palvelimien välillä. Tutustu, kuinka JWT mullistaa API-turvallisuuden ja miksi siitä on tulossa modernin autentikoinnin suosituin valinta.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Tällaisia hienoja termejä kuten OAuth, OpenID Connect (OIDC), SAML, SSO ja JWT käytetään usein identiteetin ja pääsynhallinnan (IAM) alalla, mutta mitä ne tarkoittavat? Kuinka ne toimivat yhdessä?',
      },
    },
  },
  unblock_more_subtitle:
    'Yksinkertaista työnkulkuasi ja varmista turvallinen käyttäjähallinta Logto Cloudin avulla. Rakennettu OpenID Connectilla (OIDC), se hyödyntää JWT:tä tarjotakseen luotettavan tunnistus- ja auktorisointijärjestelmän, joka on suunniteltu kasvamaan tarpeidesi mukana.',
};

export default Object.freeze(jwt_decoder);
