const jwt_decoder = {
  title:
    'Decodificador e codificador JWT (JWT decoder & encoder) | Seguro, simples e fácil de usar',
  description:
    'Decodifica e codifica rapidamente JWTs online e verifica as suas assinaturas. Explora exemplos de JWTs usando diferentes algoritmos, juntamente com guias passo a passo para a implementação de JWTs.',
  encoder: 'Codificador',
  decoder: 'Descodificador',
  subtitle:
    'Os teus dados são 100% privados -- o JWT é totalmente descodificado e codificado diretamente no teu dispositivo.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'JWT codificado',
  decoded_header_label: 'Cabeçalho descodificado',
  header_label: 'Cabeçalho',
  decoded_payload_label: 'Carga útil descodificada',
  payload_label: 'Carga útil',
  signature_verified: 'Assinatura verificada!',
  invalid_signature: 'Assinatura inválida!',
  jwt_editor_placeholder: 'Cola o teu JWT aqui',
  hmac_secret_placeholder: 'Introduz a chave HMAC',
  public_key_placeholder: 'Introduz a chave pública aqui',
  private_key_placeholder: 'Introduz a chave privada aqui',
  jwks_endpoint_uri_placeholder: 'Introduz o URL do endpoint JWKs',
  hmac_secret_label: 'Chave de assinatura',
  jwks_endpoint_uri_label: 'URI do endpoint JWKs',
  public_key_label: 'Chave pública',
  private_key_label: 'Chave privada',
  base64_encoded_label: 'Codificado em Base64',
  jwks_endpoint_uri_link: 'URI do endpoint JWKs',
  public_key_link: 'Verificar via chave pública',
  jwt_examples: 'Exemplos de JWT',
  share_jwt: 'Partilhar JWT',
  copy_to_clipboard: 'URL copiado para a área de transferência',
  instruction: {
    title: 'Aprender sobre JWT',
    subtitle:
      'Toda a informação que te preocupa sobre JWT e guia passo-a-passo para verificar JWT em diversos frameworks.',
    what_is_jwt: {
      title: 'O que é JWT?',
      description:
        'JWT (JSON Web Token) é um token auto-contido e sem estado que transporta informações num formato estruturado e legível. Se estás a proteger uma API ou a adotar autenticação baseada em token para a tua aplicação, os JWTs são uma ferramenta poderosa, porque:',
      bullets: [
        {
          label: 'Sem estado',
          description:
            'Os JWTs são auto-contidos e não requerem estado do lado do servidor para validar. O JWT pode garantir a integridade dos dados através de assinaturas.',
        },
        {
          label: 'Compatibilidade entre serviços',
          description:
            'Os JWTs podem ser facilmente partilhados e verificados entre diferentes serviços.',
        },
        {
          label: 'Extensível',
          description:
            'A carga útil de um JWT pode conter reivindicações personalizadas, permitindo autorização flexível e partilha de informações.',
        },
      ],
    },
    jwt_structure: {
      title: 'A estrutura do JWT',
      description:
        'Um JWT típico é dividido em três partes, cada uma codificada em Base64URL e separada por pontos (.):',
      bullets: [
        {
          label: 'Cabeçalho',
          description:
            'Contém metadados, como o algoritmo de assinatura (por exemplo, HS256 ou RS256) e o tipo de token (JWT).',
        },
        {
          label: 'Carga útil',
          description:
            'Contém os dados reais, como o ID do utilizador, perfil do utilizador, tempo de expiração ou escopos.',
        },
        {
          label: 'Assinatura',
          description:
            'Uma combinação hash do Cabeçalho, Carga útil, e segura usando uma chave secreta. O seu propósito é assegurar a integridade do token e confirmar que não foi alterado.',
        },
      ],
      summary:
        'Esta estrutura permite que os JWTs forneçam uma forma compacta e segura de transmitir informações entre partes.',
    },
    token_claims: {
      title: 'Reivindicações comuns de token em JWT',
      description:
        'As reivindicações fazem parte da carga útil e contêm a informação chave. Aqui estão as Reivindicações Registadas padronizadas para tua referência:',
      table: {
        headers: ['Reivindicações', 'Nome completo', 'Descrição'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Emissor',
            description: 'A entidade que emitiu o JWT, como o servidor de autorização.',
          },
          {
            claim: 'sub',
            full_name: 'Sujeito',
            description:
              'Identifica o sujeito do JWT, tipicamente representando o utilizador autenticado.',
          },
          {
            claim: 'aud',
            full_name: 'Audiência',
            description:
              'Especifica quais destinatários podem aceitar e processar o token. Isto pode ser um array de valores para múltiplas audiências ou um único valor para um único destinatário.',
          },
          {
            claim: 'exp',
            full_name: 'Tempo de Expiração',
            description:
              'Define um tempo de expiração no token após o qual se torna inválido. Isto ajuda a prevenir ataques de repetição limitando o tempo que um token permanece válido.',
          },
          {
            claim: 'nbf',
            full_name: 'Não Antes',
            description:
              'Torna um token válido apenas após este carimbo de data/hora. Útil em situações onde os relógios não são acessíveis.',
          },
          {
            claim: 'iat',
            full_name: 'Emitido Em',
            description:
              'Quando o token foi criado. Isto pode ser usado para determinar a idade do token.',
          },
          {
            claim: 'jti',
            full_name: 'ID do JWT',
            description:
              'Um identificador único para o token, útil para prevenir que o mesmo token seja usado múltiplas vezes (por exemplo, em ataques de repetição).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Dependendo da especificação e da configuração do servidor de autorização, reivindicações adicionais podem ser incluídas na carga útil para suportar casos de uso específicos. Também podes adicionar reivindicações personalizadas ao JWT para atender a requisitos empresariais únicos.',
        id_token: {
          title: 'ID Token',
          description:
            'Usado em OpenID Connect, inclui reivindicações como informação de perfil (por exemplo, nome, e-mail, etc.) sobre o utilizador autenticado.',
        },
        access_token: {
          title: 'Token de Acesso',
          description:
            'Usado em OAuth 2.0, concede acesso a recursos ou APIs específicos em nome do utilizador ou aplicação.',
        },
      },
      notification: {
        label: 'Atenção',
        description:
          'Não armazene informações privadas ou sensíveis nas reivindicações do JWT. Embora as reivindicações do JWT sejam codificadas (usando Base64URL), não são encriptadas. Isso significa que qualquer pessoa com o token pode descodificá-lo e visualizar as reivindicações, mesmo que não possa alterá-lo sem invalidar a assinatura. Use encriptação ou outros métodos seguros para proteger dados sensíveis quando necessário.',
      },
    },
    when_to_use: {
      title: 'Quando usar JWT?',
      description: 'Os JWTs podem ser particularmente benéficos nos seguintes cenários:',
      bullets: [
        {
          label: 'Arquitetura de microserviços',
          description: 'Para autenticação sem estado entre múltiplos serviços.',
        },
        {
          label: 'Sistemas de sign-on único (SSO)',
          description: 'Possibilitando acesso a múltiplas aplicações com uma autenticação.',
        },
        {
          label: 'Aplicações móveis',
          description: 'Manter eficientemente as sessões de utilizador através de chamadas de API.',
        },
        {
          label: 'Aplicações de alto tráfego',
          description: 'Reduzir a carga no banco de dados em ambientes de alto volume.',
        },
        {
          label: 'Partilha de recursos entre origens diferentes (CORS)',
          description: 'Simplificar a autenticação entre múltiplos domínios.',
        },
        {
          label: 'Arquiteturas sem servidor',
          description:
            'Fornecer autenticação sem estado onde sessões do lado do servidor são desafiadoras.',
        },
      ],
    },
    learn_more: 'Saiba mais',
  },
  verify_jwt: {
    title: 'Como verificar JWT?',
    subtitle:
      'A integridade de um JWT deve ser verificada para garantir que o seu cabeçalho e carga útil não foram adulterados. Abaixo estão exemplos passo-a-passo para verificar JWTs em ambientes de programação populares:',
    ruby_label: 'Verificar JWT em Ruby',
    dotnet_label: 'Verificar JWT em .NET',
    java_label: 'Verificar JWT em Java',
    php_label: 'Verificar JWT em PHP',
    python_label: 'Verificar JWT em Python',
    go_label: 'Verificar JWT em Go',
    nodejs_label: 'Verificar JWT em Node.js',
    rust_label: 'Verificar JWT em Rust',
  },
  related_topics: {
    title: 'Tópicos relacionados com JWT',
    subtitle:
      'Toda a informação que te preocupa sobre JWT e guia passo-a-passo para verificar JWT em diversos frameworks.',
    blogs: {
      jwt_algorithm: {
        title: 'Algoritmos de JWT: EC vs. RSA',
        description:
          'Explore os algoritmos de assinatura do JWT, como EC e RSA, e aprenda a escolher o método mais seguro e eficiente para a tua aplicação.',
      },
      id_token_and_access_token: {
        title: 'Token de ID & Token de Acesso & Token de Atualização',
        description:
          'Conheces os propósitos específicos dos Tokens de ID, Tokens de Acesso e Tokens de Atualização? Compreende os seus papéis nos processos de autenticação e autorização a partir de uma perspetiva de JWT.',
      },
      custom_jwt_token_claims: {
        title: 'Reivindicações de JWT personalizadas',
        description:
          'Como é que o JWT alcança um controle de acesso detalhado? Compare RBAC (Controle de Acesso Baseado em Funções) e ABAC (Controle de Acesso Baseado em Atributos) para encontrar a melhor solução para a tua aplicação.',
      },
      opaque_token_vs_jwt: {
        title: 'Token opaco vs. Token JWT',
        description:
          'Explore as diferenças fundamentais entre JWT e Tokens Opaques, e descubra por que o JWT se tornou a escolha moderna para autenticação com seu alto desempenho e escalabilidade.',
      },
      api_authorization: {
        title: 'Autorização de API: Chaves de API vs. Autenticação Básica vs. Tokens OAuth JWT',
        description:
          'Explorar três mecanismos comuns de autorização de API com os seus prós e contras. Mergulhe numa prática recomendada sobre como proteger as suas APIs usando tokens OAuth JWT.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Autenticação de Sessão',
        description:
          'A autenticação baseada em sessão depende de armazenamento do lado do servidor para manter sessões de utilizador, enquanto a autenticação baseada em token permite comunicação sem estado e escalável entre clientes e servidores. Descobre como o JWT está a revolucionar a segurança de API e por que está a tornar-se a escolha preferida para autenticação moderna.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Os termos sofisticados como OAuth, OpenID Connect (OIDC), SAML, SSO, e JWT são frequentemente usados no domínio de gestão de identidade e acesso (IAM), mas o que significam? Como funcionam juntos?',
      },
    },
  },
  unblock_more_subtitle:
    'Simplifica o teu fluxo de trabalho e garante uma gestão de utilizadores segura com Logto Cloud. Construído sobre OpenID Connect (OIDC), utiliza JWT para fornecer um sistema de autenticação e autorização fiável, projetado para escalar com as tuas necessidades.',
};

export default Object.freeze(jwt_decoder);
