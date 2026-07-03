import type en from './en';

const trTR = {
  topbar: {
    banner_text:
      'Web sitesiyle uyumlu bir geliştirme uygulamasında herkese açık araçlar oluşturun ve önizleyin.',
    banner_link: 'Araç dizini',
    developers: 'Geliştiriciler',
    tools: 'Araçlar',
    language: 'Dil',
    github_star: '9,5k yıldız',
    sign_in: 'Giriş yap',
    get_started: 'Başlayın',
  },
  home: {
    label: 'Geliştirici araçları',
    title: 'Herkese açık araçlar.',
    description:
      'Bu uygulama gerçek web sitesinin üst alanını yansıtır; böylece her araç, kendine ait rota sayfasını korurken üretime yakın bir kabukta geliştirilebilir ve gözden geçirilebilir.',
    tags: {
      topbar: 'Logto tarzı üst çubuk',
      routes: 'Özel araç rotaları',
      i18n: 'Paylaşılan i18n sözleşmesi',
    },
    planned: 'Planlandı',
    coming_next: 'Sıradaki',
    available_now: 'Şimdi kullanılabilir',
    open_tool: 'Aracı aç',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT çözücü',
      description:
        'Web sitesiyle uyumlu bir çalışma alanında JWT’leri çözün, inceleyin, düzenleyin ve yeniden imzalayın.',
    },
    samlDecoder: {
      title: 'SAML assertion çözücü',
      description: 'Sonraki plan: Aynı araç kabuğunda XML assertion’larını incelemek.',
    },
    base64Decoder: {
      title: 'Base64 kodlayıcı ve çözücü',
      description: 'Base64 ve Base64URL verilerini doğrudan tarayıcıda kodlayın ve çözün.',
    },
    oauthProvidersExplorer: {
      title: 'OAuth ve OIDC Sağlayıcıları Gezgini',
      description:
        'Popüler OAuth ve OIDC sağlayıcıları için OAuth uç noktalarını ve ilgili geliştirme kaynaklarını hızlıca arayın.',
    },
  },
};

export default trTR satisfies typeof en;
