import type en from './en';

const ptPT = {
  topbar: {
    banner_text:
      'Crie e pré-visualize ferramentas públicas numa app de desenvolvimento alinhada com o site.',
    banner_link: 'Índice de ferramentas',
    developers: 'Programadores',
    tools: 'Ferramentas',
    language: 'Idioma',
    github_star: '9,5 mil estrelas',
    sign_in: 'Iniciar sessão',
    get_started: 'Começar',
  },
  home: {
    label: 'Ferramentas de programador',
    title: 'Ferramentas públicas.',
    description:
      'Esta app replica a área superior do site real para que cada ferramenta possa ser desenvolvida e revista numa shell próxima da produção, mantendo a sua rota dedicada.',
    tags: {
      topbar: 'Topbar ao estilo Logto',
      routes: 'Rotas dedicadas por ferramenta',
      i18n: 'Contrato i18n partilhado',
    },
    planned: 'Planeado',
    coming_next: 'Em breve',
    available_now: 'Disponível agora',
    open_tool: 'Abrir ferramenta',
  },
  tools: {
    jwtDecoder: {
      title: 'Descodificador JWT',
      description:
        'Descodifique, inspecione, edite e volte a assinar JWTs num workspace alinhado com o site.',
    },
    samlDecoder: {
      title: 'Descodificador de asserções SAML',
      description: 'Próximo passo: inspecionar asserções XML na mesma shell de ferramentas.',
    },
    base64Decoder: {
      title: 'Codificador e descodificador Base64',
      description: 'Codifique e descodifique dados Base64 e Base64URL diretamente no navegador.',
    },
  },
};

export default ptPT satisfies typeof en;
