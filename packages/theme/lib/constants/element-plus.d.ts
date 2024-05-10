export declare const ELEMENT_PLUS_CONSTANTS: {
    data: {
        colorList: {
            color: string;
            darkColor: string;
            id: string;
            title: string;
            type: string;
        }[];
        generate: {
            dark: {
                down: {
                    cTarget: number;
                    hRotate: number;
                    tTarget: number;
                    tEasing: number[];
                    cEasing: number[];
                    hEasing: number[];
                };
                up: {
                    cTarget: number;
                    hRotate: number;
                    tTarget: number;
                    tEasing: number[];
                    cEasing: number[];
                    hEasing: number[];
                };
                neutral: {
                    cTarget: number;
                    hRotate: number;
                    tTarget: number;
                    down: {
                        tTarget: number;
                        tEasing: number[];
                    };
                    up: {
                        tTarget: number;
                        tEasing: number[];
                    };
                };
            };
            hue: {
                palettes: {
                    multiply: number;
                    segment: number[];
                };
                neutral: {
                    multiply: number;
                    segment: number[];
                };
            };
            light: {
                down: {
                    cTarget: number;
                    hRotate: number;
                    tTarget: number;
                    tEasing: number[];
                    cEasing: number[];
                    hEasing: number[];
                };
                up: {
                    cTarget: number;
                    hRotate: number;
                    tTarget: number;
                    tEasing: number[];
                    cEasing: number[];
                    hEasing: number[];
                };
                neutral: {
                    cTarget: number;
                    hRotate: number;
                    tTarget: number;
                    down: {
                        tTarget: number;
                        tEasing: number[];
                    };
                    up: {
                        tTarget: number;
                        tEasing: number[];
                    };
                };
            };
            step: {
                down: number;
                up: number;
            };
        };
        stepFliter: any[];
        system: {
            edit: {
                isolateEdit: boolean;
            };
            pattern: {
                displayFliterStep: boolean;
                isFliterStep: boolean;
                isolateDark: boolean;
            };
        };
    };
    name: string;
};
