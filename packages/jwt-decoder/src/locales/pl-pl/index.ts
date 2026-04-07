const jwt_decoder = {
  title:
    'Dekoder i enkoder JWT (JWT decoder & encoder) | Bezpieczny, prosty i przyjazny dla użytkownika',
  description:
    'Szybko dekoduj i koduj JWT online oraz weryfikuj ich podpisy. Odkrywaj przykłady JWT używając różnych algorytmów, wraz z przewodnikami wdrażania JWT krok po kroku.',
  encoder: 'Koder',
  decoder: 'Dekoder',
  subtitle:
    'Twoje dane są w 100% prywatne — JWT jest w pełni dekodowany i kodowany bezpośrednio na twoim urządzeniu.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Zakodowany JWT',
  decoded_header_label: 'Zdekodowany nagłówek',
  header_label: 'Nagłówek',
  decoded_payload_label: 'Zdekodowany ładunek',
  payload_label: 'Ładunek',
  signature_verified: 'Podpis zweryfikowany!',
  invalid_signature: 'Nieprawidłowy podpis!',
  jwt_editor_placeholder: 'Wklej tutaj swój JWT',
  hmac_secret_placeholder: 'Wprowadź tajny klucz HMAC',
  public_key_placeholder: 'Wprowadź tutaj klucz publiczny',
  private_key_placeholder: 'Wprowadź tutaj klucz prywatny',
  jwks_endpoint_uri_placeholder: 'Wprowadź URL punktu końcowego JWKs',
  hmac_secret_label: 'Klucz podpisujący',
  jwks_endpoint_uri_label: 'URI punktu końcowego JWKs',
  public_key_label: 'Klucz publiczny',
  private_key_label: 'Klucz prywatny',
  base64_encoded_label: 'Zakodowane Base64',
  jwks_endpoint_uri_link: 'URI punktu końcowego JWKs',
  public_key_link: 'Zweryfikuj za pomocą klucza publicznego',
  jwt_examples: 'Przykłady JWT',
  share_jwt: 'Udostępnij JWT',
  copy_to_clipboard: 'URL skopiowany do schowka',
  instruction: {
    title: 'Dowiedz się o JWT',
    subtitle:
      'Wszystkie informacje na temat JWT oraz krok po kroku przewodnik weryfikacji JWT w różnych środowiskach.',
    what_is_jwt: {
      title: 'Czym jest JWT?',
      description:
        'JWT (JSON Web Token) to niezależny od stanu, samodzielny token, który przenosi informacje w ustrukturyzowanym i czytelnym formacie. Niezależnie od tego, czy chcesz chronić API, czy zastosować uwierzytelnianie oparte na tokenach dla swojej aplikacji, JWT są potężnym narzędziem, bo:',
      bullets: [
        {
          label: 'Bezstanowy',
          description:
            'JWT są samodzielne i nie wymagają przechowywania po stronie serwera do weryfikacji. JWT mogą zapewnić integralność danych za pomocą podpisów.',
        },
        {
          label: 'Zgodność między usługami',
          description: 'JWT mogą być łatwo udostępniane i weryfikowane między różnymi usługami.',
        },
        {
          label: 'Rozszerzalny',
          description:
            'Ładunek JWT może zawierać niestandardowe roszczenia, umożliwiając elastyczne autoryzacje i wymianę informacji.',
        },
      ],
    },
    jwt_structure: {
      title: 'Struktura JWT',
      description:
        'Typowy JWT jest podzielony na trzy części, każda zakodowana w Base64URL i oddzielona kropkami (.):',
      bullets: [
        {
          label: 'Nagłówek',
          description:
            'Zawiera metadane, takie jak algorytm podpisu (np. HS256 lub RS256) oraz typ tokenu (JWT).',
        },
        {
          label: 'Ładunek',
          description:
            'Zawiera rzeczywiste dane, takie jak identyfikator użytkownika, profil użytkownika, czas wygaśnięcia lub zakresy.',
        },
        {
          label: 'Podpis',
          description:
            'Połączony haszem Nagłówek, Ładunek i zabezpieczony za pomocą klucza tajnego. Jego celem jest zapewnienie integralności tokenu i potwierdzenie, że nie został on zmieniony.',
        },
      ],
      summary:
        'Ta struktura umożliwia JWT zapewnienie kompaktowego, bezpiecznego sposobu przesyłania informacji między stronami.',
    },
    token_claims: {
      title: 'Typowe roszczenia tokenu w JWT',
      description:
        'Roszczenia są częścią ładunku i zawierają kluczowe informacje. Oto znormalizowane zarejestrowane roszczenia, do których możesz się odnieść:',
      table: {
        headers: ['Roszczenia', 'Pełna nazwa', 'Opis'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Wystawca',
            description: 'Jednostka, która wystawiła JWT, na przykład serwer autoryzacyjny.',
          },
          {
            claim: 'sub',
            full_name: 'Temat',
            description:
              'Identyfikuje temat JWT, zazwyczaj reprezentujący uwierzytelnionego użytkownika.',
          },
          {
            claim: 'aud',
            full_name: 'Odbiorca',
            description:
              'Określa, które podmioty mogą zaakceptować i przetworzyć token. Może to być tablica wartości dla wielu odbiorców lub pojedyncza wartość dla jednego odbiorcy.',
          },
          {
            claim: 'exp',
            full_name: 'Czas wygaśnięcia',
            description:
              'Ustawia czas wygaśnięcia tokenu, po którym staje się on nieważny. Pomaga to zapobiegać atakom powtórzeniowym, ograniczając czas ważności tokenu.',
          },
          {
            claim: 'nbf',
            full_name: 'Nie przed',
            description:
              'Uznaje token za ważny tylko po tym znaczniku czasu. Przydatne w sytuacjach, gdy zegary nie są dostępne.',
          },
          {
            claim: 'iat',
            full_name: 'Wystawiony o',
            description: 'Kiedy token został utworzony. Może być użyty do określenia wieku tokenu.',
          },
          {
            claim: 'jti',
            full_name: 'ID JWT',
            description:
              'Unikalny identyfikator dla tokenu, przydatny do zapobiegania wielokrotnemu użyciu tego samego tokenu (np. w atakach powtórzeniowych).',
          },
        ],
      },
      other_token_claims: {
        description:
          'W zależności od specyfikacji i konfiguracji serwera autoryzacji, w ładunku mogą zostać uwzględnione dodatkowe roszczenia, aby wspierać określone przypadki użycia. Możesz również dodać niestandardowe roszczenia do JWT, aby sprostać unikalnym wymaganiom biznesowym.',
        id_token: {
          title: 'Token ID',
          description:
            'Używany w OpenID Connect, zawiera roszczenia, takie jak informacje o profilu (np. imię, e-mail itp.) o uwierzytelnionym użytkowniku.',
        },
        access_token: {
          title: 'Token dostępu',
          description:
            'Używany w OAuth 2.0, zapewnia dostęp do określonych zasobów lub API w imieniu użytkownika lub aplikacji.',
        },
      },
      notification: {
        label: 'Ostrzeżenie',
        description:
          'Nie przechowuj prywatnych ani poufnych informacji w roszczeniach JWT. Chociaż roszczenia JWT są zakodowane (za pomocą Base64URL), nie są zaszyfrowane. Oznacza to, że każdy, kto ma token, może go zdekodować i zobaczyć roszczenia, nawet jeśli nie może ich zmienić bez unieważnienia podpisu. Użyj szyfrowania lub innych bezpiecznych metod, aby chronić poufne dane, gdy to konieczne.',
      },
    },
    when_to_use: {
      title: 'Kiedy używać JWT?',
      description: 'JWT mogą być szczególnie korzystne w następujących sytuacjach:',
      bullets: [
        {
          label: 'Architektura mikrousług',
          description: 'Dla bezstanowego uwierzytelniania między wieloma usługami.',
        },
        {
          label: 'Systemy pojedynczego logowania (SSO)',
          description:
            'Umożliwienie dostępu do wielu aplikacji za pomocą jednego uwierzytelnienia.',
        },
        {
          label: 'Aplikacje mobilne',
          description: 'Efektywne utrzymywanie sesji użytkownika w ramach żądań API.',
        },
        {
          label: 'Aplikacje o dużym ruchu',
          description: 'Zmniejszenie obciążenia bazy danych w środowiskach o dużej ilości danych.',
        },
        {
          label: 'Współdzielenie zasobów między źródłami (CORS)',
          description: 'Uproszczenie uwierzytelniania między wieloma domenami.',
        },
        {
          label: 'Architektury bezserwerowe',
          description:
            'Zapewnienie bezstanowego uwierzytelniania tam, gdzie sesje po stronie serwera są trudne.',
        },
      ],
    },
    learn_more: 'Dowiedz się więcej',
  },
  verify_jwt: {
    title: 'Jak zweryfikować JWT?',
    subtitle:
      'Integralność JWT musi być zweryfikowana, aby upewnić się, że jego nagłówek i ładunek nie zostały zmanipulowane. Poniżej znajdują się przykłady krok po kroku weryfikacji JWT w popularnych środowiskach programistycznych:',
    ruby_label: 'Zweryfikuj JWT w Ruby',
    dotnet_label: 'Zweryfikuj JWT w .NET',
    java_label: 'Zweryfikuj JWT w Javie',
    php_label: 'Zweryfikuj JWT w PHP',
    python_label: 'Zweryfikuj JWT w Python',
    go_label: 'Zweryfikuj JWT w Go',
    nodejs_label: 'Zweryfikuj JWT w Node.js',
    rust_label: 'Zweryfikuj JWT w Rust',
  },
  related_topics: {
    title: 'Powiązane tematy JWT',
    subtitle:
      'Wszystkie informacje na temat JWT oraz krok po kroku przewodnik weryfikacji JWT w różnych środowiskach.',
    blogs: {
      jwt_algorithm: {
        title: 'Algorytmy JWT: EC vs. RSA',
        description:
          'Zanurz się w algorytmy podpisu JWT, takie jak EC i RSA, i dowiedz się, jak wybrać najbardziej bezpieczną i wydajną metodę dla swojej aplikacji.',
      },
      id_token_and_access_token: {
        title: 'Token identyfikacyjny & Token dostępu & Tokeny odświeżania',
        description:
          'Czy znasz konkretne cele Tokenów ID, Tokenów dostępu i Tokenów odświeżania? Zrozum ich role w procesach uwierzytelniania i autoryzacji z perspektywy JWT.',
      },
      custom_jwt_token_claims: {
        title: 'Niestandardowe roszczenia tokenu JWT',
        description:
          'Jak JWT osiąga precyzyjną kontrolę dostępu? Porównaj RBAC (kontrolę dostępu opartą na rolach) z ABAC (kontrolą dostępu opartą na atrybutach), aby znaleźć najlepsze rozwiązanie dla swojej aplikacji.',
      },
      opaque_token_vs_jwt: {
        title: 'Token nieprzezroczysty vs. Token JWT',
        description:
          'Poznaj główne różnice między JWT a Tokenami nieprzezroczystymi i odkryj, dlaczego JWT stał się nowoczesnym wyborem dla uwierzytelniania dzięki swojej wysokiej wydajności i skalowalności.',
      },
      api_authorization: {
        title: 'Autoryzacja API: Klucze API vs. Podstawowe uwierzytelnianie vs. Tokeny OAuth JWT',
        description:
          'Poznaj trzy popularne mechanizmy autoryzacji API wraz z ich zaletami i wadami. Zanurz się w najlepszą praktykę zabezpieczania swoich API za pomocą Tokenów OAuth JWT.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Uwierzytelnianie sesji',
        description:
          'Uwierzytelnianie oparte na sesji polega na przechowywaniu po stronie serwera w celu utrzymywania sesji użytkownika, podczas gdy uwierzytelnianie oparte na tokenach umożliwia bezstanową i skalowalną komunikację między klientami a serwerami. Odkryj, jak JWT rewolucjonizuje bezpieczeństwo API i dlaczego staje się preferowanym wyborem dla nowoczesnego uwierzytelniania.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Pojęcia takie jak OAuth, OpenID Connect (OIDC), SAML, SSO i JWT często występują w dziedzinie zarządzania tożsamościami i dostępem (IAM), ale co one oznaczają? Jak współdziałają?',
      },
    },
  },
  unblock_more_subtitle:
    'Ułatw swoją pracę i zapewnij bezpieczne zarządzanie użytkownikami dzięki Logto Cloud. Zbudowane na OpenID Connect (OIDC), korzysta z JWT, aby dostarczyć niezawodny system uwierzytelniania i autoryzacji, zaprojektowany do skalowania wraz z twoimi potrzebami.',
};

export default Object.freeze(jwt_decoder);
