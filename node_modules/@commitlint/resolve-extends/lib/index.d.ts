import 'resolve-global';
export interface ResolvedConfig {
    parserPreset?: unknown;
    [key: string]: unknown;
}
export interface ResolveExtendsConfig {
    extends?: string | string[];
    helpUrl?: string;
    [key: string]: unknown;
}
export interface ResolveExtendsContext {
    cwd?: string;
    parserPreset?: unknown;
    prefix?: string;
    resolve?(id: string, ctx?: {
        prefix?: string;
        cwd?: string;
    }): string;
    resolveGlobal?: (id: string) => string;
    require?<T>(id: string): T;
}
export default function resolveExtends(config?: ResolveExtendsConfig, context?: ResolveExtendsContext): ResolvedConfig;
//# sourceMappingURL=index.d.ts.map