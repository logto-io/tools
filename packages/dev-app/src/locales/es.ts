import type en from './en';

const es = {
  topbar: {
    banner_text:
      'Crea y prueba herramientas públicas en una app de desarrollo alineada con el sitio web.',
    banner_link: 'Índice de herramientas',
    developers: 'Desarrolladores',
    tools: 'Herramientas',
    language: 'Idioma',
    github_star: '9.5k estrellas',
    sign_in: 'Iniciar sesión',
    get_started: 'Comenzar',
  },
  home: {
    label: 'Herramientas para desarrolladores',
    title: 'Herramientas públicas.',
    description:
      'Esta app refleja la zona superior real del sitio para que cada herramienta pueda desarrollarse y revisarse en un entorno similar a producción, manteniendo su ruta dedicada.',
    tags: {
      topbar: 'Barra superior estilo Logto',
      routes: 'Rutas dedicadas por herramienta',
      i18n: 'Contrato i18n compartido',
    },
    planned: 'Planificado',
    coming_next: 'Próximamente',
    available_now: 'Disponible ahora',
    open_tool: 'Abrir herramienta',
  },
  tools: {
    jwtDecoder: {
      title: 'Decodificador JWT',
      description:
        'Decodifica, inspecciona, edita y vuelve a firmar JWT en un espacio alineado con el sitio web.',
    },
    samlDecoder: {
      title: 'Decodificador de aserciones SAML',
      description: 'Siguiente paso planificado: inspeccionar aserciones XML con la misma shell.',
    },
    base64Decoder: {
      title: 'Codificador y decodificador Base64',
      description: 'Codifica y decodifica datos Base64 y Base64URL directamente en el navegador.',
    },
  },
};

export default es satisfies typeof en;
