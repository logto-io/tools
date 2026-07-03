const oauth_providers = {
  title: 'ตัวสำรวจผู้ให้บริการ OAuth & OIDC',
  description:
    'ค้นหาอย่างรวดเร็วสำหรับจุดเชื่อมต่อ OAuth และทรัพยากรการพัฒนาที่เกี่ยวข้องสำหรับผู้ให้บริการ OAuth & OIDC ที่เป็นที่นิยม.',
  hint: 'ข้อมูลทุกอย่างของผู้ให้บริการนำมาจากเอกสารทางการ พร้อมลิงก์ในแต่ละหน้าเพื่ออ้างอิง',
  app_title: 'ตัวสำรวจผู้ให้บริการ OAuth & OIDC <span>Explorer</span>',
  search_placeholder: 'ค้นหาผู้ให้บริการ (เช่น GitHub, Google, Facebook)',
  clear_search: 'ล้างการค้นหา',
  copy: 'คัดลอก',
  copied: 'คัดลอกไปยังคลิปบอร์ดแล้ว',
  back_to_explorer: 'กลับไปที่ตัวสำรวจ',
  details_title: '{{name}} จุดเชื่อมต่อ OAuth',
  details_description: 'จุดเชื่อมต่อ OAuth และทรัพยากรการพัฒนาที่เกี่ยวข้องของ {{name}}',
  oidc_details_title: '{{name}} จุดเชื่อมต่อ OAuth & OIDC',
  oidc_details_description:
    'จุดเชื่อมต่อ OAuth & OIDC และทรัพยากรการพัฒนาที่เกี่ยวข้องของ {{name}}',
  unknown_details_title: 'ผู้ให้บริการ OAuth ที่ไม่รู้จัก',
  unknown_details_description: 'ไม่รู้จักผู้ให้บริการ OAuth นี้.',
  documentation_title: 'เอกสาร OAuth และทรัพยากรของ {{name}}',
  oidc_documentation_title: 'เอกสาร OAuth & OIDC และทรัพยากรของ {{name}}',
  authorization_endpoint: 'จุดเชื่อมต่อการอนุญาตของ {{name}}',
  authorization_endpoint_description:
    'จุดเชื่อมต่อที่จะเปลี่ยนเส้นทางผู้ใช้ไปเพื่อให้สิทธิ์การเข้าถึงบัญชีของตนแก่แอปพลิเคชันของคุณ.',
  token_endpoint: 'จุดเชื่อมต่อโทเคนของ {{name}}',
  token_endpoint_description:
    'จุดเชื่อมต่อที่ใช้ในการแลกเปลี่ยนรหัสการอนุญาตหรือโทเคนฟื้นฟูเพื่อรับโทเคนการเข้าถึงและโทเคนฟื้นฟู.',
  jwks_uri: 'URI ของ JWKS ของ {{name}}',
  jwks_uri_description:
    'URI ที่ให้กุญแจสาธารณะสำหรับการตรวจสอบโทเคน JWT. กุญแจเหล่านี้ถูกใช้เพื่อยืนยันความถูกต้องของโทเคนที่ออกโดยเซิร์ฟเวอร์การอนุญาต.',
  revocation_endpoint: 'จุดเชื่อมต่อการยกเลิกของ {{name}}',
  revocation_endpoint_description:
    'จุดเชื่อมต่อที่ใช้ในการทำให้โทเคนการเข้าถึงหรือโทเคนฟื้นฟูใช้ไม่ได้ก่อนเวลาหมดอายุ ใช้เมื่อผู้ใช้ทำการออกจากระบบหรือยกเลิกการเข้าถึงแอปพลิเคชัน.',
  userinfo_endpoint: 'จุดเชื่อมต่อข้อมูลผู้ใช้ของ {{name}}',
  userinfo_endpoint_description:
    'จุดเชื่อมต่อ OAuth ที่ได้มาตรฐานที่ให้ข้อมูลโปรไฟล์ของผู้ใช้ที่ได้รับการรับรองความถูกต้อง, รวมถึงสิทธิ์การเข้าถึงของผู้ใช้ปัจจุบันตามช่วงของโทเคนการเข้าถึง.',
  end_session_endpoint: 'จุดเชื่อมต่อสิ้นสุดเซสชันของ {{name}}',
  end_session_endpoint_description:
    'จุดเชื่อมต่อที่ใช้ในการยุติเซสชันของผู้ใช้ที่ผู้ให้บริการระบุตัวตน, มักจะใช้ในการทำการลงชื่อออกจากระบบเดี่ยว.',
  introspection_endpoint: 'จุดเชื่อมต่อการประเมินของ {{name}}',
  introspection_endpoint_description:
    'จุดเชื่อมต่อที่อนุญาตให้ฝ่ายที่ได้รับอนุญาตตรวจสอบสถานะและความถูกต้องของโทเคนการเข้าถึงหรือโทเคนฟื้นฟู, คืนค่าข้อมูลเมตาโทเคนโดยละเอียด.',
  oidc_discovery_endpoint: 'จุดเชื่อมต่อการค้นพบ OIDC ของ {{name}}',
  oidc_discovery_endpoint_description:
    'จุดที่ได้มาตรฐาน (.well-known/openid-configuration) ที่ให้ข้อมูลการตั้งค่า OpenID Connect รวมถึงจุดเชื่อมต่อที่ใช้ได้ทั้งหมดและฟีเจอร์ที่รองรับ.',
  issuer: 'URL ของผู้ให้บริการ {{name}}',
  issuer_description:
    'URL ระบุที่ไม่ซ้ำกันซึ่งระบุผู้ให้บริการ OAuth/OIDC และใช้ในการตรวจสอบความถูกต้องของโทเคน',
  provider_not_found: 'ไม่พบผู้ให้บริการ',
  provider_not_found_description:
    'เราไม่สามารถหาผู้ให้บริการ OAuth ที่คุณกำลังมองหาได้. อาจจะถูกลบออกไปหรือไม่มีอยู่.',
};

export default Object.freeze(oauth_providers);
