import type en from './en';

const ar = {
  topbar: {
    banner_text: 'قم ببناء ومعاينة الأدوات العامة داخل تطبيق تطوير مطابق للموقع.',
    banner_link: 'فهرس الأدوات',
    developers: 'المطورون',
    tools: 'الأدوات',
    language: 'اللغة',
    github_star: 'نجمة 9.5k',
    sign_in: 'تسجيل الدخول',
    get_started: 'ابدأ',
  },
  home: {
    label: 'أدوات المطورين',
    title: 'أدوات عامة.',
    description:
      'يعكس هذا التطبيق الجزء العلوي الحقيقي من الموقع حتى يمكن تطوير كل أداة ومراجعتها ضمن غلاف قريب من الإنتاج، مع احتفاظ كل أداة بمسار صفحة مخصص.',
    tags: {
      topbar: 'شريط علوي بنمط Logto',
      routes: 'مسارات أدوات مخصصة',
      i18n: 'عقد i18n مشترك',
    },
    planned: 'مخطط لها',
    coming_next: 'قريبًا',
    available_now: 'متاحة الآن',
    open_tool: 'افتح الأداة',
  },
  tools: {
    jwtDecoder: {
      title: 'مفكك JWT',
      description: 'فك وفحص وتحرير وإعادة توقيع JWT ضمن مساحة عمل متوافقة مع الموقع.',
    },
    samlDecoder: {
      title: 'مفكك تأكيد SAML',
      description: 'الخطوة التالية: فحص تأكيدات XML ضمن نفس غلاف الأدوات.',
    },
    base64Decoder: {
      title: 'مشفّر ومفكّك Base64',
      description: 'شفّر وفكّ تشفير حمولات Base64 وBase64URL مباشرة في المتصفح.',
    },
  },
};

export default ar satisfies typeof en;
