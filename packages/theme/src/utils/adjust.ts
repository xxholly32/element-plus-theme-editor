import { Hct, argbFromHex } from '@material/material-color-utilities'
import chroma from 'chroma-js'
import BezierEasing from 'bezier-easing'
import type { hueType } from '../types'
import { hctToHex } from './format'

export interface adjustNeutralType {
  hRotate: number // 色相偏移（旋转）
  cTarget: number // 色度
  tStart: number // 目标明度初始值
  tTarget: number // 目标明度
  tEasing: number[] // 明度的缓动函数
  i?: number // 当前步数
  steps?: number // 总步数
}

// TODO: 后续做开启偏色
export function adjustNeutralHex({
  hRotate,
  cTarget,
  tStart,
  tTarget,
  tEasing,
  i,
  steps,
}: adjustNeutralType) {
  if (!i || !steps)
    return hctToHex([hRotate, cTarget, tStart])

  const percent = i / steps

  // @ts-expect-erroradjustNeutralType
  const tBE = BezierEasing(...tEasing)

  const newT = tStart + (tTarget - tStart) * tBE(percent)
  // 灰色 hRotate 应该不变
  return hctToHex([hRotate, cTarget, newT])
}

export function adjustHex(baseColor: string, {
  hRotate, // 色相偏移（旋转）
  hEasing, // 色相偏移的缓动函数
  cTarget, // 色度
  cEasing, // 色度的缓动函数
  tTarget, // 目标明度
  tEasing, // 明度的缓动函数
}: {
  hRotate: number
  hEasing: number[]
  cTarget: number
  cEasing: number[]
  tTarget: number
  tEasing: number[]
}, hue: hueType, i: number, steps: number): string {
  // const color = Hct.fromInt(baseColor);
  // const colora = Hct.fromInt(argbFromHex(baseColor));
  const hclColor = Hct.fromInt(argbFromHex(baseColor))
  const [h, c, t] = [hclColor.hue, hclColor.chroma, hclColor.tone]

  const percent = i / steps

  // @ts-expect-error
  const hBE = BezierEasing(...hEasing)
  // @ts-expect-error
  const cBE = BezierEasing(...cEasing)
  // @ts-expect-error
  const tBE = BezierEasing(...tEasing)

  const newH = h + calcHueRotate(h, hRotate * hBE(percent), hue)
  const newC = c + (cTarget - c) * cBE(percent)
  const newT = t + (tTarget - t) * tBE(percent)

  return hctToHex([newH, newC, newT])
}

export function calcHueRotate(h: number, hRotate: number, hue: hueType) {
  const { segment, multiply } = hue
  const calcHueVaule = genCalcHueVaule(segment[0], segment[1], hRotate, multiply)
  return calcHueVaule(h)
}

export function genCalcHueVaule(Xa: number, Xb: number, max: number, multiply: number) {
  const toRad = Math.PI / 180
  const a = 360 / (Xb - Xa)
  const b = (-1 * a * toRad * (3 * Xa + Xb)) / 4

  const min = max * multiply
  const y = (max + min) / 2
  const scale = (max - min) / 2

  return (v: number) => {
    const rad = v * toRad
    return scale * Math.sin(a * rad + b) + y
  }
}

function isStableColor(color: number): boolean {
  return color >= 0 && color <= 255
}
function arrayToRgb(rgbArray: number[]): string {
  return rgbArray.length < 4 ? `rgb(${rgbArray.join(',')})` : `rgba(${rgbArray.join(',')})`
}

export function getAlphaColor(frontColor: string, backgroundColor: string): string {
  const [fR, fG, fB] = chroma(frontColor).rgb()
  const [bR, bG, bB] = chroma(backgroundColor).rgb()

  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA)
    const g = Math.round((fG - bG * (1 - fA)) / fA)
    const b = Math.round((fB - bB * (1 - fA)) / fA)
    if (isStableColor(r) && isStableColor(g) && isStableColor(b))
      return chroma(arrayToRgb([r, g, b, Math.round(fA * 100) / 100])).hex()
  }
  return chroma(arrayToRgb([fR, fG, fB, 1])).hex()
}
