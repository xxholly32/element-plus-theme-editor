import type { directType, hueType } from '../types';
import type { adjustNeutralType } from './adjust';
export declare function getLadderColors(baseColor: string, { up, down, upSteps, downSteps, hue, }: {
    up: directType;
    down: directType;
    upSteps: number;
    downSteps: number;
    hue: hueType;
}): string[];
export declare function getNeutualColors({ up, down, upSteps, downSteps, }: {
    up: adjustNeutralType;
    down: adjustNeutralType;
    upSteps: number;
    downSteps: number;
}): string[];
