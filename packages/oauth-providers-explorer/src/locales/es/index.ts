const oauth_providers = {
  title: 'Explorador de Proveedores OAuth y OIDC',
  description:
    'Consulta rápidamente los puntos finales de OAuth y los recursos de desarrollo relacionados para proveedores populares de OAuth y OIDC.',
  hint: 'Toda la información del proveedor proviene de documentos oficiales, con enlaces en cada página para referencia',
  app_title: 'Proveedores de OAuth y OIDC <span>Explorador</span>',
  search_placeholder: 'Busca un proveedor (por ejemplo, GitHub, Google, Facebook)',
  back_to_explorer: 'Volver al Explorador',
  details_title: 'Puntos finales de OAuth de {{name}}',
  details_description: 'Puntos finales de OAuth de {{name}} y recursos de desarrollo relacionados',
  oidc_details_title: 'Puntos finales de OAuth y OIDC de {{name}}',
  oidc_details_description:
    'Puntos finales de OAuth y OIDC de {{name}} y recursos de desarrollo relacionados',
  unknown_details_title: 'Proveedor de OAuth desconocido',
  unknown_details_description: 'Este proveedor de OAuth no es reconocido.',
  documentation_title: 'Documentación y recursos de OAuth de {{name}}',
  oidc_documentation_title: 'Documentación y recursos de OAuth y OIDC de {{name}}',
  authorization_endpoint: 'Punto final de autorización de {{name}}',
  authorization_endpoint_description:
    'El punto final para redirigir a los usuarios con el fin de otorgar acceso a su cuenta a tu aplicación.',
  token_endpoint: 'Punto final de token de {{name}}',
  token_endpoint_description:
    'El punto final para intercambiar el código de autorización o el token de actualización por un token de acceso y un token de actualización.',
  jwks_uri: 'URI de JWKS de {{name}}',
  jwks_uri_description:
    'El URI que proporciona claves públicas para verificar tokens JWT. Estas claves se utilizan para validar la autenticidad de los tokens emitidos por el servidor de autorización.',
  revocation_endpoint: 'Punto final de revocación de {{name}}',
  revocation_endpoint_description:
    'El punto final utilizado para invalidar tokens de acceso o tokens de actualización antes de su tiempo de expiración, generalmente usado cuando un usuario cierra sesión o revoca el acceso de la aplicación.',
  userinfo_endpoint: 'Punto final de información de usuario de {{name}}',
  userinfo_endpoint_description:
    'El punto final estandarizado de OAuth que devuelve la información del perfil de usuario autenticado, incluyendo declaraciones sobre el usuario actual según el alcance del token de acceso.',
  end_session_endpoint: 'Punto final de fin de sesión de {{name}}',
  end_session_endpoint_description:
    'El punto final utilizado para terminar la sesión del usuario en el proveedor de identidad, comúnmente utilizado para implementar la funcionalidad de cierre de sesión único.',
  introspection_endpoint: 'Punto final de introspección de {{name}}',
  introspection_endpoint_description:
    'El punto final que permite a las partes autorizadas verificar el estado y la validez de un token de acceso o un token de actualización, devolviendo metadatos detallados del token.',
  oidc_discovery_endpoint: 'Punto final de descubrimiento de OIDC de {{name}}',
  oidc_discovery_endpoint_description:
    'El punto final bien conocido (.well-known/openid-configuration) que proporciona metadatos de configuración de OpenID Connect, incluyendo todos los puntos finales disponibles y las características soportadas.',
  issuer: 'URL del emisor de {{name}}',
  issuer_description:
    'Una URL de identificador único que identifica al proveedor de OAuth/OIDC y se utiliza para validar tokens',
  provider_not_found: 'Proveedor no encontrado',
  provider_not_found_description:
    'No pudimos encontrar el proveedor de OAuth que estás buscando. Puede que haya sido eliminado o no exista.',
};

export default Object.freeze(oauth_providers);
