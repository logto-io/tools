import type en from '../en';

const jwt_decoder = {
  title: 'Decodificador y codificador de JWT | Seguro, simple y fácil de usar',
  description:
    'Decodifica y codifica JWTs en línea rápidamente, y verifica sus firmas. Explora ejemplos de JWT usando diferentes algoritmos, junto con guías paso a paso para la implementación de JWT.',
  encoder: 'Codificador',
  decoder: 'Decodificador',
  subtitle:
    'Tus datos son 100% privados: el JWT se decodifica y codifica completamente en tu dispositivo.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'JWT codificado',
  decoded_header_label: 'Encabezado decodificado',
  header_label: 'Encabezado',
  decoded_payload_label: 'Carga útil decodificada',
  payload_label: 'Carga útil',
  signature_verified: '¡Firma verificada!',
  invalid_signature: '¡Firma no válida!',
  jwt_editor_placeholder: 'Pega tu JWT aquí',
  hmac_secret_placeholder: 'Introduce el secreto HMAC',
  public_key_placeholder: 'Introduce la clave pública aquí',
  private_key_placeholder: 'Introduce la clave privada aquí',
  jwks_endpoint_uri_placeholder: 'Introduce la URL del endpoint JWKs',
  hmac_secret_label: 'Clave de firma',
  jwks_endpoint_uri_label: 'URI del endpoint JWKs',
  public_key_label: 'Clave pública',
  private_key_label: 'Clave privada',
  base64_encoded_label: 'Codificado en Base64',
  jwks_endpoint_uri_link: 'URI del endpoint JWKs',
  public_key_link: 'Verificar mediante clave pública',
  jwt_examples: 'Ejemplos de JWT',
  share_jwt: 'Compartir JWT',
  copy_to_clipboard: 'URL copiado al portapapeles',
  instruction: {
    title: 'Aprende sobre JWT',
    subtitle:
      'Toda la información que te interesa sobre JWT y una guía paso a paso para verificar JWT en diversos marcos.',
    what_is_jwt: {
      title: '¿Qué es JWT?',
      description:
        'JWT (Token Web JSON) es un token autónomo y sin estado que lleva información en un formato estructurado y legible. Ya sea que estés protegiendo una API o adoptando autenticación basada en tokens para tu aplicación, los JWT son una herramienta poderosa, porque:',
      bullets: [
        {
          label: 'Sin estado',
          description:
            'Los JWT son autónomos y no requieren estado del lado del servidor para validar. JWT puede asegurar la integridad de los datos a través de firmas.',
        },
        {
          label: 'Compatibilidad entre servicios',
          description:
            'Los JWT pueden ser fácilmente compartidos y verificados entre diferentes servicios.',
        },
        {
          label: 'Extensible',
          description:
            'La carga útil de un JWT puede contener afirmaciones personalizadas, lo que permite una autorización flexible y compartir información.',
        },
      ],
    },
    jwt_structure: {
      title: 'La estructura de JWT',
      description:
        'Un JWT típico se divide en tres partes, cada una codificada en Base64URL y separada por puntos (.):',
      bullets: [
        {
          label: 'Encabezado',
          description:
            'Contiene metadatos, como el algoritmo de firma (por ejemplo, HS256 o RS256) y el tipo de token (JWT).',
        },
        {
          label: 'Carga útil',
          description:
            'Contiene los datos reales, como el ID del usuario, el perfil del usuario, el tiempo de expiración o los alcances.',
        },
        {
          label: 'Firma',
          description:
            'Una combinación encriptada del Encabezado, la Carga útil y asegurada usando una clave secreta. Su propósito es asegurar la integridad del token y confirmar que no ha sido alterado',
        },
      ],
      summary:
        'Esta estructura permite que los JWT ofrezcan una forma compacta y segura de transmitir información entre partes.',
    },
    token_claims: {
      title: 'Reclamaciones comunes de tokens en JWT',
      description:
        'Las reclamaciones son parte de la carga útil y contienen la información clave. Aquí están las Reclamaciones Registradas estandarizadas para tu referencia:',
      table: {
        headers: ['Reclamaciones', 'Nombre completo', 'Descripción'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Emisor',
            description: 'La entidad que emitió el JWT, como el servidor de autorización.',
          },
          {
            claim: 'sub',
            full_name: 'Sujeto',
            description:
              'Identifica al sujeto del JWT, generalmente representando al usuario autenticado.',
          },
          {
            claim: 'aud',
            full_name: 'Audiencia',
            description:
              'Especifica qué receptores pueden aceptar y procesar el token. Esto puede ser un array de valores para múltiples audiencias o un solo valor para un único receptor.',
          },
          {
            claim: 'exp',
            full_name: 'Tiempo de expiración',
            description:
              'Establece un tiempo de expiración en el token después del cual se vuelve inválido. Esto ayuda a prevenir ataques de reproducción limitando cuánto tiempo un token permanece válido.',
          },
          {
            claim: 'nbf',
            full_name: 'No antes de',
            description:
              'Hace que un token sea válido solo después de esta marca de tiempo. Útil en situaciones donde no se puede acceder a relojes.',
          },
          {
            claim: 'iat',
            full_name: 'Emitido en',
            description:
              'Cuando se creó el token. Esto se puede usar para determinar la edad del token.',
          },
          {
            claim: 'jti',
            full_name: 'ID de JWT',
            description:
              'Un identificador único para el token, útil para prevenir que el mismo token sea utilizado múltiples veces (por ejemplo, en ataques de reproducción).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Dependiendo de la especificación y la configuración del servidor de autorización, pueden incluirse reclamaciones adicionales en la carga útil para soportar casos de uso específicos. También puedes agregar reclamaciones personalizadas a JWT para cumplir con requisitos comerciales únicos.',
        id_token: {
          title: 'Token de ID',
          description:
            'Usado en OpenID Connect, incluye reclamaciones como información de perfil (por ejemplo, nombre, correo electrónico, etc.) sobre el usuario autenticado.',
        },
        access_token: {
          title: 'Token de acceso',
          description:
            'Usado en OAuth 2.0, otorga acceso a recursos específicos o APIs en nombre del usuario o la aplicación.',
        },
      },
      notification: {
        label: 'Precaución',
        description:
          'No almacenes información privada o sensible en las reclamaciones de JWT. Aunque las reclamaciones de JWT están codificadas (usando Base64URL), no están encriptadas. Esto significa que cualquiera con el token puede decodificarlo y ver las reclamaciones, incluso si no puede alterarlo sin invalidar la firma. Usa encriptación u otros métodos seguros para proteger datos sensibles cuando sea necesario.',
      },
    },
    when_to_use: {
      title: '¿Cuándo usar JWT?',
      description: 'Los JWT pueden ser particularmente beneficiosos en los siguientes escenarios:',
      bullets: [
        {
          label: 'Arquitectura de microservicios',
          description: 'Para autenticación sin estado entre múltiples servicios.',
        },
        {
          label: 'Sistemas de inicio de sesión único (SSO)',
          description: 'Permitir el acceso a múltiples aplicaciones con una autenticación.',
        },
        {
          label: 'Aplicaciones móviles',
          description:
            'Mantener eficientemente las sesiones de usuario a través de llamadas a la API.',
        },
        {
          label: 'Aplicaciones de alto tráfico',
          description: 'Reducir la carga de la base de datos en entornos de alto volumen.',
        },
        {
          label: 'Compartición de recursos entre orígenes (CORS)',
          description: 'Simplificar la autenticación entre múltiples dominios.',
        },
        {
          label: 'Arquitecturas sin servidor',
          description:
            'Proporcionando autenticación sin estado donde las sesiones del lado del servidor son desafiantes.',
        },
      ],
    },
    learn_more: 'Aprende más',
  },
  verify_jwt: {
    title: '¿Cómo verificar JWT?',
    subtitle:
      'La integridad de un JWT debe ser verificada para asegurar que su encabezado y carga útil no han sido alterados. A continuación se presentan ejemplos paso a paso para verificar JWTs en entornos de programación populares:',
    ruby_label: 'Verificar JWT en Ruby',
    dotnet_label: 'Verificar JWT en .NET',
    java_label: 'Verificar JWT en Java',
    php_label: 'Verificar JWT en PHP',
    python_label: 'Verificar JWT en Python',
    go_label: 'Verificar JWT en Go',
    nodejs_label: 'Verificar JWT en Node.js',
    rust_label: 'Verificar JWT en Rust',
  },
  related_topics: {
    title: 'Temas relacionados con JWT',
    subtitle:
      'Toda la información que te interesa sobre JWT y una guía paso a paso para verificar JWT en diversos marcos.',
    blogs: {
      jwt_algorithm: {
        title: 'Algoritmos JWT: EC vs. RSA',
        description:
          'Adéntrate en los algoritmos de firma de JWT, como EC y RSA, y aprende cómo elegir el método más seguro y eficiente para tu aplicación.',
      },
      id_token_and_access_token: {
        title: 'Token de ID & Token de Acceso & Token de actualización',
        description:
          '¿Conoces los propósitos específicos de los Tokens de ID, Tokens de Acceso y Tokens de actualización? Comprende sus roles en los procesos de autenticación y autorización desde una perspectiva JWT.',
      },
      custom_jwt_token_claims: {
        title: 'Reclamaciones personalizadas del token JWT',
        description:
          '¿Cómo logra JWT un control de acceso detallado? Compara RBAC (Control de Acceso Basado en Roles) y ABAC (Control de Acceso Basado en Atributos) para encontrar la mejor solución para tu aplicación.',
      },
      opaque_token_vs_jwt: {
        title: 'Token opaco vs. Token JWT',
        description:
          'Explora las diferencias fundamentales entre JWT y Tokens Opacos, y descubre por qué JWT se ha convertido en la elección moderna para autenticación gracias a su alto rendimiento y escalabilidad.',
      },
      api_authorization: {
        title: 'Autorización de API: Claves de API vs. Autenticación básica vs. Tokens OAuth JWT',
        description:
          'Explora tres mecanismos comunes de autorización de API con sus pros y contras. Adéntrate en una práctica recomendada sobre cómo proteger tus APIs usando Tokens OAuth JWT.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Autenticación basada en sesión',
        description:
          'La autenticación basada en sesión depende del almacenamiento del lado del servidor para mantener las sesiones de usuario, mientras que la autenticación basada en tokens permite una comunicación sin estado y escalable entre clientes y servidores. Descubre cómo JWT está revolucionando la seguridad de las API y por qué se está convirtiendo en la elección preferida para la autenticación moderna.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Los términos sofisticados como OAuth, OpenID Connect (OIDC), SAML, SSO y JWT se utilizan frecuentemente en el ámbito de la gestión de identidades y accesos (IAM), pero ¿qué significan? ¿Cómo funcionan juntos?',
      },
    },
  },
  unblock_more_subtitle:
    'Simplifica tu flujo de trabajo y asegura la gestión de usuarios con Logto Cloud. Construido sobre OpenID Connect (OIDC), se apoya en JWT para ofrecer un sistema de autenticación y autorización confiable diseñado para escalar según tus necesidades.',
};

export default Object.freeze(jwt_decoder) satisfies typeof en;
