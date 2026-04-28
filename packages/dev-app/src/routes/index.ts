export const toolRoutes = [
  {
    id: 'jwtDecoder',
    path: '/jwt-decoder',
    titleKey: 'tools.jwtDecoder.title',
    descriptionKey: 'tools.jwtDecoder.description',
  },
  {
    id: 'samlDecoder',
    path: '/saml-decoder',
    titleKey: 'tools.samlDecoder.title',
    descriptionKey: 'tools.samlDecoder.description',
    disabled: true,
  },
  {
    id: 'base64Decoder',
    path: '/base64-decoder',
    titleKey: 'tools.base64Decoder.title',
    descriptionKey: 'tools.base64Decoder.description',
  },
] as const;

export type ToolRoute = (typeof toolRoutes)[number];
export type ToolRouteId = ToolRoute['id'];
