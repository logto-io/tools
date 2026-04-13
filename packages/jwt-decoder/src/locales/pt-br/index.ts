import type en from '../en';

const jwt_decoder = {
  title:
    'Decodificador e codificador JWT (JWT decoder & encoder) | Seguro, simples e fácil de usar',
  description:
    'Decodifique e codifique rapidamente JWTs online e verifique suas assinaturas. Explore exemplos de JWT usando diferentes algoritmos, juntamente com guias de implementação passo a passo de JWT.',
  encoder: 'Codificador',
  decoder: 'Decodificador',
  subtitle:
    'Seus dados são 100% privados -- JWT é totalmente decodificado e codificado diretamente no seu dispositivo.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'JWT codificado',
  decoded_header_label: 'Cabeçalho decodificado',
  header_label: 'Cabeçalho',
  decoded_payload_label: 'Payload decodificado',
  payload_label: 'Payload',
  signature_verified: 'Assinatura verificada!',
  invalid_signature: 'Assinatura inválida!',
  jwt_editor_placeholder: 'Cole seu JWT aqui',
  hmac_secret_placeholder: 'Digite a chave secreta HMAC',
  public_key_placeholder: 'Insira a chave pública aqui',
  private_key_placeholder: 'Insira a chave privada aqui',
  jwks_endpoint_uri_placeholder: 'Digite o URL do endpoint JWKs',
  hmac_secret_label: 'Chave de assinatura',
  jwks_endpoint_uri_label: 'URI do endpoint JWKs',
  public_key_label: 'Chave pública',
  private_key_label: 'Chave privada',
  base64_encoded_label: 'Codificado em Base64',
  jwks_endpoint_uri_link: 'URI do endpoint JWKs',
  public_key_link: 'Verificar via chave pública',
  jwt_examples: 'Exemplos de JWT',
  share_jwt: 'Compartilhar JWT',
  copy_to_clipboard: 'URL copiado para a área de transferência',
  instruction: {
    title: 'Aprenda sobre JWT',
    subtitle:
      'Todas as informações que você precisa sobre JWT e um guia passo a passo para verificar JWT em diversas estruturas.',
    what_is_jwt: {
      title: 'O que é JWT?',
      description:
        'JWT (JSON Web Token) é um token autônomo e sem estado que carrega informações em um formato estruturado e legível. Quer você esteja protegendo uma API ou adotando autenticação baseada em tokens para seu aplicativo, os JWTs são uma ferramenta poderosa, porque eles:',
      bullets: [
        {
          label: 'Sem estado',
          description:
            'Os JWTs são autônomos e não exigem estado do lado do servidor para validar. JWT pode garantir a integridade dos dados por meio de assinaturas.',
        },
        {
          label: 'Compatibilidade entre serviços',
          description:
            'Os JWTs podem ser facilmente compartilhados e verificados entre diferentes serviços.',
        },
        {
          label: 'Extensível',
          description:
            'O payload de um JWT pode conter claims personalizadas, permitindo autorização flexível e compartilhamento de informações.',
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
          label: 'Payload',
          description:
            'Contém os dados reais, como ID de usuário, perfil de usuário, tempo de expiração ou escopos.',
        },
        {
          label: 'Assinatura',
          description:
            'Uma combinação de hash do Cabeçalho, Payload e protegida usando uma chave secreta. Seu propósito é garantir a integridade do token e confirmar que não foi alterado',
        },
      ],
      summary:
        'Essa estrutura permite que os JWTs forneçam uma maneira compacta e segura de transmitir informações entre partes.',
    },
    token_claims: {
      title: 'Claims comuns em tokens JWT',
      description:
        'Os claims fazem parte do payload e contêm as informações principais. Aqui estão os Claims Registrados padronizados para sua referência:',
      table: {
        headers: ['Claims', 'Nome completo', 'Descrição'],
        rows: [
          {
            claim: 'iss',
            full_name: 'Emissor',
            description: 'A entidade que emitiu o JWT, como o servidor de autorização.',
          },
          {
            claim: 'sub',
            full_name: 'Assunto',
            description:
              'Identifica o sujeito do JWT, geralmente representando o usuário autenticado.',
          },
          {
            claim: 'aud',
            full_name: 'Audiência',
            description:
              'Especifica quais destinatários podem aceitar e processar o token. Isso pode ser um array de valores para múltiplas audiências ou um único valor para um único destinatário.',
          },
          {
            claim: 'exp',
            full_name: 'Tempo de Expiração',
            description:
              'Define um tempo de expiração no token após o qual ele se torna inválido. Isso ajuda a prevenir ataques de repetição, limitando o tempo de validade do token.',
          },
          {
            claim: 'nbf',
            full_name: 'Não Antes',
            description:
              'Torna o token válido apenas após este timestamp. Útil em situações onde relógios não são acessíveis.',
          },
          {
            claim: 'iat',
            full_name: 'Emitido Em',
            description:
              'Quando o token foi criado. Isso pode ser usado para determinar a idade do token.',
          },
          {
            claim: 'jti',
            full_name: 'ID JWT',
            description:
              'Um identificador único para o token, útil para evitar que o mesmo token seja utilizado várias vezes (por exemplo, em ataques de repetição).',
          },
        ],
      },
      other_token_claims: {
        description:
          'Dependendo da especificação e da configuração do servidor de autorização, claims adicionais podem ser incluídas no payload para suportar casos de uso específicos. Você também pode adicionar claims personalizadas ao JWT para atender requisitos de negócio únicos.',
        id_token: {
          title: 'Token de ID',
          description:
            'Usado no OpenID Connect, inclui claims com informações de perfil (por exemplo, nome, e-mail, etc.) sobre o usuário autenticado.',
        },
        access_token: {
          title: 'Token de Acesso',
          description:
            'Usado no OAuth 2.0, concede acesso a recursos ou APIs específicos em nome do usuário ou aplicativo.',
        },
      },
      notification: {
        label: 'Cuidado',
        description:
          'Não armazene informações privadas ou sensíveis em claims de JWT. Embora os claims de JWT sejam codificados (usando Base64URL), eles não são criptografados. Isso significa que qualquer pessoa com o token pode decodificá-lo e visualizar os claims, mesmo que não possa alterá-los sem invalidar a assinatura. Use criptografia ou outros métodos seguros para proteger dados sensíveis quando necessário.',
      },
    },
    when_to_use: {
      title: 'Quando usar JWT?',
      description: 'Os JWTs podem ser particularmente benéficos nos seguintes cenários:',
      bullets: [
        {
          label: 'Arquitetura de microsserviços',
          description: 'Para autenticação sem estado entre múltiplos serviços.',
        },
        {
          label: 'Sistemas de Single Sign-On (SSO)',
          description: 'Permite acesso a várias aplicações com uma única autenticação.',
        },
        {
          label: 'Aplicativos móveis',
          description: 'Mantém sessões de usuário de forma eficiente durante chamadas de API.',
        },
        {
          label: 'Aplicações de alto tráfego',
          description: 'Reduz a carga no banco de dados em ambientes de alto volume.',
        },
        {
          label: 'Compartilhamento de recursos entre origens (CORS)',
          description: 'Simplifica a autenticação entre múltiplos domínios.',
        },
        {
          label: 'Arquiteturas serverless',
          description:
            'Fornece autenticação sem estado onde sessões do lado do servidor são desafiadoras.',
        },
      ],
    },
    learn_more: 'Saiba mais',
  },
  verify_jwt: {
    title: 'Como verificar JWT?',
    subtitle:
      'A integridade de um JWT deve ser verificada para garantir que seu cabeçalho e payload não foram adulterados. Abaixo estão exemplos passo a passo para verificar JWTs em ambientes de programação populares:',
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
    title: 'Tópicos relacionados a JWT',
    subtitle:
      'Todas as informações que você precisa sobre JWT e um guia passo a passo para verificar JWT em diversas estruturas.',
    blogs: {
      jwt_algorithm: {
        title: 'Algoritmos JWT: EC vs. RSA',
        description:
          'Mergulhe nos algoritmos de assinatura do JWT, como EC e RSA, e saiba como escolher o método mais seguro e eficiente para sua aplicação.',
      },
      id_token_and_access_token: {
        title: 'Token de ID & Token de Acesso & Token de Atualização',
        description:
          'Você conhece os propósitos específicos dos ID Tokens, Access Tokens e Refresh tokens? Compreenda seus papéis nos processos de autenticação e autorização a partir da perspectiva do JWT.',
      },
      custom_jwt_token_claims: {
        title: 'Claims personalizadas em tokens JWT',
        description:
          'Como o JWT consegue controle de acesso detalhado? Compare RBAC (Controle de Acesso Baseado em Funções) e ABAC (Controle de Acesso Baseado em Atributos) para encontrar a melhor solução para sua aplicação.',
      },
      opaque_token_vs_jwt: {
        title: 'Token opaco vs. Token JWT',
        description:
          'Explore as principais diferenças entre JWT e Tokens Opacos e descubra por que o JWT se tornou a escolha moderna para autenticação, com seu alto desempenho e escalabilidade.',
      },
      api_authorization: {
        title: 'Autorização de API: Chaves de API vs. Autenticação Básica vs. Tokens JWT OAuth',
        description:
          'Explore três mecanismos comuns de autorização de API com seus prós e contras. Mergulhe em uma prática recomendada para proteger suas APIs usando Tokens JWT OAuth.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Autenticação baseada em sessão',
        description:
          'A autenticação baseada em sessão depende do armazenamento do lado do servidor para manter sessões de usuário, enquanto a autenticação baseada em tokens permite comunicação sem estado e escalável entre clientes e servidores. Descubra como o JWT está revolucionando a segurança de APIs e por que se tornou a escolha preferida para autenticação moderna.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'Os termos sofisticados como OAuth, OpenID Connect (OIDC), SAML, SSO e JWT são frequentemente usados no domínio de gerenciamento de identidade e acesso (IAM), mas o que eles significam? Como eles funcionam juntos?',
      },
    },
  },
  unblock_more_subtitle:
    'Simplifique seu fluxo de trabalho e garanta uma gestão segura de usuários com o Logto Cloud. Construído sobre o OpenID Connect (OIDC), ele utiliza JWT para entregar um sistema de autenticação e autorização confiável, projetado para escalar com suas necessidades.',
};

export default Object.freeze(jwt_decoder) satisfies typeof en;
