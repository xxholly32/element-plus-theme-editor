export type formatType = 'rgb' | 'hex' | 'hct' | 'hsv'

export interface hueType {
  multiply: number
  segment: number[]
}

export interface directType {
  cTarget: number
  cEasing: number[]
  hRotate: number
  hEasing: number[]
  tTarget: number
  tEasing: number[]
}

export interface neutralDirectType {
  tTarget: number
  tEasing: number[]
}

export interface neutralType {
  cTarget: number
  hRotate: number
  tTarget: number
  down: neutralDirectType
  up: neutralDirectType
}

export interface generateType {
  dark: {
    down: directType
    up: directType
    neutral: neutralType
  }
  hue: {
    palettes: hueType
    neutral: hueType
  }
  light: {
    down: directType
    up: directType
    neutral: neutralType
  }
  step: {
    up: number
    down: number
  }
}
