import type en from './en';

const fr = {
  topbar: {
    banner_text:
      'Créez et prévisualisez des outils publics dans une app de dev alignée sur le site.',
    banner_link: 'Index des outils',
    developers: 'Développeurs',
    tools: 'Outils',
    language: 'Langue',
    github_star: '9,5k étoiles',
    sign_in: 'Se connecter',
    get_started: 'Commencer',
  },
  home: {
    label: 'Outils développeur',
    title: 'Outils publics.',
    description:
      'Cette app reproduit la zone supérieure du site réel afin que chaque outil puisse être développé et revu dans une coque proche de la production, tout en gardant sa route dédiée.',
    tags: {
      topbar: 'Topbar style Logto',
      routes: 'Routes dédiées par outil',
      i18n: 'Contrat i18n partagé',
    },
    planned: 'Prévu',
    coming_next: 'Bientôt',
    available_now: 'Disponible maintenant',
    open_tool: 'Ouvrir l’outil',
  },
  tools: {
    jwtDecoder: {
      title: 'Décodeur JWT',
      description:
        'Décoder, inspecter, modifier et re-signer des JWT dans un espace aligné sur le site.',
    },
    samlDecoder: {
      title: 'Décodeur d’assertion SAML',
      description: 'Prochaine étape prévue : inspecter les assertions XML avec la même coque.',
    },
    base64Decoder: {
      title: 'Encodeur et décodeur Base64',
      description:
        'Encodez et décodez des données Base64 et Base64URL directement dans le navigateur.',
    },
    oauthProvidersExplorer: {
      title: 'Exploreur de fournisseurs OAuth & OIDC',
      description:
        'Consultez rapidement les points de terminaison OAuth et les ressources de développement associées pour les fournisseurs populaires OAuth & OIDC.',
    },
  },
};

export default fr satisfies typeof en;
