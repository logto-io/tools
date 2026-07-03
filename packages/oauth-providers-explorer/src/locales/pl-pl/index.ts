const oauth_providers = {
  title: 'Eksplorator Dostawców OAuth i OIDC',
  description:
    'Szybko wyszukuj punkty końcowe OAuth i powiązane zasoby deweloperskie dla popularnych dostawców OAuth i OIDC.',
  hint: 'Wszystkie informacje o dostawcach pochodzą z oficjalnej dokumentacji, z odnośnikami na każdej stronie jako referencja',
  app_title: 'Eksplorator Dostawców OAuth i OIDC <span>Explorer</span>',
  search_placeholder: 'Szukaj dostawcy (np. GitHub, Google, Facebook)',
  clear_search: 'Wyczyść wyszukiwanie',
  copy: 'Kopiuj',
  copied: 'Skopiowano do schowka',
  back_to_explorer: 'Powrót do Eksploratora',
  details_title: '{{name}} punkty końcowe OAuth',
  details_description: '{{name}} punkty końcowe OAuth i powiązane zasoby deweloperskie',
  oidc_details_title: '{{name}} punkty końcowe OAuth i OIDC',
  oidc_details_description: '{{name}} punkty końcowe OAuth i OIDC i powiązane zasoby deweloperskie',
  unknown_details_title: 'Nieznany dostawca OAuth',
  unknown_details_description: 'Ten dostawca OAuth nie jest rozpoznawany.',
  documentation_title: '{{name}} dokumentacja OAuth i zasoby',
  oidc_documentation_title: '{{name}} dokumentacja OAuth i OIDC i zasoby',
  authorization_endpoint: '{{name}} punkt końcowy autoryzacji',
  authorization_endpoint_description:
    'Punkt końcowy, do którego przekierowywani są użytkownicy w celu udzielenia twojej aplikacji dostępu do ich konta.',
  token_endpoint: '{{name}} punkt końcowy tokenu',
  token_endpoint_description:
    'Punkt końcowy służący do wymiany kodu autoryzacyjnego lub tokenu odświeżającego na token dostępu i token odświeżający.',
  jwks_uri: '{{name}} URI JWKS',
  jwks_uri_description:
    'URI dostarczające klucze publiczne do weryfikacji tokenów JWT. Te klucze są używane do weryfikacji autentyczności tokenów wydawanych przez serwer autoryzacji.',
  revocation_endpoint: '{{name}} punkt końcowy unieważnienia',
  revocation_endpoint_description:
    'Punkt końcowy używany do unieważnienia tokenów dostępu lub tokenów odświeżających przed upływem ich czasu ważności, zazwyczaj używany, gdy użytkownik się wylogowuje lub cofa dostęp aplikacji.',
  userinfo_endpoint: '{{name}} punkt końcowy informacji o użytkowniku',
  userinfo_endpoint_description:
    'Standaryzowany punkt końcowy OAuth, który zwraca uwierzytelnione informacje o profilu użytkownika, w tym twierdzenia o bieżącym użytkowniku na podstawie zakresu tokenu dostępu.',
  end_session_endpoint: '{{name}} punkt końcowy zakończenia sesji',
  end_session_endpoint_description:
    'Punkt końcowy używany do zakończenia sesji użytkownika w dostawcy tożsamości, powszechnie używany do implementacji funkcji jednorazowego wylogowywania.',
  introspection_endpoint: '{{name}} punkt końcowy introspekcji',
  introspection_endpoint_description:
    'Punkt końcowy, który pozwala autoryzowanym stronom sprawdzić stan i ważność tokenu dostępu lub tokenu odświeżającego, zwracając szczegółowe metadane tokenu.',
  oidc_discovery_endpoint: '{{name}} punkt końcowy odkrywania OIDC',
  oidc_discovery_endpoint_description:
    'Dobrze znany punkt końcowy (.well-known/openid-configuration), który dostarcza metadane konfiguracyjne OpenID Connect, w tym wszystkie dostępne punkty końcowe i obsługiwane funkcje.',
  issuer: '{{name}} URL wystawcy',
  issuer_description:
    'Unikalny URL identyfikatora, który identyfikuje dostawcę OAuth/OIDC i jest używany do weryfikacji tokenów',
  provider_not_found: 'Dostawca nie znaleziony',
  provider_not_found_description:
    'Nie mogliśmy znaleźć dostawcy OAuth, którego szukasz. Może został usunięty lub nie istnieje.',
};

export default Object.freeze(oauth_providers);
