const oauth_providers = {
  title: 'Проводник по поставщикам OAuth и OIDC',
  description:
    'Быстрый поиск конечных точек OAuth и связанных ресурсов разработки для популярных поставщиков OAuth и OIDC.',
  hint: 'Вся информация о поставщиках взята из официальной документации, на каждой странице есть ссылки для справки',
  app_title: 'Проводник по поставщикам <span>OAuth и OIDC</span>',
  search_placeholder: 'Поиск поставщика (например, GitHub, Google, Facebook)',
  clear_search: 'Очистить поиск',
  copy: 'Копировать',
  copied: 'Скопировано в буфер обмена',
  back_to_explorer: 'Назад к проводнику',
  details_title: 'Конечные точки OAuth для {{name}}',
  details_description: 'Конечные точки OAuth для {{name}} и связанные ресурсы разработки',
  oidc_details_title: 'Конечные точки OAuth и OIDC для {{name}}',
  oidc_details_description:
    'Конечные точки OAuth и OIDC для {{name}} и связанные ресурсы разработки',
  unknown_details_title: 'Неизвестный поставщик OAuth',
  unknown_details_description: 'Этот поставщик OAuth не распознан.',
  documentation_title: 'Документация и ресурсы OAuth для {{name}}',
  oidc_documentation_title: 'Документация и ресурсы OAuth и OIDC для {{name}}',
  authorization_endpoint: 'Конечная точка авторизации {{name}}',
  authorization_endpoint_description:
    'Конечная точка для переадресации пользователей, чтобы предоставить вашему приложению доступ к их аккаунту.',
  token_endpoint: 'Конечная точка токенов {{name}}',
  token_endpoint_description:
    'Конечная точка для обмена кода авторизации или токена обновления на токен доступа и токен обновления.',
  jwks_uri: 'URI JWKS для {{name}}',
  jwks_uri_description:
    'URI, предоставляющий открытые ключи для проверки JWT токенов. Эти ключи используются для проверки аутентичности токенов, выпущенных сервером авторизации.',
  revocation_endpoint: 'Конечная точка аннулирования {{name}}',
  revocation_endpoint_description:
    'Конечная точка, используемая для аннулирования токенов доступа или токенов обновления до истечения их срока действия. Обычно используется, когда пользователь выходит из системы или отзывает доступ приложения.',
  userinfo_endpoint: 'Конечная точка информации о пользователе {{name}}',
  userinfo_endpoint_description:
    'Стандартизированная конечная точка OAuth, возвращающая информацию о профиле аутентифицированного пользователя, включая утверждения о текущем пользователе на основе области действия токена доступа.',
  end_session_endpoint: 'Конечная точка завершения сеанса {{name}}',
  end_session_endpoint_description:
    'Конечная точка для завершения сеанса пользователя у поставщика удостоверений, обычно используется для реализации функции единого выхода.',
  introspection_endpoint: 'Конечная точка инспекции {{name}}',
  introspection_endpoint_description:
    'Конечная точка, которая позволяет авторизованным сторонам проверять состояние и действительность токена доступа или токена обновления, возвращая подробные метаданные токена.',
  oidc_discovery_endpoint: 'Конечная точка обнаружения OIDC для {{name}}',
  oidc_discovery_endpoint_description:
    'Хорошо известная конечная точка (.well-known/openid-configuration), предоставляющая метаданные конфигурации OpenID Connect, включая все доступные конечные точки и поддерживаемые функции.',
  issuer: 'URL издателя {{name}}',
  issuer_description:
    'Уникальный идентификатор URL, который определяет поставщика OAuth/OIDC и используется для проверки токенов',
  provider_not_found: 'Поставщик не найден',
  provider_not_found_description:
    'Мы не смогли найти поставщика OAuth, которого вы ищете. Возможно, он был удален или не существует.',
};

export default Object.freeze(oauth_providers);
