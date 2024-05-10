import type { directType, hueType } from '../types'
import { adjustHex, adjustNeutralHex } from './adjust'
import type { adjustNeutralType } from './adjust'

export function getLadderColors(baseColor: string, {
  up,
  down,
  upSteps,
  downSteps,
  hue,
}: {
  up: directType
  down: directType
  upSteps: number
  downSteps: number
  hue: hueType
}) {
  const shades: string[] = []
  // 向上梯度
  for (let i = upSteps; i >= 1; i--)
    shades.push(adjustHex(baseColor, up, hue, i, upSteps))

  shades.push(baseColor)

  // 向下梯度
  for (let i = 1; i <= downSteps; i++)
    shades.push(adjustHex(baseColor, down, hue, i, downSteps))

  return shades
}

export function getNeutualColors({
  up,
  down,
  upSteps,
  downSteps,
}: {
  up: adjustNeutralType
  down: adjustNeutralType
  upSteps: number
  downSteps: number
}) {
  const shades: string[] = []
  // 向上梯度
  for (let i = upSteps; i >= 1; i--)
    shades.push(adjustNeutralHex({ ...up, i, steps: upSteps }))

  shades.push(adjustNeutralHex(up))

  // 向下梯度
  for (let i = 1; i <= downSteps; i++)
    shades.push(adjustNeutralHex({ ...down, i, steps: downSteps }))

  return shades
}
