export const ELEMENT_PLUS_CONSTANTS = {
  data: {
    colorList: [
      {
        "color": "#409eff",
        "darkColor": "#589ffe",
        "id": "Primary",
        "title": "Brand",
        "type": "normal"
      },
      {
        "color": "#e6202a",
        "darkColor": "#ff5d55",
        "id": "Red",
        "title": "Red",
        "type": "normal"
      },
      {
        "color": "#ff832b",
        "darkColor": "#ffa366",
        "id": "65c1",
        "title": "Orange",
        "type": "normal"
      },
      {
        "color": "#ffcc00",
        "darkColor": "#ffd668",
        "id": "Yellow",
        "title": "Yellow",
        "type": "normal"
      },
      {
        "color": "#1db84c",
        "darkColor": "#65ca67",
        "id": "Green",
        "title": "Green",
        "type": "normal"
      },
      {
        "color": "#00b3af",
        "darkColor": "#56c6c4",
        "id": "Sky",
        "title": "Teal",
        "type": "normal"
      },
      {
        "color": "#1fa5ff",
        "darkColor": "#67baff",
        "id": "f38c",
        "title": "Cyan",
        "type": "normal"
      },
      {
        "color": "#176cff",
        "darkColor": "#5792ff",
        "id": "116bd",
        "title": "Blue",
        "type": "normal"
      },
      {
        "color": "#8a3ffc",
        "darkColor": "#a275ff",
        "id": "Purple",
        "title": "Purple",
        "type": "normal"
      },
      {
        "color": "#ea3c8e",
        "darkColor": "#ff6ba3",
        "id": "17d81",
        "title": "Magenta",
        "type": "normal"
      }
    ],
    generate: {
      dark: {
        down: {
          cTarget: 20,
          hRotate: -20,
          tTarget: 96,
          tEasing: [
            0,
            0,
            0.5,
            0.7,
          ],
          cEasing: [
            0,
            0,
            1,
            1,
          ],
          hEasing: [
            0,
            0,
            1,
            1,
          ],
        },
        up: {
          cTarget: 50,
          hRotate: 20,
          tTarget: 10,
          tEasing: [
            0,
            0,
            1,
            1,
          ],
          cEasing: [
            0,
            0,
            1,
            1,
          ],
          hEasing: [
            0,
            0,
            1,
            1,
          ],
        },
        neutral: {
          cTarget: 1,
          hRotate: 1,
          tTarget: 43,
          down: {
            tTarget: 98,
            tEasing: [
              0,
              0,
              0.53,
              0.72,
            ],
          },
          up: {
            tTarget: 6,
            tEasing: [
              0.29,
              0,
              0.65,
              1,
            ],
          },
        },
      },
      hue: {
        palettes: {
          multiply: -0.5,
          segment: [
            50,
            200,
          ],
        },
        neutral: {
          multiply: 1,
          segment: [
            0,
            360,
          ],

        },
      },
      light: {
        down: {
          cTarget: 50,
          hRotate: 20,
          tTarget: 10,
          tEasing: [
            0,
            0,
            1,
            1,
          ],
          cEasing: [
            0,
            0,
            1,
            1,
          ],
          hEasing: [
            0,
            0,
            1,
            1,
          ],
        },
        up: {
          cTarget: 20,
          hRotate: -20,
          tTarget: 96,
          tEasing: [
            0,
            0,
            0.5,
            0.7,
          ],
          cEasing: [
            0,
            0,
            1,
            1,
          ],
          hEasing: [
            0,
            0,
            1,
            1,
          ],
        },
        neutral: {
          cTarget: 2,
          hRotate: 209,
          tTarget: 73,
          down: {
            tTarget: 10,
            tEasing: [
              0,
              0,
              0.6,
              0.29,
            ],
          },
          up: {
            tTarget: 97,
            tEasing: [
              0.15,
              0.05,
              0.1,
              0.82,
            ],
          },
        },
      },
      step: {
        down: 4,
        up: 5,
      },
    },
    stepFliter: [],
    system: {
      edit: {
        isolateEdit: false,
      },
      pattern: {
        displayFliterStep: false,
        isFliterStep: false,
        isolateDark: false,
      },
    },
  },
  name: 'element-plus',
}
