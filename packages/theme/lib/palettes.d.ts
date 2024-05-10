import type { generateType } from './types';
export declare function getNeutral(generate?: generateType | null): {
    light: string[];
    dark: string[];
};
export declare function getNeutralAlpha(generate?: generateType | null, format?: 'rgb' | 'hex' | 'hct' | 'hsv'): {
    light: string[];
    dark: string[];
};
export declare function getPalette({ light, dark, generate, format, }: {
    light: string;
    dark: string;
    generate?: generateType;
    format?: 'rgb' | 'hex' | 'hct' | 'hsv';
}): {
    light: string[];
    dark: string[];
};
