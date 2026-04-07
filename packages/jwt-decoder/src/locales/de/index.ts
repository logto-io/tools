const jwt_decoder = {
  title:
    'JWT Dekodiere & Kodierer (JWT decoder & encoder) | Sicher, einfach und benutzerfreundlich',
  description:
    'Schnelles Dekodieren und Kodieren von JWTs online, und Überprüfen ihrer Signaturen. Entdecke JWT-Beispiele mit verschiedenen Algorithmen, sowie schrittweise Anleitungen zur JWT-Implementierung.',
  encoder: 'Kodierer',
  decoder: 'Dekodiere',
  subtitle:
    'Ihre Daten sind 100% privat -- JWT wird vollständig direkt auf Ihrem Gerät decodiert und codiert.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Kodiertes JWT',
  decoded_header_label: 'Dekodierter Header',
  header_label: 'Header',
  decoded_payload_label: 'Dekodierte Nutzlast',
  payload_label: 'Nutzlast',
  signature_verified: 'Signatur verifiziert!',
  invalid_signature: 'Ungültige Signatur!',
  jwt_editor_placeholder: 'Füge dein JWT hier ein',
  hmac_secret_placeholder: 'Geben Sie das HMAC-Geheimnis ein',
  public_key_placeholder: 'Geben Sie den öffentlichen Schlüssel hier ein',
  private_key_placeholder: 'Geben Sie den privaten Schlüssel hier ein',
  jwks_endpoint_uri_placeholder: 'Geben Sie die JWKs-Endpunkt-URL ein',
  hmac_secret_label: 'Signierschlüssel',
  jwks_endpoint_uri_label: 'JWKs-Endpunkt-URI',
  public_key_label: 'Öffentlicher Schlüssel',
  private_key_label: 'Privater Schlüssel',
  base64_encoded_label: 'Base64 kodiert',
  jwks_endpoint_uri_link: 'JWKs-Endpunkt-URI',
  public_key_link: 'Über öffentlichen Schlüssel verifizieren',
  jwt_examples: 'JWT-Beispiele',
  share_jwt: 'JWT teilen',
  copy_to_clipboard: 'URL in die Zwischenablage kopiert',
  instruction: {
    title: 'Mehr über JWT erfahren',
    subtitle:
      'Alle Informationen, die Sie über JWT betreffen, und Schritt-für-Schritt-Anleitung zur JWT-Verifizierung in verschiedenen Frameworks.',
    what_is_jwt: {
      title: 'Was ist JWT?',
      description:
        'JWT (JSON Web Token) ist ein eigenständiges, zustandsloses Token, das Informationen in einem strukturierten und lesbaren Format enthält. Ob Sie eine API schützen oder eine tokenbasierte Authentifizierung für Ihre Anwendung übernehmen, JWTs sind ein leistungsstarkes Werkzeug, weil sie:',
      bullets: [
        {
          label: 'Zustandslos',
          description:
            'JWTs sind eigenständig und erfordern keinen serverseitigen Zustand zur Validierung. JWT kann die Datenintegrität über Signaturen gewährleisten.',
        },
        {
          label: 'Kompatibilität zwischen Diensten',
          description:
            'JWTs können leicht zwischen verschiedenen Diensten geteilt und verifiziert werden.',
        },
        {
          label: 'Erweiterbar',
          description:
            'Die Nutzlast eines JWT kann benutzerdefinierte Ansprüche enthalten, die flexible Autorisierung und Informationsaustausch ermöglichen.',
        },
      ],
    },
    jwt_structure: {
      title: 'Die Struktur von JWT',
      description:
        'Ein typisches JWT ist in drei Teile unterteilt, jeder in Base64URL kodiert und durch Punkte (.) getrennt:',
      bullets: [
        {
          label: 'Header',
          description:
            'Enthält Metadaten, wie den Signaturalgorithmus (z. B. HS256 oder RS256) und den Token-Typ (JWT).',
        },
        {
          label: 'Nutzlast',
          description:
            'Enthält die eigentlichen Daten, wie Benutzer-ID, Benutzerprofil, Ablaufzeit oder Bereiche.',
        },
        {
          label: 'Signatur',
          description:
            'Eine gehashte Kombination von Header, Nutzlast und gesichert mit einem geheimen Schlüssel. Ihr Zweck ist es, die Integrität des Tokens sicherzustellen und zu bestätigen, dass es nicht verändert wurde',
        },
      ],
      summary:
        'Diese Struktur ermöglicht es JWTs, auf kompakte und sichere Weise Informationen zwischen Parteien zu übertragen.',
    },
    token_claims: {
      title: 'Häufige Ansprüche im JWT',
      description:
        'Die Ansprüche sind Teil der Nutzlast und enthalten die wichtigsten Informationen. Hier sind standardisierte registrierte Ansprüche zur Orientierung:',
      table: {
        headers: ['Ansprüche', 'Vollständiger Name', 'Beschreibung'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Herausgeber',
            description: 'Die Entität, die das JWT ausgestellt hat, wie der Autorisierungsserver.',
          },
          {
            claim: 'sub',
            full_name: 'Subjekt',
            description:
              'Identifiziert das Subjekt des JWT, das typischerweise den authentifizierten Benutzer darstellt.',
          },
          {
            claim: 'aud',
            full_name: 'Empfänger',
            description:
              'Gibt an, welche Empfänger das Token akzeptieren und verarbeiten können. Dies kann ein Array von Werten für mehrere Empfänger oder ein einzelner Wert für einen einzigen Empfänger sein.',
          },
          {
            claim: 'exp',
            full_name: 'Ablaufzeit',
            description:
              'Setzt eine Ablaufzeit für das Token fest, nach der es ungültig wird. Dies hilft, Replay-Angriffe zu verhindern, indem die Gültigkeitsdauer des Tokens begrenzt wird.',
          },
          {
            claim: 'nbf',
            full_name: 'Nicht vor',
            description:
              'Macht ein Token erst nach diesem Zeitstempel gültig. Nützlich in Situationen, in denen Uhren nicht zugänglich sind.',
          },
          {
            claim: 'iat',
            full_name: 'Ausgestellt am',
            description:
              'Wann das Token erstellt wurde. Dies kann verwendet werden, um das Alter des Tokens zu bestimmen.',
          },
          {
            claim: 'jti',
            full_name: 'JWT-ID',
            description:
              'Eine eindeutige Kennung für das Token, nützlich, um zu verhindern, dass das gleiche Token mehrfach verwendet wird (z. B. bei Replay-Angriffen).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Abhängig von der Spezifikation und der Konfiguration des Autorisierungsservers können zusätzliche Ansprüche in der Nutzlast enthalten sein, um spezifische Anwendungsfälle zu unterstützen. Sie können JWT auch benutzerdefinierte Ansprüche hinzufügen, um einzigartige geschäftliche Anforderungen zu erfüllen.',
        id_token: {
          title: 'ID-Token',
          description:
            'Wird im OpenID Connect verwendet und enthält Ansprüche wie Profilinformationen (z. B. Name, E-Mail usw.) über den authentifizierten Benutzer.',
        },
        access_token: {
          title: 'Zugriffstoken',
          description:
            'Wird im OAuth 2.0 verwendet und gewährt Zugriff auf bestimmte Ressourcen oder APIs im Namen des Benutzers oder der Anwendung.',
        },
      },
      notification: {
        label: 'Vorsicht',
        description:
          'Speichern Sie keine privaten oder sensiblen Informationen in JWT-Ansprüchen. Während JWT-Ansprüche kodiert sind (mithilfe von Base64URL), sind sie nicht verschlüsselt. Dies bedeutet, dass jeder mit dem Token es dekodieren und die Ansprüche anzeigen kann, auch wenn er es nicht ändern kann, ohne die Signatur ungültig zu machen. Verwenden Sie Verschlüsselung oder andere sichere Methoden, um sensible Daten bei Bedarf zu schützen.',
      },
    },
    when_to_use: {
      title: 'Wann JWT verwenden?',
      description: 'JWTs können besonders in den folgenden Szenarien vorteilhaft sein:',
      bullets: [
        {
          label: 'Microservices-Architektur',
          description: 'Für zustandslose Authentifizierung zwischen mehreren Diensten.',
        },
        {
          label: 'Single-Sign-On (SSO)-Systeme',
          description: 'Zugang zu mehreren Anwendungen mit einer Authentifizierung ermöglichen.',
        },
        {
          label: 'Mobile Anwendungen',
          description: 'Benutzersitzungen effizient über API-Aufrufe hinweg aufrechterhalten.',
        },
        {
          label: 'Hochverkehrs-Anwendungen',
          description: 'Datenbankbelastung in Hochlastumgebungen reduzieren.',
        },
        {
          label: 'Cross-Origin-Resource-Sharing (CORS)',
          description: 'Authentifizierung über mehrere Domains hinweg vereinfachen.',
        },
        {
          label: 'Serverlose Architekturen',
          description:
            'Bietet zustandslose Authentifizierung, wo serverseitige Sitzungen eine Herausforderung darstellen.',
        },
      ],
    },
    learn_more: 'Mehr erfahren',
  },
  verify_jwt: {
    title: 'Wie überprüft man JWT?',
    subtitle:
      'Die Integrität eines JWT muss überprüft werden, um sicherzustellen, dass sein Header und seine Nutzlast nicht manipuliert wurden. Unten finden Sie Schritt-für-Schritt-Beispiele zur Verifizierung von JWTs in beliebten Programmierumgebungen:',
    ruby_label: 'JWT in Ruby verifizieren',
    dotnet_label: 'JWT in .NET verifizieren',
    java_label: 'JWT in Java verifizieren',
    php_label: 'JWT in PHP verifizieren',
    python_label: 'JWT in Python verifizieren',
    go_label: 'JWT in Go verifizieren',
    nodejs_label: 'JWT in Node.js verifizieren',
    rust_label: 'JWT in Rust verifizieren',
  },
  related_topics: {
    title: 'Verwandte JWT-Themen',
    subtitle:
      'Alle Informationen, die Sie über JWT betreffen, und Schritt-für-Schritt-Anleitung zur JWT-Verifizierung in verschiedenen Frameworks.',
    blogs: {
      jwt_algorithm: {
        title: 'JWT-Algorithmen: EC vs. RSA',
        description:
          'Tauchen Sie in die Signaturalgorithmen von JWT ein, wie EC und RSA, und lernen Sie, wie Sie die sicherste und effizienteste Methode für Ihre Anwendung auswählen.',
      },
      id_token_and_access_token: {
        title: 'ID-Token & Zugriffstoken & Auffrischungstoken',
        description:
          'Kennen Sie die spezifischen Zwecke von ID-Tokens, Zugriffstokens und Refresh-Tokens? Verstehen Sie ihre Rollen in Authentifizierungs- und Autorisierungsprozessen aus einer JWT-Perspektive.',
      },
      custom_jwt_token_claims: {
        title: 'Benutzerdefinierte JWT-Token-Ansprüche',
        description:
          'Wie erreicht JWT eine feingranulare Zugriffskontrolle? Vergleichen Sie RBAC (Rollenbasierte Zugriffskontrolle) und ABAC (Attributbasierte Zugriffskontrolle), um die beste Lösung für Ihre Anwendung zu finden.',
      },
      opaque_token_vs_jwt: {
        title: 'Opaque-Token vs. JWT-Token',
        description:
          'Erkunden Sie die wesentlichen Unterschiede zwischen JWT und Opaque-Token und entdecken Sie, warum JWT zur modernen Wahl für Authentifizierung geworden ist, mit seiner hohen Leistung und Skalierbarkeit.',
      },
      api_authorization: {
        title: 'API-Autorisierung: API-Schlüssel vs. Basis-Authentifizierung vs. OAuth JWT-Tokens',
        description:
          'Erforschen Sie drei verbreitete API-Autorisierungsmechanismen mit ihren Vor- und Nachteilen. Tauchen Sie in eine bewährte Praxis zur Sicherung Ihrer APIs unter Verwendung von OAuth JWT-Tokens ein.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Sitzungs-Authentifizierung',
        description:
          'Sitzungsbasierte Authentifizierung stützt sich auf serverseitige Speicherung, um Benutzersitzungen aufrechtzuerhalten, während tokenbasierte Authentifizierung statlose und skalierbare Kommunikation zwischen Clients und Servern ermöglicht. Entdecken Sie, wie JWT die API-Sicherheit revolutioniert und warum es zur bevorzugten Wahl für moderne Authentifizierung wird.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Die Begriffe wie OAuth, OpenID Connect (OIDC), SAML, SSO und JWT werden häufig im Bereich der Identitäts- und Zugriffsverwaltung verwendet, aber was bedeuten sie? Wie arbeiten sie zusammen?',
      },
    },
  },
  unblock_more_subtitle:
    'Vereinfachen Sie Ihren Arbeitsablauf und stellen Sie eine sichere Benutzerverwaltung mit Logto Cloud sicher. Basierend auf OpenID Connect (OIDC) nutzt es JWT, um ein zuverlässiges Authentifizierungs- und Autorisierungssystem bereitzustellen, das mit Ihren Bedürfnissen skaliert.',
};

export default Object.freeze(jwt_decoder);
