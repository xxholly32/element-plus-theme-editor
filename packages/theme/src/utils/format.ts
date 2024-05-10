import { Hct, argbFromHex, hexFromArgb } from '@material/material-color-utilities'
import Color from 'color'
import chroma from 'chroma-js'

export const hexToHct: any = (hex: string): number[] => {
  const hclColor: Hct = Hct.fromInt(argbFromHex(hex))
  return [hclColor.hue, hclColor.chroma, hclColor.tone]
}

export function hctToHex(hct: number[]): string {
  const hctColor: Hct = Hct.from(hct[0], hct[1], hct[2])
  return hexFromArgb(hctColor.toInt())
}

export function toHctString(hex: string, alpha?: boolean): string {
  if (alpha) {
    const [r, g, b, a] = chroma(hex).rgba()
    const newHex = chroma.rgb(r, g, b).hex()
    const hctColor = hexToHct(newHex)
    return `hcta(${hctColor.map((c: number) => Math.round(c)).join(',')},${a})`
  }
  else {
    const hctColor = hexToHct(hex)
    return `hct(${hctColor.map((c: number) => Math.round(c)).join(',')})`
  }
}

export function colorTypeFormat(color: string, colorType: 'hex' | 'hct' | 'rgb' | 'hsv'): string {
  let text = color
  const alpha = chroma(color).alpha() !== 1
  const c = Color(color)
  switch (colorType) {
    case 'hex': {
      text = alpha ? c.hexa().toString() : c.hex().toString()
      break
    }
    case 'hct': {
      text = toHctString(color, alpha)
      break
    }
    case 'rgb': {
      text = c.rgb().string()
      break
    }
    case 'hsv': {
      text = c.hsv().string()
      break
    }
    default: {
      break
    }
  }
  return text
}
