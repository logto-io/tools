const oauth_providers = {
  title: 'OAuth- & OIDC-Provider-Explorer',
  description:
    'Schnelles Nachschlagen von OAuth-Endpunkten und zugehörigen Entwicklungsressourcen für beliebte OAuth- und OIDC-Provider.',
  hint: 'Alle Providerinformationen stammen aus offiziellen Dokumentationen, mit Verweisen auf jeder Seite zur Referenz',
  app_title: 'OAuth- & OIDC-Provider <span>Explorer</span>',
  search_placeholder: 'Suchen Sie nach einem Anbieter (z. B. GitHub, Google, Facebook)',
  back_to_explorer: 'Zurück zum Explorer',
  details_title: '{{name}} OAuth-Endpunkte',
  details_description: '{{name}} OAuth-Endpunkte und zugehörige Entwicklungsressourcen',
  oidc_details_title: '{{name}} OAuth- & OIDC-Endpunkte',
  oidc_details_description:
    '{{name}} OAuth- & OIDC-Endpunkte und zugehörige Entwicklungsressourcen',
  unknown_details_title: 'Unbekannter OAuth-Anbieter',
  unknown_details_description: 'Dieser OAuth-Anbieter wird nicht erkannt.',
  documentation_title: '{{name}} OAuth-Dokumentation und -Ressourcen',
  oidc_documentation_title: '{{name}} OAuth- & OIDC-Dokumentation und -Ressourcen',
  authorization_endpoint: '{{name}} Autorisierungsendpunkt',
  authorization_endpoint_description:
    'Der Endpunkt, zu dem Benutzer weitergeleitet werden, um Ihrer Anwendung Zugriff auf ihr Konto zu gewähren.',
  token_endpoint: '{{name}} Token-Endpunkt',
  token_endpoint_description:
    'Der Endpunkt, um den Autorisierungscode oder das Aktualisierungstoken gegen ein Zugriffstoken und ein Aktualisierungstoken auszutauschen.',
  jwks_uri: '{{name}} JWKS-URI',
  jwks_uri_description:
    'Die URI, die öffentliche Schlüssel zum Überprüfen von JWT-Tokens bereitstellt. Diese Schlüssel werden verwendet, um die Authentizität von vom Autorisierungsserver ausgegebenen Tokens zu validieren.',
  revocation_endpoint: '{{name}} Widerrufsendpunkt',
  revocation_endpoint_description:
    'Der Endpunkt, der verwendet wird, um Zugriffstokens oder Aktualisierungstokens vor deren Ablaufzeit ungültig zu machen, typischerweise verwendet, wenn sich ein Benutzer abmeldet oder den Anwendungszugriff widerruft.',
  userinfo_endpoint: '{{name}} Benutzerinfo-Endpunkt',
  userinfo_endpoint_description:
    'Der standardisierte OAuth-Endpunkt, der authentifizierte Benutzerprofilinformationen zurückgibt, einschließlich Ansprüchen über den aktuellen Benutzer basierend auf dem Umfang des Zugriffstokens.',
  end_session_endpoint: '{{name}} Sitzungsbeendigung-Endpunkt',
  end_session_endpoint_description:
    'Der Endpunkt, der verwendet wird, um die Benutzersitzung beim Identitätsanbieter zu beenden, häufig für die Implementierung der Funktionalität zum Abmelden an einem Punkt.',
  introspection_endpoint: '{{name}} Introspektionsendpunkt',
  introspection_endpoint_description:
    'Der Endpunkt, der autorisierten Parteien erlaubt, den Status und die Gültigkeit eines Zugriffstokens oder Aktualisierungstokens zu überprüfen und ausführliche Token-Metadaten zurückgibt.',
  oidc_discovery_endpoint: '{{name}} OIDC-Entdeckung-Endpunkt',
  oidc_discovery_endpoint_description:
    'Der bekannte Endpunkt (.well-known/openid-configuration), der OpenID Connect-Konfigurationsmetadaten bereitstellt, einschließlich aller verfügbaren Endpunkte und unterstützten Funktionen.',
  issuer: '{{name}} Issuer-URL',
  issuer_description:
    'Eine eindeutige Identifikator-URL, die den OAuth/OIDC-Provider identifiziert und zur Validierung von Tokens verwendet wird',
  provider_not_found: 'Anbieter nicht gefunden',
  provider_not_found_description:
    'Wir konnten den von Ihnen gesuchten OAuth-Anbieter nicht finden. Es könnte entfernt worden sein oder nicht existieren.',
};

export default Object.freeze(oauth_providers);
