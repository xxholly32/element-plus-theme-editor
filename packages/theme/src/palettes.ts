import { ELEMENT_PLUS_CONSTANTS } from './constants'
import { colorTypeFormat, getAlphaColor, getLadderColors, getNeutualColors } from './utils'
import type { generateType } from './types'

// 获取灰度梯度
export function getNeutral(generate: generateType | null = null) {
  const _generate = generate || ELEMENT_PLUS_CONSTANTS.data.generate
  const darkShades = getShades(_generate, true)
  const lightShades = getShades(_generate)

  return {
    light: lightShades,
    dark: darkShades,
  }
}

// 获取灰度透明梯度
export function getNeutralAlpha(generate: generateType | null = null, format: 'rgb' | 'hex' | 'hct' | 'hsv' = 'rgb') {
  const _generate = generate || ELEMENT_PLUS_CONSTANTS.data.generate
  const darkShades = getShades(_generate, true)
  const lightShades = getShades(_generate)

  return {
    light: lightShades.map(color => colorTypeFormat(getAlphaColor(color, '#fff'), format)),
    dark: darkShades.map(color => colorTypeFormat(getAlphaColor(color, '#000'), format)),
  }
}

// 获取颜色梯度
export function getPalette({
  light,
  dark,
  generate,
  format,
}: {
  light: string
  dark: string
  generate?: generateType
  format?: 'rgb' | 'hex' | 'hct' | 'hsv'
}) {
  const _generate = generate || ELEMENT_PLUS_CONSTANTS.data.generate

  const { up: upSteps, down: downSteps } = _generate.step
  const { up, down } = _generate.light
  const { up: upDark, down: downDark } = _generate.dark
  const hue = _generate.hue.palettes
  const darks = getLadderColors(dark, {
    up: upDark,
    down: downDark,
    upSteps,
    downSteps,
    hue,
  })

  return {
    light: getLadderColors(light, {
      up,
      down,
      upSteps,
      downSteps,
      hue,
    }),
    dark: darks.map(color => colorTypeFormat(getAlphaColor(color, '#000'), format)),
  }
}

// 根据配置获取灰度数据
function getShades(generate: generateType, isDark = false) {
  const { up: upSteps, down: downSteps } = generate.step

  const {
    cTarget,
    hRotate,
    up,
    down,
    tTarget: tStart,
  } = generate[isDark ? 'dark' : 'light'].neutral

  return getNeutualColors({
    up: {
      ...up,
      cTarget,
      hRotate,
      tStart,
    },
    down: {
      ...down,
      cTarget,
      hRotate,
      tStart,
    },
    upSteps,
    downSteps,
  })
}
