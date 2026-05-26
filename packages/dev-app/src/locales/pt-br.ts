import type en from './en';

const ptBR = {
  topbar: {
    banner_text:
      'Crie e visualize ferramentas públicas em um app de desenvolvimento alinhado ao site.',
    banner_link: 'Índice de ferramentas',
    developers: 'Desenvolvedores',
    tools: 'Ferramentas',
    language: 'Idioma',
    github_star: '9,5 mil estrelas',
    sign_in: 'Entrar',
    get_started: 'Começar',
  },
  home: {
    label: 'Ferramentas de desenvolvedor',
    title: 'Ferramentas públicas.',
    description:
      'Este app espelha a área superior do site real para que cada ferramenta possa ser desenvolvida e revisada em uma shell semelhante à produção, mantendo sua própria rota dedicada.',
    tags: {
      topbar: 'Topbar estilo Logto',
      routes: 'Rotas dedicadas por ferramenta',
      i18n: 'Contrato i18n compartilhado',
    },
    planned: 'Planejado',
    coming_next: 'Em breve',
    available_now: 'Disponível agora',
    open_tool: 'Abrir ferramenta',
  },
  tools: {
    jwtDecoder: {
      title: 'Decodificador JWT',
      description:
        'Decodifique, inspecione, edite e assine novamente JWTs em um workspace alinhado ao site.',
    },
    samlDecoder: {
      title: 'Decodificador de asserção SAML',
      description: 'Próximo passo: inspecionar asserções XML com a mesma shell de ferramentas.',
    },
    base64Decoder: {
      title: 'Codificador e decodificador Base64',
      description: 'Codifique e decodifique dados Base64 e Base64URL diretamente no navegador.',
    },
  },
};

export default ptBR satisfies typeof en;
