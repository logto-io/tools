import type en from './en';

const de = {
  topbar: {
    banner_text: 'Erstelle und prüfe öffentliche Tools in einer websitegleichen Dev-App.',
    banner_link: 'Tool-Übersicht',
    developers: 'Entwickler',
    tools: 'Tools',
    language: 'Sprache',
    github_star: '9,5k Sterne',
    sign_in: 'Anmelden',
    get_started: 'Loslegen',
  },
  home: {
    label: 'Entwickler-Tools',
    title: 'Öffentliche Tools.',
    description:
      'Diese App bildet den oberen Bereich der echten Website nach, damit jedes Tool in einer produktionsnahen Shell entwickelt und geprüft werden kann, während jedes Tool weiterhin eine eigene Route behält.',
    tags: {
      topbar: 'Logto-Topbar-Stil',
      routes: 'Dedizierte Tool-Routen',
      i18n: 'Gemeinsamer i18n-Vertrag',
    },
    planned: 'Geplant',
    coming_next: 'Demnächst',
    available_now: 'Jetzt verfügbar',
    open_tool: 'Tool öffnen',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT-Decoder',
      description:
        'JWTs in einer websiteähnlichen Umgebung dekodieren, prüfen, bearbeiten und neu signieren.',
    },
    samlDecoder: {
      title: 'SAML-Assertion-Decoder',
      description: 'Als Nächstes geplant: XML-Assertions in derselben Tool-Shell prüfen.',
    },
    base64Decoder: {
      title: 'Base64-Encoder & -Decoder',
      description: 'Kodiere und dekodiere Base64- und Base64URL-Daten direkt im Browser.',
    },
    oauthProvidersExplorer: {
      title: 'OAuth- & OIDC-Provider-Explorer',
      description:
        'Schnelles Nachschlagen von OAuth-Endpunkten und zugehörigen Entwicklungsressourcen für beliebte OAuth- und OIDC-Provider.',
    },
  },
};

export default de satisfies typeof en;
