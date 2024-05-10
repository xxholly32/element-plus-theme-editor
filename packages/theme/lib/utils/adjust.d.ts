import type { hueType } from '../types';
export interface adjustNeutralType {
    hRotate: number;
    cTarget: number;
    tStart: number;
    tTarget: number;
    tEasing: number[];
    i?: number;
    steps?: number;
}
export declare function adjustNeutralHex({ hRotate, cTarget, tStart, tTarget, tEasing, i, steps, }: adjustNeutralType): string;
export declare function adjustHex(baseColor: string, { hRotate, // 色相偏移（旋转）
hEasing, // 色相偏移的缓动函数
cTarget, // 色度
cEasing, // 色度的缓动函数
tTarget, // 目标明度
tEasing, }: {
    hRotate: number;
    hEasing: number[];
    cTarget: number;
    cEasing: number[];
    tTarget: number;
    tEasing: number[];
}, hue: hueType, i: number, steps: number): string;
export declare function calcHueRotate(h: number, hRotate: number, hue: hueType): number;
export declare function genCalcHueVaule(Xa: number, Xb: number, max: number, multiply: number): (v: number) => number;
export declare function getAlphaColor(frontColor: string, backgroundColor: string): string;
