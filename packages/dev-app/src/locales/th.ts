import type en from './en';

const th = {
  topbar: {
    banner_text: 'สร้างและพรีวิวเครื่องมือสาธารณะในแอปพัฒนาที่สอดคล้องกับเว็บไซต์',
    banner_link: 'ดัชนีเครื่องมือ',
    developers: 'นักพัฒนา',
    tools: 'เครื่องมือ',
    language: 'ภาษา',
    github_star: 'ดาว 9.5k',
    sign_in: 'เข้าสู่ระบบ',
    get_started: 'เริ่มต้นใช้งาน',
  },
  home: {
    label: 'เครื่องมือนักพัฒนา',
    title: 'เครื่องมือสาธารณะ',
    description:
      'แอปนี้จำลองพื้นที่ส่วนบนของเว็บไซต์จริง เพื่อให้แต่ละเครื่องมือสามารถพัฒนาและรีวิวในสภาพแวดล้อมใกล้เคียงโปรดักชัน พร้อมคงเส้นทางเฉพาะของแต่ละเครื่องมือไว้',
    tags: {
      topbar: 'ท็อปบาร์สไตล์ Logto',
      routes: 'เส้นทางเครื่องมือแยกเฉพาะ',
      i18n: 'สัญญา i18n ร่วม',
    },
    planned: 'วางแผนไว้',
    coming_next: 'เร็ว ๆ นี้',
    available_now: 'พร้อมใช้งานแล้ว',
    open_tool: 'เปิดเครื่องมือ',
  },
  tools: {
    jwtDecoder: {
      title: 'ตัวถอดรหัส JWT',
      description: 'ถอดรหัส ตรวจสอบ แก้ไข และลงนาม JWT ใหม่ในเวิร์กสเปซที่สอดคล้องกับเว็บไซต์',
    },
    samlDecoder: {
      title: 'ตัวถอดรหัส SAML Assertion',
      description: 'แผนถัดไป: ตรวจสอบ XML assertion ด้วยเชลล์เครื่องมือเดียวกัน',
    },
    base64Decoder: {
      title: 'ตัวเข้ารหัสและถอดรหัส Base64',
      description: 'เข้ารหัสและถอดรหัสข้อมูล Base64 และ Base64URL ภายในเบราว์เซอร์ได้โดยตรง',
    },
    oauthProvidersExplorer: {
      title: 'ตัวสำรวจผู้ให้บริการ OAuth & OIDC',
      description:
        'ค้นหาอย่างรวดเร็วสำหรับจุดเชื่อมต่อ OAuth และทรัพยากรการพัฒนาที่เกี่ยวข้องสำหรับผู้ให้บริการ OAuth & OIDC ที่เป็นที่นิยม.',
    },
  },
};

export default th satisfies typeof en;
