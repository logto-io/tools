const oauth_providers = {
  title: 'مستكشف مزودي OAuth و OIDC',
  description:
    'ابحث بسرعة عن نقاط نهاية OAuth والموارد التطويرية ذات الصلة لمزودي OAuth و OIDC الشائعين.',
  hint: 'جميع معلومات المزود مأخوذة من الوثائق الرسمية، مع روابط على كل صفحة للرجوع إليها',
  app_title: 'مستكشف مزودي <span>OAuth و OIDC</span>',
  search_placeholder: 'ابحث عن مزود (مثل GitHub و Google و Facebook)',
  clear_search: 'مسح البحث',
  copy: 'نسخ',
  copied: 'تم النسخ إلى الحافظة',
  back_to_explorer: 'العودة إلى المستكشف',
  details_title: 'نقاط نهاية {{name}} OAuth',
  details_description: 'نقاط نهاية {{name}} OAuth والموارد التطويرية ذات الصلة',
  oidc_details_title: 'نقاط نهاية {{name}} OAuth و OIDC',
  oidc_details_description: 'نقاط نهاية {{name}} OAuth و OIDC والموارد التطويرية ذات الصلة',
  unknown_details_title: 'مزود OAuth غير معروف',
  unknown_details_description: 'هذا المزود OAuth غير معترف به.',
  documentation_title: 'وثائق وموارد {{name}} OAuth',
  oidc_documentation_title: 'وثائق وموارد {{name}} OAuth و OIDC',
  authorization_endpoint: 'نقطة نهاية ترخيص {{name}}',
  authorization_endpoint_description:
    'النقطة النهائية لتحويل المستخدمين إليها للسماح لتطبيقك بالوصول إلى حسابهم.',
  token_endpoint: 'نقطة نهاية التوكن {{name}}',
  token_endpoint_description:
    'النقطة النهائية لتبادل كود الترخيص أو توكن التحديث للحصول على توكن وصول وتوكن تحديث.',
  jwks_uri: 'رابط {{name}} JWKS',
  jwks_uri_description:
    'الرابط الذي يوفر مفاتيح عامة للتحقق من صحة توكنات JWT. تُستخدم هذه المفاتيح للتحقق من صحة وصحة التوكنات التي يصدرها خادم التراخيص.',
  revocation_endpoint: 'نقطة نهاية إلغاء {{name}}',
  revocation_endpoint_description:
    'النقطة النهائية المستخدمة لإبطال صلاحية توكنات الوصول أو توكنات التحديث قبل وقت انتهائها، تستخدم عموماً عندما يخرج المستخدم أو يلغي صلاحية التطبيق.',
  userinfo_endpoint: 'نقطة نهاية معلومات المستخدم {{name}}',
  userinfo_endpoint_description:
    'النقطة القياسية لـ OAuth التي تعيد معلومات الملف الشخصي للمستخدم المصادق عليه، بما في ذلك المعلومات المتعلقة بالمستخدم الحالي بناءً على نطاق توكن الوصول.',
  end_session_endpoint: 'نقطة نهاية إنهاء الجلسة {{name}}',
  end_session_endpoint_description:
    'النقطة النهائية المستخدمة لإنهاء جلسة المستخدم في مزود الهوية، تُستخدم عادة لتنفيذ وظيفة الخروج المفرد.',
  introspection_endpoint: 'نقطة نهاية الفحص الذاتي {{name}}',
  introspection_endpoint_description:
    'النقطة النهائية التي تسمح للأطراف المصرح لها بفحص حالة وصلاحية توكن الوصول أو توكن التحديث، مع إرجاع تفاصيل وصفية للتوكن.',
  oidc_discovery_endpoint: 'نقطة نهاية اكتشاف {{name}} OIDC',
  oidc_discovery_endpoint_description:
    'النقطة النهائية المعروفة (.well-known/openid-configuration) التي توفر بيانات تعريف تكوين OpenID Connect، بما في ذلك جميع النقاط النهائية المتاحة والميزات المدعومة.',
  issuer: 'عنوان إصدار {{name}}',
  issuer_description: 'عنوان URL فريد يحدد مزود OAuth/OIDC ويُستخدم للتحقق من صلاحية التوكنات',
  provider_not_found: 'لم يتم العثور على المزود',
  provider_not_found_description:
    'لم نتمكن من العثور على مزود OAuth الذي تبحث عنه. ربما تمت إزالته أو غير موجود.',
};

export default Object.freeze(oauth_providers);
