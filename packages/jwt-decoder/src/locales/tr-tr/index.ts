const jwt_decoder = {
  title: 'JWT kod çözücü ve kodlayıcı (JWT decoder & encoder) | Güvenli, basit ve kullanıcı dostu',
  description:
    "JWT'leri çevrimiçi olarak hızla dekode edin ve kodlayın, ve imzalarını doğrulayın. Farklı algoritmalar kullanarak JWT örneklerini keşfedin ve adım adım JWT uygulama kılavuzlarına göz atın.",
  encoder: 'Kodlayıcı',
  decoder: 'Kod çözücü',
  subtitle: 'Verileriniz %100 özeldir -- JWT tamamen cihazınızda dekode edilir ve encode edilir.',
  jwt_label: 'JWT',
  encoded_jwt_label: 'Kodlanmış JWT',
  decoded_header_label: 'Dekode edilmiş başlık',
  header_label: 'Başlık',
  decoded_payload_label: 'Dekode edilmiş yük',
  payload_label: 'Yük',
  signature_verified: 'İmza doğrulandı!',
  invalid_signature: 'Geçersiz İmza!',
  jwt_editor_placeholder: "JWT'yi buraya yapıştırın",
  hmac_secret_placeholder: 'HMAC gizli anahtarını girin',
  public_key_placeholder: 'Buraya genel anahtarı girin',
  private_key_placeholder: 'Buraya özel anahtarı girin',
  jwks_endpoint_uri_placeholder: "JWKs uç birim URL'sini girin",
  hmac_secret_label: 'İmza anahtarı',
  jwks_endpoint_uri_label: 'JWKs uç birim URI',
  public_key_label: 'Genel anahtar',
  private_key_label: 'Özel anahtar',
  base64_encoded_label: 'Base64 kodlanmış',
  jwks_endpoint_uri_link: 'JWKs uç birim URI',
  public_key_link: 'Genel anahtar ile doğrulama',
  jwt_examples: 'JWT örnekleri',
  share_jwt: 'JWT Paylaş',
  copy_to_clipboard: 'URL panoya kopyalandı',
  instruction: {
    title: 'JWT hakkında bilgi edinin',
    subtitle:
      "JWT ile ilgili tüm bilgileri ve çeşitli çerçevelerde JWT'yi doğrulamak için adım adım kılavuzu içerir.",
    what_is_jwt: {
      title: 'JWT nedir?',
      description:
        "JWT (JSON Web Token), yapılandırılmış ve okunabilir bir formatta bilgi taşıyan, kendine ait olan, durum bilgisi içermeyen bir tokendir. Bir API'yi korurken veya uygulamanız için belirtek tabanlı kimlik doğrulaması kullanırken, JWT çok güçlü bir araçtır çünkü:",
      bullets: [
        {
          label: 'Durumsuz',
          description:
            "JWT'ler kendine ait olduğu için sunucu tarafında duruma ihtiyaç duymaz. JWT, imzalar yoluyla veri bütünlüğünü sağlayabilir.",
        },
        {
          label: 'Hizmetler arası uyumluluk',
          description:
            "JWT'ler farklı hizmetler arasında kolayca paylaşılabilir ve doğrulanabilir.",
        },
        {
          label: 'Genişletilebilir',
          description:
            "JWT'nin yükü, esnek yetkilendirme ve bilgi paylaşımı sağlamak için özel iddialar içerebilir.",
        },
      ],
    },
    jwt_structure: {
      title: "JWT'nin yapısı",
      description:
        'Tipik bir JWT, her biri Base64URL ile kodlanmış ve nokta (.) ile ayrılmış üç kısma ayrılır:',
      bullets: [
        {
          label: 'Başlık',
          description:
            'İmzalama algoritması (ör. HS256 veya RS256) ve token türü (JWT) gibi meta verileri içerir.',
        },
        {
          label: 'Yük',
          description:
            'Kullanıcı kimliği, kullanıcı profili, son kullanma süresi veya kapsamlar gibi gerçek verileri içerir.',
        },
        {
          label: 'İmza',
          description:
            "Başlık, Yük ve bir gizli anahtar kullanılarak güvence altına alınmış bir kombinasyonudur. Amacı, token'in bütünlüğünü sağlamak ve değiştirilmediğinden emin olmaktır.",
        },
      ],
      summary:
        "Bu yapı, JWT'lerin taraflar arasında bilgi iletimini kompakt ve güvenli bir şekilde sağlamasını mümkün kılar.",
    },
    token_claims: {
      title: "JWT'de yaygın token iddiaları",
      description:
        'İddialar, yükün bir parçasıdır ve anahtar bilgileri içerir. İşte referansınız için standartlaştırılmış Kayıtlı İddialar:',
      table: {
        headers: ['İddialar', 'Tam adı', 'Açıklama'],
        rows: [
          {
            claim: 'iss',
            full_name: 'İhraç Eden',
            description: "JWT'yi ihraç eden varlık, örneğin yetkilendirme sunucusu.",
          },
          {
            claim: 'sub',
            full_name: 'Konu',
            description:
              "JWT'nin konusu olan kullanıcıyı tanımlar, genellikle kimliği doğrulanmış kullanıcıyı temsil eder.",
          },
          {
            claim: 'aud',
            full_name: 'Hedef Kitle',
            description:
              "Belirtilen alıcıların token'i kabul edebileceğini ve işleyebileceğini belirler. Bu, birden çok izleyici için bir değer dizisi veya tek bir alıcı için tek bir değer olabilir.",
          },
          {
            claim: 'exp',
            full_name: 'Bitiş Zamanı',
            description:
              "Token'in geçersiz hale geleceği son bir tarih belirler. Bu, token'in ne kadar süreyle geçerli olduğunu sınırlayarak yeniden oynatma saldırılarını önlemeye yardımcı olur.",
          },
          {
            claim: 'nbf',
            full_name: 'Öncesi Geçerli Değil',
            description:
              "Token'in sadece bu zaman damgasından sonra geçerli olmasını sağlar. Saatlere erişilemediği durumlarda faydalıdır.",
          },
          {
            claim: 'iat',
            full_name: 'Veriliş Tarihi',
            description:
              "Token'in ne zaman oluşturulduğunu belirtir. Bu, token'in yaşını belirlemede kullanılabilir.",
          },
          {
            claim: 'jti',
            full_name: 'JWT Kimliği',
            description:
              "Token için benzersiz bir tanımlayıcı, aynı token'in (ör. yeniden oynatma saldırılarında) birden fazla kez kullanılmasını önlemek için kullanışlıdır.",
          },
        ],
      },
      other_token_claims: {
        description:
          "Belirtime ve yetkilendirme sunucusunun yapılandırmasına bağlı olarak, belirli kullanımlar için yükte ek iddialar bulunabilir. Ayrıca, benzersiz iş gereksinimlerini karşılamak için JWT'ye özel iddialar ekleyebilirsiniz.",
        id_token: {
          title: 'Kimlik Tokeni',
          description:
            "OpenID Connect'te kullanılır, kimliği doğrulanmış kullanıcı hakkında profil bilgileri (ör. isim, e-posta vb.) gibi iddialar içerir.",
        },
        access_token: {
          title: 'Erişim Tokeni',
          description:
            "OAuth 2.0'da kullanılır, kullanıcı veya uygulama adına belirli kaynaklara veya API'lere erişim izni verir.",
        },
      },
      notification: {
        label: 'Dikkat',
        description:
          "Özel veya hassas bilgileri JWT iddialarında depolamayın. JWT iddiaları kodlanır (Base64URL kullanılarak), ancak şifrelenmez. Bu, token'e sahip olan herkesin iddiaları görebileceği anlamına gelir, ancak imzayı geçersiz hale getirmeden değiştiremezler. Gerektiğinde hassas bilgilerin güvenliğini sağlamak için şifreleme veya diğer güvenli yöntemleri kullanın.",
      },
    },
    when_to_use: {
      title: 'JWT ne zaman kullanılmalı?',
      description: "JWT'ler aşağıdaki senaryolarında özellikle faydalı olabilir:",
      bullets: [
        {
          label: 'Mikro hizmet mimarisi',
          description: 'Birden çok hizmet arasında durumsuz kimlik doğrulama için.',
        },
        {
          label: 'Tek oturum açma (SSO) sistemleri',
          description: 'Birden fazla uygulamaya tek bir kimlik doğrulamayla erişim sağlamak.',
        },
        {
          label: 'Mobil uygulamalar',
          description:
            'API çağrıları arasında kullanıcı oturumlarını verimli bir şekilde sürdürmek.',
        },
        {
          label: 'Yoğun trafikli uygulamalar',
          description: 'Yüksek hacimli ortamlarda veritabanı yükünü azaltmak.',
        },
        {
          label: 'Çapraz kaynak paylaşımı (CORS)',
          description: 'Birden fazla alan arasında kimlik doğrulamasını basitleştirmek.',
        },
        {
          label: 'Sunucusuz mimariler',
          description:
            'Sunucu tarafı oturumların zor olduğu yerlerde durumsuz kimlik doğrulama sağlamak.',
        },
      ],
    },
    learn_more: 'Daha fazla bilgi edinin',
  },
  verify_jwt: {
    title: 'JWT nasıl doğrulanır?',
    subtitle:
      "Bir JWT'nin bütünlüğü, başlığı ve yükünün değiştirilmediğinden emin olmak için doğrulanmalıdır. Aşağıda popüler programlama ortamlarında JWT'leri doğrulamak için adım adım örnekler bulunur:",
    ruby_label: 'Ruby içinde JWT doğrula',
    dotnet_label: '.NET içinde JWT doğrula',
    java_label: 'Java içinde JWT doğrula',
    php_label: 'PHP içinde JWT doğrula',
    python_label: 'Python içinde JWT doğrula',
    go_label: 'Go içinde JWT doğrula',
    nodejs_label: 'Node.js içinde JWT doğrula',
    rust_label: 'Rust içinde JWT doğrula',
  },
  related_topics: {
    title: 'İlgili JWT konuları',
    subtitle:
      "JWT ile ilgili tüm bilgileri ve çeşitli çerçevelerde JWT'yi doğrulamak için adım adım rehber içerir.",
    blogs: {
      jwt_algorithm: {
        title: 'JWT algoritmaları: EC vs. RSA',
        description:
          "JWT'nin imza algoritmalarına, örneğin EC ve RSA, ve uygulamanız için en güvenli ve verimli yöntemi seçmeyi öğrenin.",
      },
      id_token_and_access_token: {
        title: 'Kimlik tokeni & Erişim tokeni & Yenileme tokeni',
        description:
          'Kimlik Tokenleri, Erişim Tokenleri ve Yenileme tokenlerinin belirli amaçlarını biliyor musunuz? Kimlik doğrulama ve yetkilendirme süreçlerinde rollerini JWT perspektifinden anlayın.',
      },
      custom_jwt_token_claims: {
        title: 'Özel JWT token iddiaları',
        description:
          'JWT nasıl ince ayrıntılı erişim kontrolünü sağlar? RBAC (Role-Based Access Control) ve ABAC (Attribute-Based Access Control) karşılaştırarak uygulamanız için en iyi çözümü bulun.',
      },
      opaque_token_vs_jwt: {
        title: 'Opak token vs. JWT token',
        description:
          "JWT ve Opak Tokenler arasındaki temel farklılıkları keşfedin ve neden JWT'nin yüksek performansı ve ölçeklenebilirliği ile modern kimlik doğrulama tercihi haline geldiğini öğrenin.",
      },
      api_authorization: {
        title:
          'API yetkilendirme: API anahtarları vs. Temel kimlik doğrulama vs. OAuth JWT tokenleri',
        description:
          "Üç yaygın API yetkilendirme mekanizmasını ve onların avantajları ve dezavantajlarını araştırın. OAuth JWT tokenleri kullanarak API'lerinizi korumak için en iyi uygulamayı öğrenin.",
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. Oturum kimlik doğrulaması',
        description:
          "Oturum tabanlı doğrulama, kullanıcı oturumlarını sürdürmek için sunucu tarafı depolamaya dayanır, oysa belirtek tabanlı doğrulama, istemciler ve sunucular arasında durumsuz ve ölçeklenebilir iletişim sağlar. JWT'nin API güvenliğini nasıl devrim niteliğinde değiştirdiğini ve neden modern kimlik doğrulaması için tercih edilen seçim haline geldiğini keşfedin.",
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'OAuth, OpenID Connect (OIDC), SAML, SSO ve JWT gibi şık terimler kimlik ve erişim yönetimi alanında sıklıkla kullanılır, ancak bunlar ne anlama gelir? Birlikte nasıl çalışırlar?',
      },
    },
  },
  unblock_more_subtitle:
    "Çalışma akışınızı basitleştirin ve Logto Cloud ile güvenli kullanıcı yönetimini sağlayın. OpenID Connect (OIDC) üzerine kurulu, ihtiyaçlarınızla ölçeklenmek üzere tasarlanmış güvenilir bir kimlik doğrulama ve yetkilendirme sistemi sağlamak için JWT'yi kullanır.",
};

export default Object.freeze(jwt_decoder);
