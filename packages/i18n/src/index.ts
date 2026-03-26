export interface ToolLocaleNamespace {
  [key: string]: string | ToolLocaleNamespace;
}

export type ToolLocales = Record<string, ToolLocaleNamespace>;
