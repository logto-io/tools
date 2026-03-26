export type ToolRuntimeContext = {
  readonly locale: string;
  readonly theme?: 'light' | 'dark';
};

export type ToolRenderResult = {
  readonly mountId: string;
};
