const oauth_providers = {
  title: 'OAuth ve OIDC Sağlayıcıları Gezgini',
  description:
    'Popüler OAuth ve OIDC sağlayıcıları için OAuth uç noktalarını ve ilgili geliştirme kaynaklarını hızlıca arayın.',
  hint: 'Tüm sağlayıcı bilgileri resmi belgelerden alınmıştır ve her sayfada referans için bağlantılar bulunmaktadır',
  app_title: 'OAuth ve OIDC Sağlayıcıları <span>Gezgini</span>',
  search_placeholder: 'Bir sağlayıcı ara (örn., GitHub, Google, Facebook)',
  back_to_explorer: 'Gezgine Geri Dön',
  details_title: '{{name}} OAuth uç noktaları',
  details_description: '{{name}} OAuth uç noktaları ve ilgili geliştirme kaynakları',
  oidc_details_title: '{{name}} OAuth ve OIDC uç noktaları',
  oidc_details_description: '{{name}} OAuth ve OIDC uç noktaları ve ilgili geliştirme kaynakları',
  unknown_details_title: 'Bilinmeyen OAuth sağlayıcısı',
  unknown_details_description: 'Bu OAuth sağlayıcısı tanınmıyor.',
  documentation_title: '{{name}} OAuth dokümantasyon ve kaynaklar',
  oidc_documentation_title: '{{name}} OAuth ve OIDC dokümantasyon ve kaynaklar',
  authorization_endpoint: '{{name}} yetkilendirme uç noktası',
  authorization_endpoint_description:
    'Kullanıcıların hesaplarına erişim vermek için uygulamanızı yönlendirebileceğiniz uç nokta.',
  token_endpoint: '{{name}} token uç noktası',
  token_endpoint_description:
    "Yetkilendirme kodu veya yenileme token'ini bir erişim token'i ve bir yenileme token'i ile değiştireceğiniz uç nokta.",
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'JWT tokenlerini doğrulamak için kullanılan ortak anahtarları sağlayan URI. Bu anahtarlar, yetkilendirme sunucusu tarafından verilen tokenlerin doğruluğunu teyit etmek için kullanılır.',
  revocation_endpoint: '{{name}} iptal uç noktası',
  revocation_endpoint_description:
    'Erişim tokenlerini veya yenileme tokenlerini, genellikle bir kullanıcı oturum kapattığında veya uygulama erişimini iptal ettiğinde, son kullanma sürelerinden önce geçersiz kılmak için kullanılan uç nokta.',
  userinfo_endpoint: '{{name}} kullanıcı bilgisi uç noktası',
  userinfo_endpoint_description:
    'OAuth tarafından doğrulanmış kullanıcı profili bilgilerini döndüren standart uç nokta, erişim tokeninin kapsamına dayanan mevcut kullanıcı hakkında iddiaları içerir.',
  end_session_endpoint: '{{name}} oturum sonlandırma uç noktası',
  end_session_endpoint_description:
    'Kullanıcının kimlik sağlayıcısındaki oturumunu sonlandırmak için kullanılan uç nokta, genellikle tekli oturum kapatma işlevselliğini uygulamak için kullanılır.',
  introspection_endpoint: '{{name}} değerlendirme uç noktası',
  introspection_endpoint_description:
    'Yetkili tarafların bir erişim tokeni veya yenileme tokeninin durumunu ve geçerliliğini kontrol etmelerine olanak tanıyan uç nokta, detaylı token meta verileri döndürür.',
  oidc_discovery_endpoint: '{{name}} OIDC keşif uç noktası',
  oidc_discovery_endpoint_description:
    'OpenID Connect yapılandırma meta verilerini sağlayan iyi bilinen uç nokta (.well-known/openid-configuration), mevcut tüm uç noktaları ve desteklenen özellikleri içerir.',
  issuer: '{{name}} issuer URL',
  issuer_description:
    'OAuth/OIDC sağlayıcısını tanımlayan ve tokenleri doğrulamak için kullanılan benzersiz bir tanımlayıcı URL',
  provider_not_found: 'Sağlayıcı bulunamadı',
  provider_not_found_description:
    'Aradığınız OAuth sağlayıcısını bulamadık. Kaldırılmış olabilir veya mevcut değil.',
};

export default Object.freeze(oauth_providers);
