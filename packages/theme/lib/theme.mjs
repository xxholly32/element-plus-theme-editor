/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mr(r) {
  return r < 0 ? -1 : r === 0 ? 0 : 1;
}
function wt(r, t, a) {
  return (1 - a) * r + a * t;
}
function W1(r, t, a) {
  return a < r ? r : a > t ? t : a;
}
function qt(r, t, a) {
  return a < r ? r : a > t ? t : a;
}
function H1(r) {
  return r = r % 360, r < 0 && (r = r + 360), r;
}
function xe(r, t) {
  const a = r[0] * t[0][0] + r[1] * t[0][1] + r[2] * t[0][2], o = r[0] * t[1][0] + r[1] * t[1][1] + r[2] * t[1][2], s = r[0] * t[2][0] + r[1] * t[2][1] + r[2] * t[2][2];
  return [a, o, s];
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J1 = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
], Z1 = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
], Q1 = [95.047, 100, 108.883];
function Oe(r, t, a) {
  return (255 << 24 | (r & 255) << 16 | (t & 255) << 8 | a & 255) >>> 0;
}
function vn(r) {
  const t = Hr(r[0]), a = Hr(r[1]), o = Hr(r[2]);
  return Oe(t, a, o);
}
function wn(r) {
  return r >> 16 & 255;
}
function Mn(r) {
  return r >> 8 & 255;
}
function Pn(r) {
  return r & 255;
}
function X1(r, t, a) {
  const o = Z1, s = o[0][0] * r + o[0][1] * t + o[0][2] * a, l = o[1][0] * r + o[1][1] * t + o[1][2] * a, u = o[2][0] * r + o[2][1] * t + o[2][2] * a, g = Hr(s), d = Hr(l), k = Hr(u);
  return Oe(g, d, k);
}
function K1(r) {
  const t = ft(wn(r)), a = ft(Mn(r)), o = ft(Pn(r));
  return xe([t, a, o], J1);
}
function rc(r) {
  const t = qr(r), a = Hr(t);
  return Oe(a, a, a);
}
function dn(r) {
  const t = K1(r)[1];
  return 116 * _n(t / 100) - 16;
}
function qr(r) {
  return 100 * ec((r + 16) / 116);
}
function Ce(r) {
  return _n(r / 100) * 116 - 16;
}
function ft(r) {
  const t = r / 255;
  return t <= 0.040449936 ? t / 12.92 * 100 : Math.pow((t + 0.055) / 1.055, 2.4) * 100;
}
function Hr(r) {
  const t = r / 100;
  let a = 0;
  return t <= 31308e-7 ? a = t * 12.92 : a = 1.055 * Math.pow(t, 1 / 2.4) - 0.055, W1(0, 255, Math.round(a * 255));
}
function tc() {
  return Q1;
}
function _n(r) {
  const t = 0.008856451679035631, a = 24389 / 27;
  return r > t ? Math.pow(r, 1 / 3) : (a * r + 16) / 116;
}
function ec(r) {
  const t = 0.008856451679035631, a = 24389 / 27, o = r * r * r;
  return o > t ? o : (116 * r - 16) / a;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(t = tc(), a = 200 / Math.PI * qr(50) / 100, o = 50, s = 2, l = !1) {
    const u = t, g = u[0] * 0.401288 + u[1] * 0.650173 + u[2] * -0.051461, d = u[0] * -0.250268 + u[1] * 1.204414 + u[2] * 0.045854, k = u[0] * -2079e-6 + u[1] * 0.048952 + u[2] * 0.953127, _ = 0.8 + s / 10, C = _ >= 0.9 ? wt(0.59, 0.69, (_ - 0.9) * 10) : wt(0.525, 0.59, (_ - 0.8) * 10);
    let O = l ? 1 : _ * (1 - 1 / 3.6 * Math.exp((-a - 42) / 92));
    O = O > 1 ? 1 : O < 0 ? 0 : O;
    const L = _, B = [
      O * (100 / g) + 1 - O,
      O * (100 / d) + 1 - O,
      O * (100 / k) + 1 - O
    ], w = 1 / (5 * a + 1), R = w * w * w * w, or = 1 - R, tr = R * a + 0.1 * or * or * Math.cbrt(5 * a), G = qr(o) / t[1], ar = 1.48 + Math.sqrt(G), Y = 0.725 / Math.pow(G, 0.2), I = Y, Z = [
      Math.pow(tr * B[0] * g / 100, 0.42),
      Math.pow(tr * B[1] * d / 100, 0.42),
      Math.pow(tr * B[2] * k / 100, 0.42)
    ], z = [
      400 * Z[0] / (Z[0] + 27.13),
      400 * Z[1] / (Z[1] + 27.13),
      400 * Z[2] / (Z[2] + 27.13)
    ], ir = (2 * z[0] + z[1] + 0.05 * z[2]) * Y;
    return new Ar(G, ir, Y, I, C, L, B, tr, Math.pow(tr, 0.25), ar);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(t, a, o, s, l, u, g, d, k, _) {
    this.n = t, this.aw = a, this.nbb = o, this.ncb = s, this.c = l, this.nc = u, this.rgbD = g, this.fl = d, this.fLRoot = k, this.z = _;
  }
}
Ar.DEFAULT = Ar.make();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(t, a, o, s, l, u, g, d, k) {
    this.hue = t, this.chroma = a, this.j = o, this.q = s, this.m = l, this.s = u, this.jstar = g, this.astar = d, this.bstar = k;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(t) {
    const a = this.jstar - t.jstar, o = this.astar - t.astar, s = this.bstar - t.bstar, l = Math.sqrt(a * a + o * o + s * s);
    return 1.41 * Math.pow(l, 0.63);
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(t) {
    return Mr.fromIntInViewingConditions(t, Ar.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(t, a) {
    const o = (t & 16711680) >> 16, s = (t & 65280) >> 8, l = t & 255, u = ft(o), g = ft(s), d = ft(l), k = 0.41233895 * u + 0.35762064 * g + 0.18051042 * d, _ = 0.2126 * u + 0.7152 * g + 0.0722 * d, C = 0.01932141 * u + 0.11916382 * g + 0.95034478 * d, O = 0.401288 * k + 0.650173 * _ - 0.051461 * C, L = -0.250268 * k + 1.204414 * _ + 0.045854 * C, B = -2079e-6 * k + 0.048952 * _ + 0.953127 * C, w = a.rgbD[0] * O, R = a.rgbD[1] * L, or = a.rgbD[2] * B, tr = Math.pow(a.fl * Math.abs(w) / 100, 0.42), G = Math.pow(a.fl * Math.abs(R) / 100, 0.42), ar = Math.pow(a.fl * Math.abs(or) / 100, 0.42), Y = mr(w) * 400 * tr / (tr + 27.13), I = mr(R) * 400 * G / (G + 27.13), Z = mr(or) * 400 * ar / (ar + 27.13), z = (11 * Y + -12 * I + Z) / 11, ir = (Y + I - 2 * Z) / 9, nr = (20 * Y + 20 * I + 21 * Z) / 20, Fr = (40 * Y + 20 * I + Z) / 20, $r = Math.atan2(ir, z) * 180 / Math.PI, kr = $r < 0 ? $r + 360 : $r >= 360 ? $r - 360 : $r, Jr = kr * Math.PI / 180, Zr = Fr * a.nbb, xr = 100 * Math.pow(Zr / a.aw, a.c * a.z), Ur = 4 / a.c * Math.sqrt(xr / 100) * (a.aw + 4) * a.fLRoot, gt = kr < 20.14 ? kr + 360 : kr, vt = 0.25 * (Math.cos(gt * Math.PI / 180 + 2) + 3.8), bt = 5e4 / 13 * vt * a.nc * a.ncb * Math.sqrt(z * z + ir * ir) / (nr + 0.305), Qr = Math.pow(bt, 0.9) * Math.pow(1.64 - Math.pow(0.29, a.n), 0.73), Xr = Qr * Math.sqrt(xr / 100), Ft = Xr * a.fLRoot, jt = 50 * Math.sqrt(Qr * a.c / (a.aw + 4)), Wt = (1 + 100 * 7e-3) * xr / (1 + 7e-3 * xr), xt = 1 / 0.0228 * Math.log(1 + 0.0228 * Ft), Ct = xt * Math.cos(Jr), Ht = xt * Math.sin(Jr);
    return new Mr(kr, Xr, xr, Ur, Ft, jt, Wt, Ct, Ht);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(t, a, o) {
    return Mr.fromJchInViewingConditions(t, a, o, Ar.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(t, a, o, s) {
    const l = 4 / s.c * Math.sqrt(t / 100) * (s.aw + 4) * s.fLRoot, u = a * s.fLRoot, g = a / Math.sqrt(t / 100), d = 50 * Math.sqrt(g * s.c / (s.aw + 4)), k = o * Math.PI / 180, _ = (1 + 100 * 7e-3) * t / (1 + 7e-3 * t), C = 1 / 0.0228 * Math.log(1 + 0.0228 * u), O = C * Math.cos(k), L = C * Math.sin(k);
    return new Mr(o, a, t, l, u, d, _, O, L);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(t, a, o) {
    return Mr.fromUcsInViewingConditions(t, a, o, Ar.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(t, a, o, s) {
    const l = a, u = o, g = Math.sqrt(l * l + u * u), k = (Math.exp(g * 0.0228) - 1) / 0.0228 / s.fLRoot;
    let _ = Math.atan2(u, l) * (180 / Math.PI);
    _ < 0 && (_ += 360);
    const C = t / (1 - (t - 100) * 7e-3);
    return Mr.fromJchInViewingConditions(C, k, _, s);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(Ar.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(t) {
    const a = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), o = Math.pow(a / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), s = this.hue * Math.PI / 180, l = 0.25 * (Math.cos(s + 2) + 3.8), u = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), g = l * (5e4 / 13) * t.nc * t.ncb, d = u / t.nbb, k = Math.sin(s), _ = Math.cos(s), C = 23 * (d + 0.305) * o / (23 * g + 11 * o * _ + 108 * o * k), O = C * _, L = C * k, B = (460 * d + 451 * O + 288 * L) / 1403, w = (460 * d - 891 * O - 261 * L) / 1403, R = (460 * d - 220 * O - 6300 * L) / 1403, or = Math.max(0, 27.13 * Math.abs(B) / (400 - Math.abs(B))), tr = mr(B) * (100 / t.fl) * Math.pow(or, 1 / 0.42), G = Math.max(0, 27.13 * Math.abs(w) / (400 - Math.abs(w))), ar = mr(w) * (100 / t.fl) * Math.pow(G, 1 / 0.42), Y = Math.max(0, 27.13 * Math.abs(R) / (400 - Math.abs(R))), I = mr(R) * (100 / t.fl) * Math.pow(Y, 1 / 0.42), Z = tr / t.rgbD[0], z = ar / t.rgbD[1], ir = I / t.rgbD[2], nr = 1.86206786 * Z - 1.01125463 * z + 0.14918677 * ir, Fr = 0.38752654 * Z + 0.62144744 * z - 897398e-8 * ir, Ir = -0.0158415 * Z - 0.03412294 * z + 1.04996444 * ir;
    return X1(nr, Fr, Ir);
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(t, a, o, s) {
    const l = 0.401288 * t + 0.650173 * a - 0.051461 * o, u = -0.250268 * t + 1.204414 * a + 0.045854 * o, g = -2079e-6 * t + 0.048952 * a + 0.953127 * o, d = s.rgbD[0] * l, k = s.rgbD[1] * u, _ = s.rgbD[2] * g, C = Math.pow(s.fl * Math.abs(d) / 100, 0.42), O = Math.pow(s.fl * Math.abs(k) / 100, 0.42), L = Math.pow(s.fl * Math.abs(_) / 100, 0.42), B = mr(d) * 400 * C / (C + 27.13), w = mr(k) * 400 * O / (O + 27.13), R = mr(_) * 400 * L / (L + 27.13), or = (11 * B + -12 * w + R) / 11, tr = (B + w - 2 * R) / 9, G = (20 * B + 20 * w + 21 * R) / 20, ar = (40 * B + 20 * w + R) / 20, I = Math.atan2(tr, or) * 180 / Math.PI, Z = I < 0 ? I + 360 : I >= 360 ? I - 360 : I, z = Z * Math.PI / 180, ir = ar * s.nbb, nr = 100 * Math.pow(ir / s.aw, s.c * s.z), Fr = 4 / s.c * Math.sqrt(nr / 100) * (s.aw + 4) * s.fLRoot, Ir = Z < 20.14 ? Z + 360 : Z, $r = 1 / 4 * (Math.cos(Ir * Math.PI / 180 + 2) + 3.8), Jr = 5e4 / 13 * $r * s.nc * s.ncb * Math.sqrt(or * or + tr * tr) / (G + 0.305), Zr = Math.pow(Jr, 0.9) * Math.pow(1.64 - Math.pow(0.29, s.n), 0.73), xr = Zr * Math.sqrt(nr / 100), Ur = xr * s.fLRoot, gt = 50 * Math.sqrt(Zr * s.c / (s.aw + 4)), vt = (1 + 100 * 7e-3) * nr / (1 + 7e-3 * nr), dt = Math.log(1 + 0.0228 * Ur) / 0.0228, bt = dt * Math.cos(z), Qr = dt * Math.sin(z);
    return new Mr(Z, xr, nr, Fr, Ur, gt, vt, bt, Qr);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(t) {
    const a = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), o = Math.pow(a / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), s = this.hue * Math.PI / 180, l = 0.25 * (Math.cos(s + 2) + 3.8), u = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), g = l * (5e4 / 13) * t.nc * t.ncb, d = u / t.nbb, k = Math.sin(s), _ = Math.cos(s), C = 23 * (d + 0.305) * o / (23 * g + 11 * o * _ + 108 * o * k), O = C * _, L = C * k, B = (460 * d + 451 * O + 288 * L) / 1403, w = (460 * d - 891 * O - 261 * L) / 1403, R = (460 * d - 220 * O - 6300 * L) / 1403, or = Math.max(0, 27.13 * Math.abs(B) / (400 - Math.abs(B))), tr = mr(B) * (100 / t.fl) * Math.pow(or, 1 / 0.42), G = Math.max(0, 27.13 * Math.abs(w) / (400 - Math.abs(w))), ar = mr(w) * (100 / t.fl) * Math.pow(G, 1 / 0.42), Y = Math.max(0, 27.13 * Math.abs(R) / (400 - Math.abs(R))), I = mr(R) * (100 / t.fl) * Math.pow(Y, 1 / 0.42), Z = tr / t.rgbD[0], z = ar / t.rgbD[1], ir = I / t.rgbD[2], nr = 1.86206786 * Z - 1.01125463 * z + 0.14918677 * ir, Fr = 0.38752654 * Z + 0.62144744 * z - 897398e-8 * ir, Ir = -0.0158415 * Z - 0.03412294 * z + 1.04996444 * ir;
    return [nr, Fr, Ir];
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(t) {
    return (t + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(t) {
    const a = t / 100;
    let o = 0;
    return a <= 31308e-7 ? o = a * 12.92 : o = 1.055 * Math.pow(a, 1 / 2.4) - 0.055, o * 255;
  }
  static chromaticAdaptation(t) {
    const a = Math.pow(Math.abs(t), 0.42);
    return mr(t) * 400 * a / (a + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(t) {
    const a = xe(t, E.SCALED_DISCOUNT_FROM_LINRGB), o = E.chromaticAdaptation(a[0]), s = E.chromaticAdaptation(a[1]), l = E.chromaticAdaptation(a[2]), u = (11 * o + -12 * s + l) / 11, g = (o + s - 2 * l) / 9;
    return Math.atan2(g, u);
  }
  static areInCyclicOrder(t, a, o) {
    const s = E.sanitizeRadians(a - t), l = E.sanitizeRadians(o - t);
    return s < l;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(t, a, o) {
    return (a - t) / (o - t);
  }
  static lerpPoint(t, a, o) {
    return [
      t[0] + (o[0] - t[0]) * a,
      t[1] + (o[1] - t[1]) * a,
      t[2] + (o[2] - t[2]) * a
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(t, a, o, s) {
    const l = E.intercept(t[s], a, o[s]);
    return E.lerpPoint(t, l, o);
  }
  static isBounded(t) {
    return 0 <= t && t <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(t, a) {
    const o = E.Y_FROM_LINRGB[0], s = E.Y_FROM_LINRGB[1], l = E.Y_FROM_LINRGB[2], u = a % 4 <= 1 ? 0 : 100, g = a % 2 === 0 ? 0 : 100;
    if (a < 4) {
      const d = u, k = g, _ = (t - d * s - k * l) / o;
      return E.isBounded(_) ? [_, d, k] : [-1, -1, -1];
    } else if (a < 8) {
      const d = u, k = g, _ = (t - k * o - d * l) / s;
      return E.isBounded(_) ? [k, _, d] : [-1, -1, -1];
    } else {
      const d = u, k = g, _ = (t - d * o - k * s) / l;
      return E.isBounded(_) ? [d, k, _] : [-1, -1, -1];
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(t, a) {
    let o = [-1, -1, -1], s = o, l = 0, u = 0, g = !1, d = !0;
    for (let k = 0; k < 12; k++) {
      const _ = E.nthVertex(t, k);
      if (_[0] < 0)
        continue;
      const C = E.hueOf(_);
      if (!g) {
        o = _, s = _, l = C, u = C, g = !0;
        continue;
      }
      (d || E.areInCyclicOrder(l, C, u)) && (d = !1, E.areInCyclicOrder(l, a, C) ? (s = _, u = C) : (o = _, l = C));
    }
    return [o, s];
  }
  static midpoint(t, a) {
    return [
      (t[0] + a[0]) / 2,
      (t[1] + a[1]) / 2,
      (t[2] + a[2]) / 2
    ];
  }
  static criticalPlaneBelow(t) {
    return Math.floor(t - 0.5);
  }
  static criticalPlaneAbove(t) {
    return Math.ceil(t - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(t, a) {
    const o = E.bisectToSegment(t, a);
    let s = o[0], l = E.hueOf(s), u = o[1];
    for (let g = 0; g < 3; g++)
      if (s[g] !== u[g]) {
        let d = -1, k = 255;
        s[g] < u[g] ? (d = E.criticalPlaneBelow(E.trueDelinearized(s[g])), k = E.criticalPlaneAbove(E.trueDelinearized(u[g]))) : (d = E.criticalPlaneAbove(E.trueDelinearized(s[g])), k = E.criticalPlaneBelow(E.trueDelinearized(u[g])));
        for (let _ = 0; _ < 8 && !(Math.abs(k - d) <= 1); _++) {
          const C = Math.floor((d + k) / 2), O = E.CRITICAL_PLANES[C], L = E.setCoordinate(s, O, u, g), B = E.hueOf(L);
          E.areInCyclicOrder(l, a, B) ? (u = L, k = C) : (s = L, l = B, d = C);
        }
      }
    return E.midpoint(s, u);
  }
  static inverseChromaticAdaptation(t) {
    const a = Math.abs(t), o = Math.max(0, 27.13 * a / (400 - a));
    return mr(t) * Math.pow(o, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(t, a, o) {
    let s = Math.sqrt(o) * 11;
    const l = Ar.DEFAULT, u = 1 / Math.pow(1.64 - Math.pow(0.29, l.n), 0.73), d = 0.25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * l.nc * l.ncb, k = Math.sin(t), _ = Math.cos(t);
    for (let C = 0; C < 5; C++) {
      const O = s / 100, L = a === 0 || s === 0 ? 0 : a / Math.sqrt(O), B = Math.pow(L * u, 1 / 0.9), R = l.aw * Math.pow(O, 1 / l.c / l.z) / l.nbb, or = 23 * (R + 0.305) * B / (23 * d + 11 * B * _ + 108 * B * k), tr = or * _, G = or * k, ar = (460 * R + 451 * tr + 288 * G) / 1403, Y = (460 * R - 891 * tr - 261 * G) / 1403, I = (460 * R - 220 * tr - 6300 * G) / 1403, Z = E.inverseChromaticAdaptation(ar), z = E.inverseChromaticAdaptation(Y), ir = E.inverseChromaticAdaptation(I), nr = xe([Z, z, ir], E.LINRGB_FROM_SCALED_DISCOUNT);
      if (nr[0] < 0 || nr[1] < 0 || nr[2] < 0)
        return 0;
      const Fr = E.Y_FROM_LINRGB[0], Ir = E.Y_FROM_LINRGB[1], $r = E.Y_FROM_LINRGB[2], kr = Fr * nr[0] + Ir * nr[1] + $r * nr[2];
      if (kr <= 0)
        return 0;
      if (C === 4 || Math.abs(kr - o) < 2e-3)
        return nr[0] > 100.01 || nr[1] > 100.01 || nr[2] > 100.01 ? 0 : vn(nr);
      s = s - (kr - o) * s / (2 * kr);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(t, a, o) {
    if (a < 1e-4 || o < 1e-4 || o > 99.9999)
      return rc(o);
    t = H1(t);
    const s = t / 180 * Math.PI, l = qr(o), u = E.findResultByJ(s, a, l);
    if (u !== 0)
      return u;
    const g = E.bisectToLimit(l, s);
    return vn(g);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(t, a, o) {
    return Mr.fromInt(E.solveToInt(t, a, o));
  }
}
E.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
E.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
E.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
E.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er {
  static from(t, a, o) {
    return new Er(E.solveToInt(t, a, o));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(t) {
    return new Er(t);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(t) {
    this.setInternalState(E.solveToInt(t, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(t) {
    this.setInternalState(E.solveToInt(this.internalHue, t, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(t) {
    this.setInternalState(E.solveToInt(this.internalHue, this.internalChroma, t));
  }
  constructor(t) {
    this.argb = t;
    const a = Mr.fromInt(t);
    this.internalHue = a.hue, this.internalChroma = a.chroma, this.internalTone = dn(t), this.argb = t;
  }
  setInternalState(t) {
    const a = Mr.fromInt(t);
    this.internalHue = a.hue, this.internalChroma = a.chroma, this.internalTone = dn(t), this.argb = t;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(t) {
    const o = Mr.fromInt(this.toInt()).xyzInViewingConditions(t), s = Mr.fromXyzInViewingConditions(o[0], o[1], o[2], Ar.make());
    return Er.from(s.hue, s.chroma, Ce(o[1]));
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(t, a) {
    return t = qt(0, 100, t), a = qt(0, 100, a), gr.ratioOfYs(qr(t), qr(a));
  }
  static ratioOfYs(t, a) {
    const o = t > a ? t : a, s = o === a ? t : a;
    return (o + 5) / (s + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(t, a) {
    if (t < 0 || t > 100)
      return -1;
    const o = qr(t), s = a * (o + 5) - 5, l = gr.ratioOfYs(s, o), u = Math.abs(l - a);
    if (l < a && u > 0.04)
      return -1;
    const g = Ce(s) + 0.4;
    return g < 0 || g > 100 ? -1 : g;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(t, a) {
    if (t < 0 || t > 100)
      return -1;
    const o = qr(t), s = (o + 5) / a - 5, l = gr.ratioOfYs(o, s), u = Math.abs(l - a);
    if (l < a && u > 0.04)
      return -1;
    const g = Ce(s) - 0.4;
    return g < 0 || g > 100 ? -1 : g;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(t, a) {
    const o = gr.lighter(t, a);
    return o < 0 ? 100 : o;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(t, a) {
    const o = gr.darker(t, a);
    return o < 0 ? 0 : o;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(t) {
    const a = Math.round(t.hue) >= 90 && Math.round(t.hue) <= 111, o = Math.round(t.chroma) > 16, s = Math.round(t.tone) < 65;
    return a && o && s;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(t) {
    return Re.isDisliked(t) ? Er.from(t.hue, t.chroma, 70) : t;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(t) {
    return new F(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(t, a, o, s, l, u, g, d) {
    if (this.name = t, this.palette = a, this.tone = o, this.isBackground = s, this.background = l, this.secondBackground = u, this.contrastCurve = g, this.toneDeltaPair = d, this.hctCache = /* @__PURE__ */ new Map(), !l && u)
      throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);
    if (!l && g)
      throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);
    if (l && !g)
      throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`);
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(t) {
    return this.getHct(t).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(t) {
    const a = this.hctCache.get(t);
    if (a != null)
      return a;
    const o = this.getTone(t), s = this.palette(t).getHct(o);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(t, s), s;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(t) {
    const a = t.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const o = this.toneDeltaPair(t), s = o.roleA, l = o.roleB, u = o.delta, g = o.polarity, d = o.stayTogether, _ = this.background(t).getTone(t), C = g === "nearer" || g === "lighter" && !t.isDark || g === "darker" && t.isDark, O = C ? s : l, L = C ? l : s, B = this.name === O.name, w = t.isDark ? 1 : -1, R = O.contrastCurve.getContrast(t.contrastLevel), or = L.contrastCurve.getContrast(t.contrastLevel), tr = O.tone(t);
      let G = gr.ratioOfTones(_, tr) >= R ? tr : F.foregroundTone(_, R);
      const ar = L.tone(t);
      let Y = gr.ratioOfTones(_, ar) >= or ? ar : F.foregroundTone(_, or);
      return a && (G = F.foregroundTone(_, R), Y = F.foregroundTone(_, or)), (Y - G) * w >= u || (Y = qt(0, 100, G + u * w), (Y - G) * w >= u || (G = qt(0, 100, Y - u * w))), 50 <= G && G < 60 ? w > 0 ? (G = 60, Y = Math.max(Y, G + u * w)) : (G = 49, Y = Math.min(Y, G + u * w)) : 50 <= Y && Y < 60 && (d ? w > 0 ? (G = 60, Y = Math.max(Y, G + u * w)) : (G = 49, Y = Math.min(Y, G + u * w)) : w > 0 ? Y = 60 : Y = 49), B ? G : Y;
    } else {
      let o = this.tone(t);
      if (this.background == null)
        return o;
      const s = this.background(t).getTone(t), l = this.contrastCurve.getContrast(t.contrastLevel);
      if (gr.ratioOfTones(s, o) >= l || (o = F.foregroundTone(s, l)), a && (o = F.foregroundTone(s, l)), this.isBackground && 50 <= o && o < 60 && (gr.ratioOfTones(49, s) >= l ? o = 49 : o = 60), this.secondBackground) {
        const [u, g] = [this.background, this.secondBackground], [d, k] = [u(t).getTone(t), g(t).getTone(t)], [_, C] = [Math.max(d, k), Math.min(d, k)];
        if (gr.ratioOfTones(_, o) >= l && gr.ratioOfTones(C, o) >= l)
          return o;
        const O = gr.lighter(_, l), L = gr.darker(C, l), B = [];
        return O !== -1 && B.push(O), L !== -1 && B.push(L), F.tonePrefersLightForeground(d) || F.tonePrefersLightForeground(k) ? O < 0 ? 100 : O : B.length === 1 ? B[0] : L < 0 ? 0 : L;
      }
      return o;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(t, a) {
    const o = gr.lighterUnsafe(t, a), s = gr.darkerUnsafe(t, a), l = gr.ratioOfTones(o, t), u = gr.ratioOfTones(s, t);
    if (F.tonePrefersLightForeground(t)) {
      const d = Math.abs(l - u) < 0.1 && l < a && u < a;
      return l >= a || l >= u || d ? o : s;
    } else
      return u >= a || u >= l ? s : o;
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(t) {
    return Math.round(t) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(t) {
    return Math.round(t) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(t) {
    return F.tonePrefersLightForeground(t) && !F.toneAllowsLightForeground(t) ? 49 : t;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pt;
(function(r) {
  r[r.MONOCHROME = 0] = "MONOCHROME", r[r.NEUTRAL = 1] = "NEUTRAL", r[r.TONAL_SPOT = 2] = "TONAL_SPOT", r[r.VIBRANT = 3] = "VIBRANT", r[r.EXPRESSIVE = 4] = "EXPRESSIVE", r[r.FIDELITY = 5] = "FIDELITY", r[r.CONTENT = 6] = "CONTENT", r[r.RAINBOW = 7] = "RAINBOW", r[r.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(Pt || (Pt = {}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(t, a, o, s) {
    this.low = t, this.normal = a, this.medium = o, this.high = s;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(t) {
    return t <= -1 ? this.low : t < 0 ? wt(this.low, this.normal, (t - -1) / 1) : t < 0.5 ? wt(this.normal, this.medium, (t - 0) / 0.5) : t < 1 ? wt(this.medium, this.high, (t - 0.5) / 0.5) : this.high;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(t, a, o, s, l) {
    this.roleA = t, this.roleB = a, this.delta = o, this.polarity = s, this.stayTogether = l;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(r) {
  return r.variant === Pt.FIDELITY || r.variant === Pt.CONTENT;
}
function cr(r) {
  return r.variant === Pt.MONOCHROME;
}
function ac(r, t, a, o) {
  let s = a, l = Er.from(r, t, a);
  if (l.chroma < t) {
    let u = l.chroma;
    for (; l.chroma < t; ) {
      s += o ? -1 : 1;
      const g = Er.from(r, t, s);
      if (u > g.chroma || Math.abs(g.chroma - t) < 0.4)
        break;
      const d = Math.abs(g.chroma - t), k = Math.abs(l.chroma - t);
      d < k && (l = g), u = Math.max(u, g.chroma);
    }
  }
  return s;
}
function nc(r) {
  return Ar.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    r.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  );
}
function Be(r, t) {
  const a = r.inViewingConditions(nc(t));
  return F.tonePrefersLightForeground(r.tone) && !F.toneAllowsLightForeground(a.tone) ? F.enableLightForeground(r.tone) : F.enableLightForeground(a.tone);
}
class m {
  static highestSurface(t) {
    return t.isDark ? m.surfaceBright : m.surfaceDim;
  }
}
m.contentAccentToneDelta = 15;
m.primaryPaletteKeyColor = F.fromPalette({
  name: "primary_palette_key_color",
  palette: (r) => r.primaryPalette,
  tone: (r) => r.primaryPalette.keyColor.tone
});
m.secondaryPaletteKeyColor = F.fromPalette({
  name: "secondary_palette_key_color",
  palette: (r) => r.secondaryPalette,
  tone: (r) => r.secondaryPalette.keyColor.tone
});
m.tertiaryPaletteKeyColor = F.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => r.tertiaryPalette.keyColor.tone
});
m.neutralPaletteKeyColor = F.fromPalette({
  name: "neutral_palette_key_color",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.neutralPalette.keyColor.tone
});
m.neutralVariantPaletteKeyColor = F.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.neutralVariantPalette.keyColor.tone
});
m.background = F.fromPalette({
  name: "background",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 6 : 98,
  isBackground: !0
});
m.onBackground = F.fromPalette({
  name: "on_background",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 90 : 10,
  background: (r) => m.background,
  contrastCurve: new W(3, 3, 4.5, 7)
});
m.surface = F.fromPalette({
  name: "surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 6 : 98,
  isBackground: !0
});
m.surfaceDim = F.fromPalette({
  name: "surface_dim",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 6 : 87,
  isBackground: !0
});
m.surfaceBright = F.fromPalette({
  name: "surface_bright",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 24 : 98,
  isBackground: !0
});
m.surfaceContainerLowest = F.fromPalette({
  name: "surface_container_lowest",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 4 : 100,
  isBackground: !0
});
m.surfaceContainerLow = F.fromPalette({
  name: "surface_container_low",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 10 : 96,
  isBackground: !0
});
m.surfaceContainer = F.fromPalette({
  name: "surface_container",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 12 : 94,
  isBackground: !0
});
m.surfaceContainerHigh = F.fromPalette({
  name: "surface_container_high",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 17 : 92,
  isBackground: !0
});
m.surfaceContainerHighest = F.fromPalette({
  name: "surface_container_highest",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 22 : 90,
  isBackground: !0
});
m.onSurface = F.fromPalette({
  name: "on_surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 90 : 10,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.surfaceVariant = F.fromPalette({
  name: "surface_variant",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 30 : 90,
  isBackground: !0
});
m.onSurfaceVariant = F.fromPalette({
  name: "on_surface_variant",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 80 : 30,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(3, 4.5, 7, 11)
});
m.inverseSurface = F.fromPalette({
  name: "inverse_surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 90 : 20
});
m.inverseOnSurface = F.fromPalette({
  name: "inverse_on_surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 20 : 95,
  background: (r) => m.inverseSurface,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.outline = F.fromPalette({
  name: "outline",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 60 : 50,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1.5, 3, 4.5, 7)
});
m.outlineVariant = F.fromPalette({
  name: "outline_variant",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 30 : 80,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7)
});
m.shadow = F.fromPalette({
  name: "shadow",
  palette: (r) => r.neutralPalette,
  tone: (r) => 0
});
m.scrim = F.fromPalette({
  name: "scrim",
  palette: (r) => r.neutralPalette,
  tone: (r) => 0
});
m.surfaceTint = F.fromPalette({
  name: "surface_tint",
  palette: (r) => r.primaryPalette,
  tone: (r) => r.isDark ? 80 : 40,
  isBackground: !0
});
m.primary = F.fromPalette({
  name: "primary",
  palette: (r) => r.primaryPalette,
  tone: (r) => cr(r) ? r.isDark ? 100 : 0 : r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new yr(m.primaryContainer, m.primary, 15, "nearer", !1)
});
m.onPrimary = F.fromPalette({
  name: "on_primary",
  palette: (r) => r.primaryPalette,
  tone: (r) => cr(r) ? r.isDark ? 10 : 90 : r.isDark ? 20 : 100,
  background: (r) => m.primary,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.primaryContainer = F.fromPalette({
  name: "primary_container",
  palette: (r) => r.primaryPalette,
  tone: (r) => ht(r) ? Be(r.sourceColorHct, r) : cr(r) ? r.isDark ? 85 : 25 : r.isDark ? 30 : 90,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.primaryContainer, m.primary, 15, "nearer", !1)
});
m.onPrimaryContainer = F.fromPalette({
  name: "on_primary_container",
  palette: (r) => r.primaryPalette,
  tone: (r) => ht(r) ? F.foregroundTone(m.primaryContainer.tone(r), 4.5) : cr(r) ? r.isDark ? 0 : 100 : r.isDark ? 90 : 10,
  background: (r) => m.primaryContainer,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.inversePrimary = F.fromPalette({
  name: "inverse_primary",
  palette: (r) => r.primaryPalette,
  tone: (r) => r.isDark ? 40 : 80,
  background: (r) => m.inverseSurface,
  contrastCurve: new W(3, 4.5, 7, 11)
});
m.secondary = F.fromPalette({
  name: "secondary",
  palette: (r) => r.secondaryPalette,
  tone: (r) => r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new yr(m.secondaryContainer, m.secondary, 15, "nearer", !1)
});
m.onSecondary = F.fromPalette({
  name: "on_secondary",
  palette: (r) => r.secondaryPalette,
  tone: (r) => cr(r) ? r.isDark ? 10 : 100 : r.isDark ? 20 : 100,
  background: (r) => m.secondary,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.secondaryContainer = F.fromPalette({
  name: "secondary_container",
  palette: (r) => r.secondaryPalette,
  tone: (r) => {
    const t = r.isDark ? 30 : 90;
    if (cr(r))
      return r.isDark ? 30 : 85;
    if (!ht(r))
      return t;
    let a = ac(r.secondaryPalette.hue, r.secondaryPalette.chroma, t, !r.isDark);
    return a = Be(r.secondaryPalette.getHct(a), r), a;
  },
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.secondaryContainer, m.secondary, 15, "nearer", !1)
});
m.onSecondaryContainer = F.fromPalette({
  name: "on_secondary_container",
  palette: (r) => r.secondaryPalette,
  tone: (r) => ht(r) ? F.foregroundTone(m.secondaryContainer.tone(r), 4.5) : r.isDark ? 90 : 10,
  background: (r) => m.secondaryContainer,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.tertiary = F.fromPalette({
  name: "tertiary",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? r.isDark ? 90 : 25 : r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new yr(m.tertiaryContainer, m.tertiary, 15, "nearer", !1)
});
m.onTertiary = F.fromPalette({
  name: "on_tertiary",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? r.isDark ? 10 : 90 : r.isDark ? 20 : 100,
  background: (r) => m.tertiary,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.tertiaryContainer = F.fromPalette({
  name: "tertiary_container",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => {
    if (cr(r))
      return r.isDark ? 60 : 49;
    if (!ht(r))
      return r.isDark ? 30 : 90;
    const t = Be(r.tertiaryPalette.getHct(r.sourceColorHct.tone), r), a = r.tertiaryPalette.getHct(t);
    return Re.fixIfDisliked(a).tone;
  },
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.tertiaryContainer, m.tertiary, 15, "nearer", !1)
});
m.onTertiaryContainer = F.fromPalette({
  name: "on_tertiary_container",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? r.isDark ? 0 : 100 : ht(r) ? F.foregroundTone(m.tertiaryContainer.tone(r), 4.5) : r.isDark ? 90 : 10,
  background: (r) => m.tertiaryContainer,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.error = F.fromPalette({
  name: "error",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new yr(m.errorContainer, m.error, 15, "nearer", !1)
});
m.onError = F.fromPalette({
  name: "on_error",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 20 : 100,
  background: (r) => m.error,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.errorContainer = F.fromPalette({
  name: "error_container",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 30 : 90,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.errorContainer, m.error, 15, "nearer", !1)
});
m.onErrorContainer = F.fromPalette({
  name: "on_error_container",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 90 : 10,
  background: (r) => m.errorContainer,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.primaryFixed = F.fromPalette({
  name: "primary_fixed",
  palette: (r) => r.primaryPalette,
  tone: (r) => cr(r) ? 40 : 90,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.primaryFixed, m.primaryFixedDim, 10, "lighter", !0)
});
m.primaryFixedDim = F.fromPalette({
  name: "primary_fixed_dim",
  palette: (r) => r.primaryPalette,
  tone: (r) => cr(r) ? 30 : 80,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.primaryFixed, m.primaryFixedDim, 10, "lighter", !0)
});
m.onPrimaryFixed = F.fromPalette({
  name: "on_primary_fixed",
  palette: (r) => r.primaryPalette,
  tone: (r) => cr(r) ? 100 : 10,
  background: (r) => m.primaryFixedDim,
  secondBackground: (r) => m.primaryFixed,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.onPrimaryFixedVariant = F.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (r) => r.primaryPalette,
  tone: (r) => cr(r) ? 90 : 30,
  background: (r) => m.primaryFixedDim,
  secondBackground: (r) => m.primaryFixed,
  contrastCurve: new W(3, 4.5, 7, 11)
});
m.secondaryFixed = F.fromPalette({
  name: "secondary_fixed",
  palette: (r) => r.secondaryPalette,
  tone: (r) => cr(r) ? 80 : 90,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.secondaryFixed, m.secondaryFixedDim, 10, "lighter", !0)
});
m.secondaryFixedDim = F.fromPalette({
  name: "secondary_fixed_dim",
  palette: (r) => r.secondaryPalette,
  tone: (r) => cr(r) ? 70 : 80,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.secondaryFixed, m.secondaryFixedDim, 10, "lighter", !0)
});
m.onSecondaryFixed = F.fromPalette({
  name: "on_secondary_fixed",
  palette: (r) => r.secondaryPalette,
  tone: (r) => 10,
  background: (r) => m.secondaryFixedDim,
  secondBackground: (r) => m.secondaryFixed,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.onSecondaryFixedVariant = F.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (r) => r.secondaryPalette,
  tone: (r) => cr(r) ? 25 : 30,
  background: (r) => m.secondaryFixedDim,
  secondBackground: (r) => m.secondaryFixed,
  contrastCurve: new W(3, 4.5, 7, 11)
});
m.tertiaryFixed = F.fromPalette({
  name: "tertiary_fixed",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? 40 : 90,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.tertiaryFixed, m.tertiaryFixedDim, 10, "lighter", !0)
});
m.tertiaryFixedDim = F.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? 30 : 80,
  isBackground: !0,
  background: (r) => m.highestSurface(r),
  contrastCurve: new W(1, 1, 3, 7),
  toneDeltaPair: (r) => new yr(m.tertiaryFixed, m.tertiaryFixedDim, 10, "lighter", !0)
});
m.onTertiaryFixed = F.fromPalette({
  name: "on_tertiary_fixed",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? 100 : 10,
  background: (r) => m.tertiaryFixedDim,
  secondBackground: (r) => m.tertiaryFixed,
  contrastCurve: new W(4.5, 7, 11, 21)
});
m.onTertiaryFixedVariant = F.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => cr(r) ? 90 : 30,
  background: (r) => m.tertiaryFixedDim,
  secondBackground: (r) => m.tertiaryFixed,
  contrastCurve: new W(3, 4.5, 7, 11)
});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oc(r) {
  const t = wn(r), a = Mn(r), o = Pn(r), s = [t.toString(16), a.toString(16), o.toString(16)];
  for (const [l, u] of s.entries())
    u.length === 1 && (s[l] = "0" + u);
  return "#" + s.join("");
}
function $n(r) {
  r = r.replace("#", "");
  const t = r.length === 3, a = r.length === 6, o = r.length === 8;
  if (!t && !a && !o)
    throw new Error("unexpected hex " + r);
  let s = 0, l = 0, u = 0;
  return t ? (s = Rr(r.slice(0, 1).repeat(2)), l = Rr(r.slice(1, 2).repeat(2)), u = Rr(r.slice(2, 3).repeat(2))) : a ? (s = Rr(r.slice(0, 2)), l = Rr(r.slice(2, 4)), u = Rr(r.slice(4, 6))) : o && (s = Rr(r.slice(2, 4)), l = Rr(r.slice(4, 6)), u = Rr(r.slice(6, 8))), (255 << 24 | (s & 255) << 16 | (l & 255) << 8 | u & 255) >>> 0;
}
function Rr(r) {
  return parseInt(r, 16);
}
var sc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Le(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Fn = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(r, t) {
  (function(a, o) {
    r.exports = o();
  })(sc, function() {
    for (var a = function(e, n, c) {
      return n === void 0 && (n = 0), c === void 0 && (c = 1), e < n ? n : e > c ? c : e;
    }, o = a, s = function(e) {
      e._clipped = !1, e._unclipped = e.slice(0);
      for (var n = 0; n <= 3; n++)
        n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), e[n] = o(e[n], 0, 255)) : n === 3 && (e[n] = o(e[n], 0, 1));
      return e;
    }, l = {}, u = 0, g = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; u < g.length; u += 1) {
      var d = g[u];
      l["[object " + d + "]"] = d.toLowerCase();
    }
    var k = function(e) {
      return l[Object.prototype.toString.call(e)] || "object";
    }, _ = k, C = function(e, n) {
      return n === void 0 && (n = null), e.length >= 3 ? Array.prototype.slice.call(e) : _(e[0]) == "object" && n ? n.split("").filter(function(c) {
        return e[0][c] !== void 0;
      }).map(function(c) {
        return e[0][c];
      }) : e[0];
    }, O = k, L = function(e) {
      if (e.length < 2)
        return null;
      var n = e.length - 1;
      return O(e[n]) == "string" ? e[n].toLowerCase() : null;
    }, B = Math.PI, w = {
      clip_rgb: s,
      limit: a,
      type: k,
      unpack: C,
      last: L,
      PI: B,
      TWOPI: B * 2,
      PITHIRD: B / 3,
      DEG2RAD: B / 180,
      RAD2DEG: 180 / B
    }, R = {
      format: {},
      autodetect: []
    }, or = w.last, tr = w.clip_rgb, G = w.type, ar = R, Y = function() {
      for (var n = [], c = arguments.length; c--; )
        n[c] = arguments[c];
      var i = this;
      if (G(n[0]) === "object" && n[0].constructor && n[0].constructor === this.constructor)
        return n[0];
      var h = or(n), v = !1;
      if (!h) {
        v = !0, ar.sorted || (ar.autodetect = ar.autodetect.sort(function(M, x) {
          return x.p - M.p;
        }), ar.sorted = !0);
        for (var f = 0, b = ar.autodetect; f < b.length; f += 1) {
          var p = b[f];
          if (h = p.test.apply(p, n), h)
            break;
        }
      }
      if (ar.format[h]) {
        var y = ar.format[h].apply(null, v ? n : n.slice(0, -1));
        i._rgb = tr(y);
      } else
        throw new Error("unknown format: " + n);
      i._rgb.length === 3 && i._rgb.push(1);
    };
    Y.prototype.toString = function() {
      return G(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var I = Y, Z = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(Z.Color, [null].concat(e)))();
    };
    Z.Color = I, Z.version = "2.4.2";
    var z = Z, ir = w.unpack, nr = Math.max, Fr = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = ir(e, "rgb"), i = c[0], h = c[1], v = c[2];
      i = i / 255, h = h / 255, v = v / 255;
      var f = 1 - nr(i, nr(h, v)), b = f < 1 ? 1 / (1 - f) : 0, p = (1 - i - f) * b, y = (1 - h - f) * b, M = (1 - v - f) * b;
      return [p, y, M, f];
    }, Ir = Fr, $r = w.unpack, kr = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = $r(e, "cmyk");
      var c = e[0], i = e[1], h = e[2], v = e[3], f = e.length > 4 ? e[4] : 1;
      return v === 1 ? [0, 0, 0, f] : [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - v),
        // r
        i >= 1 ? 0 : 255 * (1 - i) * (1 - v),
        // g
        h >= 1 ? 0 : 255 * (1 - h) * (1 - v),
        // b
        f
      ];
    }, Jr = kr, Zr = z, xr = I, Ur = R, gt = w.unpack, vt = w.type, dt = Ir;
    xr.prototype.cmyk = function() {
      return dt(this._rgb);
    }, Zr.cmyk = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(xr, [null].concat(e, ["cmyk"])))();
    }, Ur.format.cmyk = Jr, Ur.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = gt(e, "cmyk"), vt(e) === "array" && e.length === 4)
          return "cmyk";
      }
    });
    var bt = w.unpack, Qr = w.last, Xr = function(e) {
      return Math.round(e * 100) / 100;
    }, Ft = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = bt(e, "hsla"), i = Qr(e) || "lsa";
      return c[0] = Xr(c[0] || 0), c[1] = Xr(c[1] * 100) + "%", c[2] = Xr(c[2] * 100) + "%", i === "hsla" || c.length > 3 && c[3] < 1 ? (c[3] = c.length > 3 ? c[3] : 1, i = "hsla") : c.length = 3, i + "(" + c.join(",") + ")";
    }, jt = Ft, Wt = w.unpack, xt = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = Wt(e, "rgba");
      var c = e[0], i = e[1], h = e[2];
      c /= 255, i /= 255, h /= 255;
      var v = Math.min(c, i, h), f = Math.max(c, i, h), b = (f + v) / 2, p, y;
      return f === v ? (p = 0, y = Number.NaN) : p = b < 0.5 ? (f - v) / (f + v) : (f - v) / (2 - f - v), c == f ? y = (i - h) / (f - v) : i == f ? y = 2 + (h - c) / (f - v) : h == f && (y = 4 + (c - i) / (f - v)), y *= 60, y < 0 && (y += 360), e.length > 3 && e[3] !== void 0 ? [y, p, b, e[3]] : [y, p, b];
    }, Ct = xt, Ht = w.unpack, zn = w.last, Sn = jt, qn = Ct, Jt = Math.round, Gn = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = Ht(e, "rgba"), i = zn(e) || "rgb";
      return i.substr(0, 3) == "hsl" ? Sn(qn(c), i) : (c[0] = Jt(c[0]), c[1] = Jt(c[1]), c[2] = Jt(c[2]), (i === "rgba" || c.length > 3 && c[3] < 1) && (c[3] = c.length > 3 ? c[3] : 1, i = "rgba"), i + "(" + c.slice(0, i === "rgb" ? 3 : 4).join(",") + ")");
    }, Un = Gn, Yn = w.unpack, Zt = Math.round, Vn = function() {
      for (var e, n = [], c = arguments.length; c--; )
        n[c] = arguments[c];
      n = Yn(n, "hsl");
      var i = n[0], h = n[1], v = n[2], f, b, p;
      if (h === 0)
        f = b = p = v * 255;
      else {
        var y = [0, 0, 0], M = [0, 0, 0], x = v < 0.5 ? v * (1 + h) : v + h - v * h, P = 2 * v - x, T = i / 360;
        y[0] = T + 1 / 3, y[1] = T, y[2] = T - 1 / 3;
        for (var D = 0; D < 3; D++)
          y[D] < 0 && (y[D] += 1), y[D] > 1 && (y[D] -= 1), 6 * y[D] < 1 ? M[D] = P + (x - P) * 6 * y[D] : 2 * y[D] < 1 ? M[D] = x : 3 * y[D] < 2 ? M[D] = P + (x - P) * (2 / 3 - y[D]) * 6 : M[D] = P;
        e = [Zt(M[0] * 255), Zt(M[1] * 255), Zt(M[2] * 255)], f = e[0], b = e[1], p = e[2];
      }
      return n.length > 3 ? [f, b, p, n[3]] : [f, b, p, 1];
    }, Se = Vn, qe = Se, Ge = R, Ue = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, Ye = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Ve = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, je = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, We = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, He = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Je = Math.round, Ze = function(e) {
      e = e.toLowerCase().trim();
      var n;
      if (Ge.format.named)
        try {
          return Ge.format.named(e);
        } catch {
        }
      if (n = e.match(Ue)) {
        for (var c = n.slice(1, 4), i = 0; i < 3; i++)
          c[i] = +c[i];
        return c[3] = 1, c;
      }
      if (n = e.match(Ye)) {
        for (var h = n.slice(1, 5), v = 0; v < 4; v++)
          h[v] = +h[v];
        return h;
      }
      if (n = e.match(Ve)) {
        for (var f = n.slice(1, 4), b = 0; b < 3; b++)
          f[b] = Je(f[b] * 2.55);
        return f[3] = 1, f;
      }
      if (n = e.match(je)) {
        for (var p = n.slice(1, 5), y = 0; y < 3; y++)
          p[y] = Je(p[y] * 2.55);
        return p[3] = +p[3], p;
      }
      if (n = e.match(We)) {
        var M = n.slice(1, 4);
        M[1] *= 0.01, M[2] *= 0.01;
        var x = qe(M);
        return x[3] = 1, x;
      }
      if (n = e.match(He)) {
        var P = n.slice(1, 4);
        P[1] *= 0.01, P[2] *= 0.01;
        var T = qe(P);
        return T[3] = +n[4], T;
      }
    };
    Ze.test = function(e) {
      return Ue.test(e) || Ye.test(e) || Ve.test(e) || je.test(e) || We.test(e) || He.test(e);
    };
    var jn = Ze, Wn = z, Qe = I, Xe = R, Hn = w.type, Jn = Un, Ke = jn;
    Qe.prototype.css = function(e) {
      return Jn(this._rgb, e);
    }, Wn.css = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(Qe, [null].concat(e, ["css"])))();
    }, Xe.format.css = Ke, Xe.autodetect.push({
      p: 5,
      test: function(e) {
        for (var n = [], c = arguments.length - 1; c-- > 0; )
          n[c] = arguments[c + 1];
        if (!n.length && Hn(e) === "string" && Ke.test(e))
          return "css";
      }
    });
    var ra = I, Zn = z, Qn = R, Xn = w.unpack;
    Qn.format.gl = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = Xn(e, "rgba");
      return c[0] *= 255, c[1] *= 255, c[2] *= 255, c;
    }, Zn.gl = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(ra, [null].concat(e, ["gl"])))();
    }, ra.prototype.gl = function() {
      var e = this._rgb;
      return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
    };
    var Kn = w.unpack, r0 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = Kn(e, "rgb"), i = c[0], h = c[1], v = c[2], f = Math.min(i, h, v), b = Math.max(i, h, v), p = b - f, y = p * 100 / 255, M = f / (255 - p) * 100, x;
      return p === 0 ? x = Number.NaN : (i === b && (x = (h - v) / p), h === b && (x = 2 + (v - i) / p), v === b && (x = 4 + (i - h) / p), x *= 60, x < 0 && (x += 360)), [x, y, M];
    }, t0 = r0, e0 = w.unpack, a0 = Math.floor, n0 = function() {
      for (var e, n, c, i, h, v, f = [], b = arguments.length; b--; )
        f[b] = arguments[b];
      f = e0(f, "hcg");
      var p = f[0], y = f[1], M = f[2], x, P, T;
      M = M * 255;
      var D = y * 255;
      if (y === 0)
        x = P = T = M;
      else {
        p === 360 && (p = 0), p > 360 && (p -= 360), p < 0 && (p += 360), p /= 60;
        var S = a0(p), V = p - S, H = M * (1 - y), Q = H + D * (1 - V), dr = H + D * V, hr = H + D;
        switch (S) {
          case 0:
            e = [hr, dr, H], x = e[0], P = e[1], T = e[2];
            break;
          case 1:
            n = [Q, hr, H], x = n[0], P = n[1], T = n[2];
            break;
          case 2:
            c = [H, hr, dr], x = c[0], P = c[1], T = c[2];
            break;
          case 3:
            i = [H, Q, hr], x = i[0], P = i[1], T = i[2];
            break;
          case 4:
            h = [dr, H, hr], x = h[0], P = h[1], T = h[2];
            break;
          case 5:
            v = [hr, H, Q], x = v[0], P = v[1], T = v[2];
            break;
        }
      }
      return [x, P, T, f.length > 3 ? f[3] : 1];
    }, o0 = n0, s0 = w.unpack, c0 = w.type, l0 = z, ta = I, ea = R, i0 = t0;
    ta.prototype.hcg = function() {
      return i0(this._rgb);
    }, l0.hcg = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(ta, [null].concat(e, ["hcg"])))();
    }, ea.format.hcg = o0, ea.autodetect.push({
      p: 1,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = s0(e, "hcg"), c0(e) === "array" && e.length === 3)
          return "hcg";
      }
    });
    var u0 = w.unpack, f0 = w.last, Dt = Math.round, h0 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = u0(e, "rgba"), i = c[0], h = c[1], v = c[2], f = c[3], b = f0(e) || "auto";
      f === void 0 && (f = 1), b === "auto" && (b = f < 1 ? "rgba" : "rgb"), i = Dt(i), h = Dt(h), v = Dt(v);
      var p = i << 16 | h << 8 | v, y = "000000" + p.toString(16);
      y = y.substr(y.length - 6);
      var M = "0" + Dt(f * 255).toString(16);
      switch (M = M.substr(M.length - 2), b.toLowerCase()) {
        case "rgba":
          return "#" + y + M;
        case "argb":
          return "#" + M + y;
        default:
          return "#" + y;
      }
    }, aa = h0, g0 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, v0 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, d0 = function(e) {
      if (e.match(g0)) {
        (e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        var n = parseInt(e, 16), c = n >> 16, i = n >> 8 & 255, h = n & 255;
        return [c, i, h, 1];
      }
      if (e.match(v0)) {
        (e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
        var v = parseInt(e, 16), f = v >> 24 & 255, b = v >> 16 & 255, p = v >> 8 & 255, y = Math.round((v & 255) / 255 * 100) / 100;
        return [f, b, p, y];
      }
      throw new Error("unknown hex color: " + e);
    }, na = d0, b0 = z, oa = I, p0 = w.type, sa = R, m0 = aa;
    oa.prototype.hex = function(e) {
      return m0(this._rgb, e);
    }, b0.hex = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(oa, [null].concat(e, ["hex"])))();
    }, sa.format.hex = na, sa.autodetect.push({
      p: 4,
      test: function(e) {
        for (var n = [], c = arguments.length - 1; c-- > 0; )
          n[c] = arguments[c + 1];
        if (!n.length && p0(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
          return "hex";
      }
    });
    var y0 = w.unpack, ca = w.TWOPI, k0 = Math.min, w0 = Math.sqrt, M0 = Math.acos, P0 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = y0(e, "rgb"), i = c[0], h = c[1], v = c[2];
      i /= 255, h /= 255, v /= 255;
      var f, b = k0(i, h, v), p = (i + h + v) / 3, y = p > 0 ? 1 - b / p : 0;
      return y === 0 ? f = NaN : (f = (i - h + (i - v)) / 2, f /= w0((i - h) * (i - h) + (i - v) * (h - v)), f = M0(f), v > h && (f = ca - f), f /= ca), [f * 360, y, p];
    }, _0 = P0, $0 = w.unpack, Qt = w.limit, Kr = w.TWOPI, Xt = w.PITHIRD, rt = Math.cos, F0 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = $0(e, "hsi");
      var c = e[0], i = e[1], h = e[2], v, f, b;
      return isNaN(c) && (c = 0), isNaN(i) && (i = 0), c > 360 && (c -= 360), c < 0 && (c += 360), c /= 360, c < 1 / 3 ? (b = (1 - i) / 3, v = (1 + i * rt(Kr * c) / rt(Xt - Kr * c)) / 3, f = 1 - (b + v)) : c < 2 / 3 ? (c -= 1 / 3, v = (1 - i) / 3, f = (1 + i * rt(Kr * c) / rt(Xt - Kr * c)) / 3, b = 1 - (v + f)) : (c -= 2 / 3, f = (1 - i) / 3, b = (1 + i * rt(Kr * c) / rt(Xt - Kr * c)) / 3, v = 1 - (f + b)), v = Qt(h * v * 3), f = Qt(h * f * 3), b = Qt(h * b * 3), [v * 255, f * 255, b * 255, e.length > 3 ? e[3] : 1];
    }, x0 = F0, C0 = w.unpack, D0 = w.type, T0 = z, la = I, ia = R, A0 = _0;
    la.prototype.hsi = function() {
      return A0(this._rgb);
    }, T0.hsi = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(la, [null].concat(e, ["hsi"])))();
    }, ia.format.hsi = x0, ia.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = C0(e, "hsi"), D0(e) === "array" && e.length === 3)
          return "hsi";
      }
    });
    var I0 = w.unpack, E0 = w.type, N0 = z, ua = I, fa = R, O0 = Ct;
    ua.prototype.hsl = function() {
      return O0(this._rgb);
    }, N0.hsl = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(ua, [null].concat(e, ["hsl"])))();
    }, fa.format.hsl = Se, fa.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = I0(e, "hsl"), E0(e) === "array" && e.length === 3)
          return "hsl";
      }
    });
    var R0 = w.unpack, B0 = Math.min, L0 = Math.max, z0 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = R0(e, "rgb");
      var c = e[0], i = e[1], h = e[2], v = B0(c, i, h), f = L0(c, i, h), b = f - v, p, y, M;
      return M = f / 255, f === 0 ? (p = Number.NaN, y = 0) : (y = b / f, c === f && (p = (i - h) / b), i === f && (p = 2 + (h - c) / b), h === f && (p = 4 + (c - i) / b), p *= 60, p < 0 && (p += 360)), [p, y, M];
    }, S0 = z0, q0 = w.unpack, G0 = Math.floor, U0 = function() {
      for (var e, n, c, i, h, v, f = [], b = arguments.length; b--; )
        f[b] = arguments[b];
      f = q0(f, "hsv");
      var p = f[0], y = f[1], M = f[2], x, P, T;
      if (M *= 255, y === 0)
        x = P = T = M;
      else {
        p === 360 && (p = 0), p > 360 && (p -= 360), p < 0 && (p += 360), p /= 60;
        var D = G0(p), S = p - D, V = M * (1 - y), H = M * (1 - y * S), Q = M * (1 - y * (1 - S));
        switch (D) {
          case 0:
            e = [M, Q, V], x = e[0], P = e[1], T = e[2];
            break;
          case 1:
            n = [H, M, V], x = n[0], P = n[1], T = n[2];
            break;
          case 2:
            c = [V, M, Q], x = c[0], P = c[1], T = c[2];
            break;
          case 3:
            i = [V, H, M], x = i[0], P = i[1], T = i[2];
            break;
          case 4:
            h = [Q, V, M], x = h[0], P = h[1], T = h[2];
            break;
          case 5:
            v = [M, V, H], x = v[0], P = v[1], T = v[2];
            break;
        }
      }
      return [x, P, T, f.length > 3 ? f[3] : 1];
    }, Y0 = U0, V0 = w.unpack, j0 = w.type, W0 = z, ha = I, ga = R, H0 = S0;
    ha.prototype.hsv = function() {
      return H0(this._rgb);
    }, W0.hsv = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(ha, [null].concat(e, ["hsv"])))();
    }, ga.format.hsv = Y0, ga.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = V0(e, "hsv"), j0(e) === "array" && e.length === 3)
          return "hsv";
      }
    });
    var Tt = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, tt = Tt, J0 = w.unpack, va = Math.pow, Z0 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = J0(e, "rgb"), i = c[0], h = c[1], v = c[2], f = Q0(i, h, v), b = f[0], p = f[1], y = f[2], M = 116 * p - 16;
      return [M < 0 ? 0 : M, 500 * (b - p), 200 * (p - y)];
    }, Kt = function(e) {
      return (e /= 255) <= 0.04045 ? e / 12.92 : va((e + 0.055) / 1.055, 2.4);
    }, re = function(e) {
      return e > tt.t3 ? va(e, 1 / 3) : e / tt.t2 + tt.t0;
    }, Q0 = function(e, n, c) {
      e = Kt(e), n = Kt(n), c = Kt(c);
      var i = re((0.4124564 * e + 0.3575761 * n + 0.1804375 * c) / tt.Xn), h = re((0.2126729 * e + 0.7151522 * n + 0.072175 * c) / tt.Yn), v = re((0.0193339 * e + 0.119192 * n + 0.9503041 * c) / tt.Zn);
      return [i, h, v];
    }, da = Z0, et = Tt, X0 = w.unpack, K0 = Math.pow, ro = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = X0(e, "lab");
      var c = e[0], i = e[1], h = e[2], v, f, b, p, y, M;
      return f = (c + 16) / 116, v = isNaN(i) ? f : f + i / 500, b = isNaN(h) ? f : f - h / 200, f = et.Yn * ee(f), v = et.Xn * ee(v), b = et.Zn * ee(b), p = te(3.2404542 * v - 1.5371385 * f - 0.4985314 * b), y = te(-0.969266 * v + 1.8760108 * f + 0.041556 * b), M = te(0.0556434 * v - 0.2040259 * f + 1.0572252 * b), [p, y, M, e.length > 3 ? e[3] : 1];
    }, te = function(e) {
      return 255 * (e <= 304e-5 ? 12.92 * e : 1.055 * K0(e, 1 / 2.4) - 0.055);
    }, ee = function(e) {
      return e > et.t1 ? e * e * e : et.t2 * (e - et.t0);
    }, ba = ro, to = w.unpack, eo = w.type, ao = z, pa = I, ma = R, no = da;
    pa.prototype.lab = function() {
      return no(this._rgb);
    }, ao.lab = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(pa, [null].concat(e, ["lab"])))();
    }, ma.format.lab = ba, ma.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = to(e, "lab"), eo(e) === "array" && e.length === 3)
          return "lab";
      }
    });
    var oo = w.unpack, so = w.RAD2DEG, co = Math.sqrt, lo = Math.atan2, io = Math.round, uo = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = oo(e, "lab"), i = c[0], h = c[1], v = c[2], f = co(h * h + v * v), b = (lo(v, h) * so + 360) % 360;
      return io(f * 1e4) === 0 && (b = Number.NaN), [i, f, b];
    }, ya = uo, fo = w.unpack, ho = da, go = ya, vo = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = fo(e, "rgb"), i = c[0], h = c[1], v = c[2], f = ho(i, h, v), b = f[0], p = f[1], y = f[2];
      return go(b, p, y);
    }, bo = vo, po = w.unpack, mo = w.DEG2RAD, yo = Math.sin, ko = Math.cos, wo = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = po(e, "lch"), i = c[0], h = c[1], v = c[2];
      return isNaN(v) && (v = 0), v = v * mo, [i, ko(v) * h, yo(v) * h];
    }, ka = wo, Mo = w.unpack, Po = ka, _o = ba, $o = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = Mo(e, "lch");
      var c = e[0], i = e[1], h = e[2], v = Po(c, i, h), f = v[0], b = v[1], p = v[2], y = _o(f, b, p), M = y[0], x = y[1], P = y[2];
      return [M, x, P, e.length > 3 ? e[3] : 1];
    }, wa = $o, Fo = w.unpack, xo = wa, Co = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = Fo(e, "hcl").reverse();
      return xo.apply(void 0, c);
    }, Do = Co, To = w.unpack, Ao = w.type, Ma = z, At = I, ae = R, Pa = bo;
    At.prototype.lch = function() {
      return Pa(this._rgb);
    }, At.prototype.hcl = function() {
      return Pa(this._rgb).reverse();
    }, Ma.lch = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(At, [null].concat(e, ["lch"])))();
    }, Ma.hcl = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(At, [null].concat(e, ["hcl"])))();
    }, ae.format.lch = wa, ae.format.hcl = Do, ["lch", "hcl"].forEach(function(e) {
      return ae.autodetect.push({
        p: 2,
        test: function() {
          for (var n = [], c = arguments.length; c--; )
            n[c] = arguments[c];
          if (n = To(n, e), Ao(n) === "array" && n.length === 3)
            return e;
        }
      });
    });
    var Io = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, _a = Io, Eo = I, $a = R, No = w.type, pt = _a, Oo = na, Ro = aa;
    Eo.prototype.name = function() {
      for (var e = Ro(this._rgb, "rgb"), n = 0, c = Object.keys(pt); n < c.length; n += 1) {
        var i = c[n];
        if (pt[i] === e)
          return i.toLowerCase();
      }
      return e;
    }, $a.format.named = function(e) {
      if (e = e.toLowerCase(), pt[e])
        return Oo(pt[e]);
      throw new Error("unknown color name: " + e);
    }, $a.autodetect.push({
      p: 5,
      test: function(e) {
        for (var n = [], c = arguments.length - 1; c-- > 0; )
          n[c] = arguments[c + 1];
        if (!n.length && No(e) === "string" && pt[e.toLowerCase()])
          return "named";
      }
    });
    var Bo = w.unpack, Lo = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = Bo(e, "rgb"), i = c[0], h = c[1], v = c[2];
      return (i << 16) + (h << 8) + v;
    }, zo = Lo, So = w.type, qo = function(e) {
      if (So(e) == "number" && e >= 0 && e <= 16777215) {
        var n = e >> 16, c = e >> 8 & 255, i = e & 255;
        return [n, c, i, 1];
      }
      throw new Error("unknown num color: " + e);
    }, Go = qo, Uo = z, Fa = I, xa = R, Yo = w.type, Vo = zo;
    Fa.prototype.num = function() {
      return Vo(this._rgb);
    }, Uo.num = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(Fa, [null].concat(e, ["num"])))();
    }, xa.format.num = Go, xa.autodetect.push({
      p: 5,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e.length === 1 && Yo(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215)
          return "num";
      }
    });
    var jo = z, ne = I, Ca = R, Da = w.unpack, Ta = w.type, Aa = Math.round;
    ne.prototype.rgb = function(e) {
      return e === void 0 && (e = !0), e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Aa);
    }, ne.prototype.rgba = function(e) {
      return e === void 0 && (e = !0), this._rgb.slice(0, 4).map(function(n, c) {
        return c < 3 ? e === !1 ? n : Aa(n) : n;
      });
    }, jo.rgb = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(ne, [null].concat(e, ["rgb"])))();
    }, Ca.format.rgb = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = Da(e, "rgba");
      return c[3] === void 0 && (c[3] = 1), c;
    }, Ca.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = Da(e, "rgba"), Ta(e) === "array" && (e.length === 3 || e.length === 4 && Ta(e[3]) == "number" && e[3] >= 0 && e[3] <= 1))
          return "rgb";
      }
    });
    var It = Math.log, Wo = function(e) {
      var n = e / 100, c, i, h;
      return n < 66 ? (c = 255, i = n < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (i = n - 2) + 104.49216199393888 * It(i), h = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (h = n - 10) + 115.67994401066147 * It(h)) : (c = 351.97690566805693 + 0.114206453784165 * (c = n - 55) - 40.25366309332127 * It(c), i = 325.4494125711974 + 0.07943456536662342 * (i = n - 50) - 28.0852963507957 * It(i), h = 255), [c, i, h, 1];
    }, Ia = Wo, Ho = Ia, Jo = w.unpack, Zo = Math.round, Qo = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      for (var c = Jo(e, "rgb"), i = c[0], h = c[2], v = 1e3, f = 4e4, b = 0.4, p; f - v > b; ) {
        p = (f + v) * 0.5;
        var y = Ho(p);
        y[2] / y[0] >= h / i ? f = p : v = p;
      }
      return Zo(p);
    }, Xo = Qo, oe = z, Et = I, se = R, Ko = Xo;
    Et.prototype.temp = Et.prototype.kelvin = Et.prototype.temperature = function() {
      return Ko(this._rgb);
    }, oe.temp = oe.kelvin = oe.temperature = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(Et, [null].concat(e, ["temp"])))();
    }, se.format.temp = se.format.kelvin = se.format.temperature = Ia;
    var rs = w.unpack, ce = Math.cbrt, ts = Math.pow, es = Math.sign, as = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = rs(e, "rgb"), i = c[0], h = c[1], v = c[2], f = [le(i / 255), le(h / 255), le(v / 255)], b = f[0], p = f[1], y = f[2], M = ce(0.4122214708 * b + 0.5363325363 * p + 0.0514459929 * y), x = ce(0.2119034982 * b + 0.6806995451 * p + 0.1073969566 * y), P = ce(0.0883024619 * b + 0.2817188376 * p + 0.6299787005 * y);
      return [
        0.2104542553 * M + 0.793617785 * x - 0.0040720468 * P,
        1.9779984951 * M - 2.428592205 * x + 0.4505937099 * P,
        0.0259040371 * M + 0.7827717662 * x - 0.808675766 * P
      ];
    }, Ea = as;
    function le(e) {
      var n = Math.abs(e);
      return n < 0.04045 ? e / 12.92 : (es(e) || 1) * ts((n + 0.055) / 1.055, 2.4);
    }
    var ns = w.unpack, Nt = Math.pow, os = Math.sign, ss = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = ns(e, "lab");
      var c = e[0], i = e[1], h = e[2], v = Nt(c + 0.3963377774 * i + 0.2158037573 * h, 3), f = Nt(c - 0.1055613458 * i - 0.0638541728 * h, 3), b = Nt(c - 0.0894841775 * i - 1.291485548 * h, 3);
      return [
        255 * ie(4.0767416621 * v - 3.3077115913 * f + 0.2309699292 * b),
        255 * ie(-1.2684380046 * v + 2.6097574011 * f - 0.3413193965 * b),
        255 * ie(-0.0041960863 * v - 0.7034186147 * f + 1.707614701 * b),
        e.length > 3 ? e[3] : 1
      ];
    }, Na = ss;
    function ie(e) {
      var n = Math.abs(e);
      return n > 31308e-7 ? (os(e) || 1) * (1.055 * Nt(n, 1 / 2.4) - 0.055) : e * 12.92;
    }
    var cs = w.unpack, ls = w.type, is = z, Oa = I, Ra = R, us = Ea;
    Oa.prototype.oklab = function() {
      return us(this._rgb);
    }, is.oklab = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(Oa, [null].concat(e, ["oklab"])))();
    }, Ra.format.oklab = Na, Ra.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = cs(e, "oklab"), ls(e) === "array" && e.length === 3)
          return "oklab";
      }
    });
    var fs = w.unpack, hs = Ea, gs = ya, vs = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      var c = fs(e, "rgb"), i = c[0], h = c[1], v = c[2], f = hs(i, h, v), b = f[0], p = f[1], y = f[2];
      return gs(b, p, y);
    }, ds = vs, bs = w.unpack, ps = ka, ms = Na, ys = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      e = bs(e, "lch");
      var c = e[0], i = e[1], h = e[2], v = ps(c, i, h), f = v[0], b = v[1], p = v[2], y = ms(f, b, p), M = y[0], x = y[1], P = y[2];
      return [M, x, P, e.length > 3 ? e[3] : 1];
    }, ks = ys, ws = w.unpack, Ms = w.type, Ps = z, Ba = I, La = R, _s = ds;
    Ba.prototype.oklch = function() {
      return _s(this._rgb);
    }, Ps.oklch = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      return new (Function.prototype.bind.apply(Ba, [null].concat(e, ["oklch"])))();
    }, La.format.oklch = ks, La.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], n = arguments.length; n--; )
          e[n] = arguments[n];
        if (e = ws(e, "oklch"), Ms(e) === "array" && e.length === 3)
          return "oklch";
      }
    });
    var za = I, $s = w.type;
    za.prototype.alpha = function(e, n) {
      return n === void 0 && (n = !1), e !== void 0 && $s(e) === "number" ? n ? (this._rgb[3] = e, this) : new za([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
    };
    var Fs = I;
    Fs.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var Yr = I, xs = Tt;
    Yr.prototype.darken = function(e) {
      e === void 0 && (e = 1);
      var n = this, c = n.lab();
      return c[0] -= xs.Kn * e, new Yr(c, "lab").alpha(n.alpha(), !0);
    }, Yr.prototype.brighten = function(e) {
      return e === void 0 && (e = 1), this.darken(-e);
    }, Yr.prototype.darker = Yr.prototype.darken, Yr.prototype.brighter = Yr.prototype.brighten;
    var Cs = I;
    Cs.prototype.get = function(e) {
      var n = e.split("."), c = n[0], i = n[1], h = this[c]();
      if (i) {
        var v = c.indexOf(i) - (c.substr(0, 2) === "ok" ? 2 : 0);
        if (v > -1)
          return h[v];
        throw new Error("unknown channel " + i + " in mode " + c);
      } else
        return h;
    };
    var at = I, Ds = w.type, Ts = Math.pow, As = 1e-7, Is = 20;
    at.prototype.luminance = function(e) {
      if (e !== void 0 && Ds(e) === "number") {
        if (e === 0)
          return new at([0, 0, 0, this._rgb[3]], "rgb");
        if (e === 1)
          return new at([255, 255, 255, this._rgb[3]], "rgb");
        var n = this.luminance(), c = "rgb", i = Is, h = function(f, b) {
          var p = f.interpolate(b, 0.5, c), y = p.luminance();
          return Math.abs(e - y) < As || !i-- ? p : y > e ? h(f, p) : h(p, b);
        }, v = (n > e ? h(new at([0, 0, 0]), this) : h(this, new at([255, 255, 255]))).rgb();
        return new at(v.concat([this._rgb[3]]));
      }
      return Es.apply(void 0, this._rgb.slice(0, 3));
    };
    var Es = function(e, n, c) {
      return e = ue(e), n = ue(n), c = ue(c), 0.2126 * e + 0.7152 * n + 0.0722 * c;
    }, ue = function(e) {
      return e /= 255, e <= 0.03928 ? e / 12.92 : Ts((e + 0.055) / 1.055, 2.4);
    }, wr = {}, Sa = I, qa = w.type, Ot = wr, Ga = function(e, n, c) {
      c === void 0 && (c = 0.5);
      for (var i = [], h = arguments.length - 3; h-- > 0; )
        i[h] = arguments[h + 3];
      var v = i[0] || "lrgb";
      if (!Ot[v] && !i.length && (v = Object.keys(Ot)[0]), !Ot[v])
        throw new Error("interpolation mode " + v + " is not defined");
      return qa(e) !== "object" && (e = new Sa(e)), qa(n) !== "object" && (n = new Sa(n)), Ot[v](e, n, c).alpha(e.alpha() + c * (n.alpha() - e.alpha()));
    }, Ua = I, Ns = Ga;
    Ua.prototype.mix = Ua.prototype.interpolate = function(e, n) {
      n === void 0 && (n = 0.5);
      for (var c = [], i = arguments.length - 2; i-- > 0; )
        c[i] = arguments[i + 2];
      return Ns.apply(void 0, [this, e, n].concat(c));
    };
    var Ya = I;
    Ya.prototype.premultiply = function(e) {
      e === void 0 && (e = !1);
      var n = this._rgb, c = n[3];
      return e ? (this._rgb = [n[0] * c, n[1] * c, n[2] * c, c], this) : new Ya([n[0] * c, n[1] * c, n[2] * c, c], "rgb");
    };
    var fe = I, Os = Tt;
    fe.prototype.saturate = function(e) {
      e === void 0 && (e = 1);
      var n = this, c = n.lch();
      return c[1] += Os.Kn * e, c[1] < 0 && (c[1] = 0), new fe(c, "lch").alpha(n.alpha(), !0);
    }, fe.prototype.desaturate = function(e) {
      return e === void 0 && (e = 1), this.saturate(-e);
    };
    var Va = I, ja = w.type;
    Va.prototype.set = function(e, n, c) {
      c === void 0 && (c = !1);
      var i = e.split("."), h = i[0], v = i[1], f = this[h]();
      if (v) {
        var b = h.indexOf(v) - (h.substr(0, 2) === "ok" ? 2 : 0);
        if (b > -1) {
          if (ja(n) == "string")
            switch (n.charAt(0)) {
              case "+":
                f[b] += +n;
                break;
              case "-":
                f[b] += +n;
                break;
              case "*":
                f[b] *= +n.substr(1);
                break;
              case "/":
                f[b] /= +n.substr(1);
                break;
              default:
                f[b] = +n;
            }
          else if (ja(n) === "number")
            f[b] = n;
          else
            throw new Error("unsupported value for Color.set");
          var p = new Va(f, h);
          return c ? (this._rgb = p._rgb, this) : p;
        }
        throw new Error("unknown channel " + v + " in mode " + h);
      } else
        return f;
    };
    var Rs = I, Bs = function(e, n, c) {
      var i = e._rgb, h = n._rgb;
      return new Rs(
        i[0] + c * (h[0] - i[0]),
        i[1] + c * (h[1] - i[1]),
        i[2] + c * (h[2] - i[2]),
        "rgb"
      );
    };
    wr.rgb = Bs;
    var Ls = I, he = Math.sqrt, nt = Math.pow, zs = function(e, n, c) {
      var i = e._rgb, h = i[0], v = i[1], f = i[2], b = n._rgb, p = b[0], y = b[1], M = b[2];
      return new Ls(
        he(nt(h, 2) * (1 - c) + nt(p, 2) * c),
        he(nt(v, 2) * (1 - c) + nt(y, 2) * c),
        he(nt(f, 2) * (1 - c) + nt(M, 2) * c),
        "rgb"
      );
    };
    wr.lrgb = zs;
    var Ss = I, qs = function(e, n, c) {
      var i = e.lab(), h = n.lab();
      return new Ss(
        i[0] + c * (h[0] - i[0]),
        i[1] + c * (h[1] - i[1]),
        i[2] + c * (h[2] - i[2]),
        "lab"
      );
    };
    wr.lab = qs;
    var Wa = I, ot = function(e, n, c, i) {
      var h, v, f, b;
      i === "hsl" ? (f = e.hsl(), b = n.hsl()) : i === "hsv" ? (f = e.hsv(), b = n.hsv()) : i === "hcg" ? (f = e.hcg(), b = n.hcg()) : i === "hsi" ? (f = e.hsi(), b = n.hsi()) : i === "lch" || i === "hcl" ? (i = "hcl", f = e.hcl(), b = n.hcl()) : i === "oklch" && (f = e.oklch().reverse(), b = n.oklch().reverse());
      var p, y, M, x, P, T;
      (i.substr(0, 1) === "h" || i === "oklch") && (h = f, p = h[0], M = h[1], P = h[2], v = b, y = v[0], x = v[1], T = v[2]);
      var D, S, V, H;
      return !isNaN(p) && !isNaN(y) ? (y > p && y - p > 180 ? H = y - (p + 360) : y < p && p - y > 180 ? H = y + 360 - p : H = y - p, S = p + c * H) : isNaN(p) ? isNaN(y) ? S = Number.NaN : (S = y, (P == 1 || P == 0) && i != "hsv" && (D = x)) : (S = p, (T == 1 || T == 0) && i != "hsv" && (D = M)), D === void 0 && (D = M + c * (x - M)), V = P + c * (T - P), i === "oklch" ? new Wa([V, D, S], i) : new Wa([S, D, V], i);
    }, Gs = ot, Ha = function(e, n, c) {
      return Gs(e, n, c, "lch");
    };
    wr.lch = Ha, wr.hcl = Ha;
    var Us = I, Ys = function(e, n, c) {
      var i = e.num(), h = n.num();
      return new Us(i + c * (h - i), "num");
    };
    wr.num = Ys;
    var Vs = ot, js = function(e, n, c) {
      return Vs(e, n, c, "hcg");
    };
    wr.hcg = js;
    var Ws = ot, Hs = function(e, n, c) {
      return Ws(e, n, c, "hsi");
    };
    wr.hsi = Hs;
    var Js = ot, Zs = function(e, n, c) {
      return Js(e, n, c, "hsl");
    };
    wr.hsl = Zs;
    var Qs = ot, Xs = function(e, n, c) {
      return Qs(e, n, c, "hsv");
    };
    wr.hsv = Xs;
    var Ks = I, r1 = function(e, n, c) {
      var i = e.oklab(), h = n.oklab();
      return new Ks(
        i[0] + c * (h[0] - i[0]),
        i[1] + c * (h[1] - i[1]),
        i[2] + c * (h[2] - i[2]),
        "oklab"
      );
    };
    wr.oklab = r1;
    var t1 = ot, e1 = function(e, n, c) {
      return t1(e, n, c, "oklch");
    };
    wr.oklch = e1;
    var ge = I, a1 = w.clip_rgb, ve = Math.pow, de = Math.sqrt, be = Math.PI, Ja = Math.cos, Za = Math.sin, n1 = Math.atan2, o1 = function(e, n, c) {
      n === void 0 && (n = "lrgb"), c === void 0 && (c = null);
      var i = e.length;
      c || (c = Array.from(new Array(i)).map(function() {
        return 1;
      }));
      var h = i / c.reduce(function(S, V) {
        return S + V;
      });
      if (c.forEach(function(S, V) {
        c[V] *= h;
      }), e = e.map(function(S) {
        return new ge(S);
      }), n === "lrgb")
        return s1(e, c);
      for (var v = e.shift(), f = v.get(n), b = [], p = 0, y = 0, M = 0; M < f.length; M++)
        if (f[M] = (f[M] || 0) * c[0], b.push(isNaN(f[M]) ? 0 : c[0]), n.charAt(M) === "h" && !isNaN(f[M])) {
          var x = f[M] / 180 * be;
          p += Ja(x) * c[0], y += Za(x) * c[0];
        }
      var P = v.alpha() * c[0];
      e.forEach(function(S, V) {
        var H = S.get(n);
        P += S.alpha() * c[V + 1];
        for (var Q = 0; Q < f.length; Q++)
          if (!isNaN(H[Q]))
            if (b[Q] += c[V + 1], n.charAt(Q) === "h") {
              var dr = H[Q] / 180 * be;
              p += Ja(dr) * c[V + 1], y += Za(dr) * c[V + 1];
            } else
              f[Q] += H[Q] * c[V + 1];
      });
      for (var T = 0; T < f.length; T++)
        if (n.charAt(T) === "h") {
          for (var D = n1(y / b[T], p / b[T]) / be * 180; D < 0; )
            D += 360;
          for (; D >= 360; )
            D -= 360;
          f[T] = D;
        } else
          f[T] = f[T] / b[T];
      return P /= i, new ge(f, n).alpha(P > 0.99999 ? 1 : P, !0);
    }, s1 = function(e, n) {
      for (var c = e.length, i = [0, 0, 0, 0], h = 0; h < e.length; h++) {
        var v = e[h], f = n[h] / c, b = v._rgb;
        i[0] += ve(b[0], 2) * f, i[1] += ve(b[1], 2) * f, i[2] += ve(b[2], 2) * f, i[3] += b[3] * f;
      }
      return i[0] = de(i[0]), i[1] = de(i[1]), i[2] = de(i[2]), i[3] > 0.9999999 && (i[3] = 1), new ge(a1(i));
    }, Cr = z, st = w.type, c1 = Math.pow, pe = function(e) {
      var n = "rgb", c = Cr("#ccc"), i = 0, h = [0, 1], v = [], f = [0, 0], b = !1, p = [], y = !1, M = 0, x = 1, P = !1, T = {}, D = !0, S = 1, V = function($) {
        if ($ = $ || ["#fff", "#000"], $ && st($) === "string" && Cr.brewer && Cr.brewer[$.toLowerCase()] && ($ = Cr.brewer[$.toLowerCase()]), st($) === "array") {
          $.length === 1 && ($ = [$[0], $[0]]), $ = $.slice(0);
          for (var N = 0; N < $.length; N++)
            $[N] = Cr($[N]);
          v.length = 0;
          for (var U = 0; U < $.length; U++)
            v.push(U / ($.length - 1));
        }
        return pr(), p = $;
      }, H = function($) {
        if (b != null) {
          for (var N = b.length - 1, U = 0; U < N && $ >= b[U]; )
            U++;
          return U - 1;
        }
        return 0;
      }, Q = function($) {
        return $;
      }, dr = function($) {
        return $;
      }, hr = function($, N) {
        var U, q;
        if (N == null && (N = !1), isNaN($) || $ === null)
          return c;
        if (N)
          q = $;
        else if (b && b.length > 2) {
          var br = H($);
          q = br / (b.length - 2);
        } else
          x !== M ? q = ($ - M) / (x - M) : q = 1;
        q = dr(q), N || (q = Q(q)), S !== 1 && (q = c1(q, S)), q = f[0] + q * (1 - f[0] - f[1]), q = Math.min(1, Math.max(0, q));
        var er = Math.floor(q * 1e4);
        if (D && T[er])
          U = T[er];
        else {
          if (st(p) === "array")
            for (var J = 0; J < v.length; J++) {
              var X = v[J];
              if (q <= X) {
                U = p[J];
                break;
              }
              if (q >= X && J === v.length - 1) {
                U = p[J];
                break;
              }
              if (q > X && q < v[J + 1]) {
                q = (q - X) / (v[J + 1] - X), U = Cr.interpolate(p[J], p[J + 1], q, n);
                break;
              }
            }
          else
            st(p) === "function" && (U = p(q));
          D && (T[er] = U);
        }
        return U;
      }, pr = function() {
        return T = {};
      };
      V(e);
      var j = function($) {
        var N = Cr(hr($));
        return y && N[y] ? N[y]() : N;
      };
      return j.classes = function($) {
        if ($ != null) {
          if (st($) === "array")
            b = $, h = [$[0], $[$.length - 1]];
          else {
            var N = Cr.analyze(h);
            $ === 0 ? b = [N.min, N.max] : b = Cr.limits(N, "e", $);
          }
          return j;
        }
        return b;
      }, j.domain = function($) {
        if (!arguments.length)
          return h;
        M = $[0], x = $[$.length - 1], v = [];
        var N = p.length;
        if ($.length === N && M !== x)
          for (var U = 0, q = Array.from($); U < q.length; U += 1) {
            var br = q[U];
            v.push((br - M) / (x - M));
          }
        else {
          for (var er = 0; er < N; er++)
            v.push(er / (N - 1));
          if ($.length > 2) {
            var J = $.map(function(K, rr) {
              return rr / ($.length - 1);
            }), X = $.map(function(K) {
              return (K - M) / (x - M);
            });
            X.every(function(K, rr) {
              return J[rr] === K;
            }) || (dr = function(K) {
              if (K <= 0 || K >= 1)
                return K;
              for (var rr = 0; K >= X[rr + 1]; )
                rr++;
              var Tr = (K - X[rr]) / (X[rr + 1] - X[rr]), zr = J[rr] + Tr * (J[rr + 1] - J[rr]);
              return zr;
            });
          }
        }
        return h = [M, x], j;
      }, j.mode = function($) {
        return arguments.length ? (n = $, pr(), j) : n;
      }, j.range = function($, N) {
        return V($), j;
      }, j.out = function($) {
        return y = $, j;
      }, j.spread = function($) {
        return arguments.length ? (i = $, j) : i;
      }, j.correctLightness = function($) {
        return $ == null && ($ = !0), P = $, pr(), P ? Q = function(N) {
          for (var U = hr(0, !0).lab()[0], q = hr(1, !0).lab()[0], br = U > q, er = hr(N, !0).lab()[0], J = U + (q - U) * N, X = er - J, K = 0, rr = 1, Tr = 20; Math.abs(X) > 0.01 && Tr-- > 0; )
            (function() {
              return br && (X *= -1), X < 0 ? (K = N, N += (rr - N) * 0.5) : (rr = N, N += (K - N) * 0.5), er = hr(N, !0).lab()[0], X = er - J;
            })();
          return N;
        } : Q = function(N) {
          return N;
        }, j;
      }, j.padding = function($) {
        return $ != null ? (st($) === "number" && ($ = [$, $]), f = $, j) : f;
      }, j.colors = function($, N) {
        arguments.length < 2 && (N = "hex");
        var U = [];
        if (arguments.length === 0)
          U = p.slice(0);
        else if ($ === 1)
          U = [j(0.5)];
        else if ($ > 1) {
          var q = h[0], br = h[1] - q;
          U = l1(0, $, !1).map(function(rr) {
            return j(q + rr / ($ - 1) * br);
          });
        } else {
          e = [];
          var er = [];
          if (b && b.length > 2)
            for (var J = 1, X = b.length, K = 1 <= X; K ? J < X : J > X; K ? J++ : J--)
              er.push((b[J - 1] + b[J]) * 0.5);
          else
            er = h;
          U = er.map(function(rr) {
            return j(rr);
          });
        }
        return Cr[N] && (U = U.map(function(rr) {
          return rr[N]();
        })), U;
      }, j.cache = function($) {
        return $ != null ? (D = $, j) : D;
      }, j.gamma = function($) {
        return $ != null ? (S = $, j) : S;
      }, j.nodata = function($) {
        return $ != null ? (c = Cr($), j) : c;
      }, j;
    };
    function l1(e, n, c) {
      for (var i = [], h = e < n, v = c ? h ? n + 1 : n - 1 : n, f = e; h ? f < v : f > v; h ? f++ : f--)
        i.push(f);
      return i;
    }
    var mt = I, i1 = pe, u1 = function(e) {
      for (var n = [1, 1], c = 1; c < e; c++) {
        for (var i = [1], h = 1; h <= n.length; h++)
          i[h] = (n[h] || 0) + n[h - 1];
        n = i;
      }
      return n;
    }, f1 = function(e) {
      var n, c, i, h, v, f, b;
      if (e = e.map(function(P) {
        return new mt(P);
      }), e.length === 2)
        n = e.map(function(P) {
          return P.lab();
        }), v = n[0], f = n[1], h = function(P) {
          var T = [0, 1, 2].map(function(D) {
            return v[D] + P * (f[D] - v[D]);
          });
          return new mt(T, "lab");
        };
      else if (e.length === 3)
        c = e.map(function(P) {
          return P.lab();
        }), v = c[0], f = c[1], b = c[2], h = function(P) {
          var T = [0, 1, 2].map(function(D) {
            return (1 - P) * (1 - P) * v[D] + 2 * (1 - P) * P * f[D] + P * P * b[D];
          });
          return new mt(T, "lab");
        };
      else if (e.length === 4) {
        var p;
        i = e.map(function(P) {
          return P.lab();
        }), v = i[0], f = i[1], b = i[2], p = i[3], h = function(P) {
          var T = [0, 1, 2].map(function(D) {
            return (1 - P) * (1 - P) * (1 - P) * v[D] + 3 * (1 - P) * (1 - P) * P * f[D] + 3 * (1 - P) * P * P * b[D] + P * P * P * p[D];
          });
          return new mt(T, "lab");
        };
      } else if (e.length >= 5) {
        var y, M, x;
        y = e.map(function(P) {
          return P.lab();
        }), x = e.length - 1, M = u1(x), h = function(P) {
          var T = 1 - P, D = [0, 1, 2].map(function(S) {
            return y.reduce(function(V, H, Q) {
              return V + M[Q] * Math.pow(T, x - Q) * Math.pow(P, Q) * H[S];
            }, 0);
          });
          return new mt(D, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return h;
    }, h1 = function(e) {
      var n = f1(e);
      return n.scale = function() {
        return i1(n);
      }, n;
    }, me = z, Dr = function(e, n, c) {
      if (!Dr[c])
        throw new Error("unknown blend mode " + c);
      return Dr[c](e, n);
    }, Br = function(e) {
      return function(n, c) {
        var i = me(c).rgb(), h = me(n).rgb();
        return me.rgb(e(i, h));
      };
    }, Lr = function(e) {
      return function(n, c) {
        var i = [];
        return i[0] = e(n[0], c[0]), i[1] = e(n[1], c[1]), i[2] = e(n[2], c[2]), i;
      };
    }, g1 = function(e) {
      return e;
    }, v1 = function(e, n) {
      return e * n / 255;
    }, d1 = function(e, n) {
      return e > n ? n : e;
    }, b1 = function(e, n) {
      return e > n ? e : n;
    }, p1 = function(e, n) {
      return 255 * (1 - (1 - e / 255) * (1 - n / 255));
    }, m1 = function(e, n) {
      return n < 128 ? 2 * e * n / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - n / 255));
    }, y1 = function(e, n) {
      return 255 * (1 - (1 - n / 255) / (e / 255));
    }, k1 = function(e, n) {
      return e === 255 ? 255 : (e = 255 * (n / 255) / (1 - e / 255), e > 255 ? 255 : e);
    };
    Dr.normal = Br(Lr(g1)), Dr.multiply = Br(Lr(v1)), Dr.screen = Br(Lr(p1)), Dr.overlay = Br(Lr(m1)), Dr.darken = Br(Lr(d1)), Dr.lighten = Br(Lr(b1)), Dr.dodge = Br(Lr(k1)), Dr.burn = Br(Lr(y1));
    for (var w1 = Dr, ye = w.type, M1 = w.clip_rgb, P1 = w.TWOPI, _1 = Math.pow, $1 = Math.sin, F1 = Math.cos, Qa = z, x1 = function(e, n, c, i, h) {
      e === void 0 && (e = 300), n === void 0 && (n = -1.5), c === void 0 && (c = 1), i === void 0 && (i = 1), h === void 0 && (h = [0, 1]);
      var v = 0, f;
      ye(h) === "array" ? f = h[1] - h[0] : (f = 0, h = [h, h]);
      var b = function(p) {
        var y = P1 * ((e + 120) / 360 + n * p), M = _1(h[0] + f * p, i), x = v !== 0 ? c[0] + p * v : c, P = x * M * (1 - M) / 2, T = F1(y), D = $1(y), S = M + P * (-0.14861 * T + 1.78277 * D), V = M + P * (-0.29227 * T - 0.90649 * D), H = M + P * (1.97294 * T);
        return Qa(M1([S * 255, V * 255, H * 255, 1]));
      };
      return b.start = function(p) {
        return p == null ? e : (e = p, b);
      }, b.rotations = function(p) {
        return p == null ? n : (n = p, b);
      }, b.gamma = function(p) {
        return p == null ? i : (i = p, b);
      }, b.hue = function(p) {
        return p == null ? c : (c = p, ye(c) === "array" ? (v = c[1] - c[0], v === 0 && (c = c[1])) : v = 0, b);
      }, b.lightness = function(p) {
        return p == null ? h : (ye(p) === "array" ? (h = p, f = p[1] - p[0]) : (h = [p, p], f = 0), b);
      }, b.scale = function() {
        return Qa.scale(b);
      }, b.hue(c), b;
    }, C1 = I, D1 = "0123456789abcdef", T1 = Math.floor, A1 = Math.random, I1 = function() {
      for (var e = "#", n = 0; n < 6; n++)
        e += D1.charAt(T1(A1() * 16));
      return new C1(e, "hex");
    }, ke = k, Xa = Math.log, E1 = Math.pow, N1 = Math.floor, O1 = Math.abs, Ka = function(e, n) {
      n === void 0 && (n = null);
      var c = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return ke(e) === "object" && (e = Object.values(e)), e.forEach(function(i) {
        n && ke(i) === "object" && (i = i[n]), i != null && !isNaN(i) && (c.values.push(i), c.sum += i, i < c.min && (c.min = i), i > c.max && (c.max = i), c.count += 1);
      }), c.domain = [c.min, c.max], c.limits = function(i, h) {
        return rn(c, i, h);
      }, c;
    }, rn = function(e, n, c) {
      n === void 0 && (n = "equal"), c === void 0 && (c = 7), ke(e) == "array" && (e = Ka(e));
      var i = e.min, h = e.max, v = e.values.sort(function(Me, Pe) {
        return Me - Pe;
      });
      if (c === 1)
        return [i, h];
      var f = [];
      if (n.substr(0, 1) === "c" && (f.push(i), f.push(h)), n.substr(0, 1) === "e") {
        f.push(i);
        for (var b = 1; b < c; b++)
          f.push(i + b / c * (h - i));
        f.push(h);
      } else if (n.substr(0, 1) === "l") {
        if (i <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var p = Math.LOG10E * Xa(i), y = Math.LOG10E * Xa(h);
        f.push(i);
        for (var M = 1; M < c; M++)
          f.push(E1(10, p + M / c * (y - p)));
        f.push(h);
      } else if (n.substr(0, 1) === "q") {
        f.push(i);
        for (var x = 1; x < c; x++) {
          var P = (v.length - 1) * x / c, T = N1(P);
          if (T === P)
            f.push(v[T]);
          else {
            var D = P - T;
            f.push(v[T] * (1 - D) + v[T + 1] * D);
          }
        }
        f.push(h);
      } else if (n.substr(0, 1) === "k") {
        var S, V = v.length, H = new Array(V), Q = new Array(c), dr = !0, hr = 0, pr = null;
        pr = [], pr.push(i);
        for (var j = 1; j < c; j++)
          pr.push(i + j / c * (h - i));
        for (pr.push(h); dr; ) {
          for (var $ = 0; $ < c; $++)
            Q[$] = 0;
          for (var N = 0; N < V; N++)
            for (var U = v[N], q = Number.MAX_VALUE, br = void 0, er = 0; er < c; er++) {
              var J = O1(pr[er] - U);
              J < q && (q = J, br = er), Q[br]++, H[N] = br;
            }
          for (var X = new Array(c), K = 0; K < c; K++)
            X[K] = null;
          for (var rr = 0; rr < V; rr++)
            S = H[rr], X[S] === null ? X[S] = v[rr] : X[S] += v[rr];
          for (var Tr = 0; Tr < c; Tr++)
            X[Tr] *= 1 / Q[Tr];
          dr = !1;
          for (var zr = 0; zr < c; zr++)
            if (X[zr] !== pr[zr]) {
              dr = !0;
              break;
            }
          pr = X, hr++, hr > 200 && (dr = !1);
        }
        for (var Sr = {}, ct = 0; ct < c; ct++)
          Sr[ct] = [];
        for (var lt = 0; lt < V; lt++)
          S = H[lt], Sr[S].push(v[lt]);
        for (var Or = [], Vr = 0; Vr < c; Vr++)
          Or.push(Sr[Vr][0]), Or.push(Sr[Vr][Sr[Vr].length - 1]);
        Or = Or.sort(function(Me, Pe) {
          return Me - Pe;
        }), f.push(Or[0]);
        for (var yt = 1; yt < Or.length; yt += 2) {
          var jr = Or[yt];
          !isNaN(jr) && f.indexOf(jr) === -1 && f.push(jr);
        }
      }
      return f;
    }, tn = { analyze: Ka, limits: rn }, en = I, R1 = function(e, n) {
      e = new en(e), n = new en(n);
      var c = e.luminance(), i = n.luminance();
      return c > i ? (c + 0.05) / (i + 0.05) : (i + 0.05) / (c + 0.05);
    }, an = I, Nr = Math.sqrt, lr = Math.pow, B1 = Math.min, L1 = Math.max, nn = Math.atan2, on = Math.abs, Rt = Math.cos, sn = Math.sin, z1 = Math.exp, cn = Math.PI, S1 = function(e, n, c, i, h) {
      c === void 0 && (c = 1), i === void 0 && (i = 1), h === void 0 && (h = 1);
      var v = function(jr) {
        return 360 * jr / (2 * cn);
      }, f = function(jr) {
        return 2 * cn * jr / 360;
      };
      e = new an(e), n = new an(n);
      var b = Array.from(e.lab()), p = b[0], y = b[1], M = b[2], x = Array.from(n.lab()), P = x[0], T = x[1], D = x[2], S = (p + P) / 2, V = Nr(lr(y, 2) + lr(M, 2)), H = Nr(lr(T, 2) + lr(D, 2)), Q = (V + H) / 2, dr = 0.5 * (1 - Nr(lr(Q, 7) / (lr(Q, 7) + lr(25, 7)))), hr = y * (1 + dr), pr = T * (1 + dr), j = Nr(lr(hr, 2) + lr(M, 2)), $ = Nr(lr(pr, 2) + lr(D, 2)), N = (j + $) / 2, U = v(nn(M, hr)), q = v(nn(D, pr)), br = U >= 0 ? U : U + 360, er = q >= 0 ? q : q + 360, J = on(br - er) > 180 ? (br + er + 360) / 2 : (br + er) / 2, X = 1 - 0.17 * Rt(f(J - 30)) + 0.24 * Rt(f(2 * J)) + 0.32 * Rt(f(3 * J + 6)) - 0.2 * Rt(f(4 * J - 63)), K = er - br;
      K = on(K) <= 180 ? K : er <= br ? K + 360 : K - 360, K = 2 * Nr(j * $) * sn(f(K) / 2);
      var rr = P - p, Tr = $ - j, zr = 1 + 0.015 * lr(S - 50, 2) / Nr(20 + lr(S - 50, 2)), Sr = 1 + 0.045 * N, ct = 1 + 0.015 * N * X, lt = 30 * z1(-lr((J - 275) / 25, 2)), Or = 2 * Nr(lr(N, 7) / (lr(N, 7) + lr(25, 7))), Vr = -Or * sn(2 * f(lt)), yt = Nr(lr(rr / (c * zr), 2) + lr(Tr / (i * Sr), 2) + lr(K / (h * ct), 2) + Vr * (Tr / (i * Sr)) * (K / (h * ct)));
      return L1(0, B1(100, yt));
    }, ln = I, q1 = function(e, n, c) {
      c === void 0 && (c = "lab"), e = new ln(e), n = new ln(n);
      var i = e.get(c), h = n.get(c), v = 0;
      for (var f in i) {
        var b = (i[f] || 0) - (h[f] || 0);
        v += b * b;
      }
      return Math.sqrt(v);
    }, G1 = I, U1 = function() {
      for (var e = [], n = arguments.length; n--; )
        e[n] = arguments[n];
      try {
        return new (Function.prototype.bind.apply(G1, [null].concat(e)))(), !0;
      } catch {
        return !1;
      }
    }, un = z, fn = pe, Y1 = {
      cool: function() {
        return fn([un.hsl(180, 1, 0.9), un.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return fn(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Bt = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, we = 0, hn = Object.keys(Bt); we < hn.length; we += 1) {
      var gn = hn[we];
      Bt[gn.toLowerCase()] = Bt[gn];
    }
    var V1 = Bt, fr = z;
    fr.average = o1, fr.bezier = h1, fr.blend = w1, fr.cubehelix = x1, fr.mix = fr.interpolate = Ga, fr.random = I1, fr.scale = pe, fr.analyze = tn.analyze, fr.contrast = R1, fr.deltaE = S1, fr.distance = q1, fr.limits = tn.limits, fr.valid = U1, fr.scales = Y1, fr.colors = _a, fr.brewer = V1;
    var j1 = fr;
    return j1;
  });
})(Fn);
var cc = Fn.exports;
const Wr = /* @__PURE__ */ Le(cc);
var lc = 4, ic = 1e-3, uc = 1e-7, fc = 10, kt = 11, Lt = 1 / (kt - 1), hc = typeof Float32Array == "function";
function xn(r, t) {
  return 1 - 3 * t + 3 * r;
}
function Cn(r, t) {
  return 3 * t - 6 * r;
}
function Dn(r) {
  return 3 * r;
}
function Gt(r, t, a) {
  return ((xn(t, a) * r + Cn(t, a)) * r + Dn(t)) * r;
}
function Tn(r, t, a) {
  return 3 * xn(t, a) * r * r + 2 * Cn(t, a) * r + Dn(t);
}
function gc(r, t, a, o, s) {
  var l, u, g = 0;
  do
    u = t + (a - t) / 2, l = Gt(u, o, s) - r, l > 0 ? a = u : t = u;
  while (Math.abs(l) > uc && ++g < fc);
  return u;
}
function vc(r, t, a, o) {
  for (var s = 0; s < lc; ++s) {
    var l = Tn(t, a, o);
    if (l === 0)
      return t;
    var u = Gt(t, a, o) - r;
    t -= u / l;
  }
  return t;
}
function dc(r) {
  return r;
}
var bc = function(t, a, o, s) {
  if (!(0 <= t && t <= 1 && 0 <= o && o <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (t === a && o === s)
    return dc;
  for (var l = hc ? new Float32Array(kt) : new Array(kt), u = 0; u < kt; ++u)
    l[u] = Gt(u * Lt, t, o);
  function g(d) {
    for (var k = 0, _ = 1, C = kt - 1; _ !== C && l[_] <= d; ++_)
      k += Lt;
    --_;
    var O = (d - l[_]) / (l[_ + 1] - l[_]), L = k + O * Lt, B = Tn(L, t, o);
    return B >= ic ? vc(d, L, t, o) : B === 0 ? L : gc(d, k, k + Lt, t, o);
  }
  return function(k) {
    return k === 0 ? 0 : k === 1 ? 1 : Gt(g(k), a, s);
  };
};
const St = /* @__PURE__ */ Le(bc);
var An = { exports: {} }, In = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, En = { exports: {} }, pc = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, mc = pc, yc = Array.prototype.concat, kc = Array.prototype.slice, bn = En.exports = function(t) {
  for (var a = [], o = 0, s = t.length; o < s; o++) {
    var l = t[o];
    mc(l) ? a = yc.call(a, kc.call(l)) : a.push(l);
  }
  return a;
};
bn.wrap = function(r) {
  return function() {
    return r(bn(arguments));
  };
};
var wc = En.exports, Mt = In, $t = wc, Nn = Object.hasOwnProperty, On = /* @__PURE__ */ Object.create(null);
for (var _e in Mt)
  Nn.call(Mt, _e) && (On[Mt[_e]] = _e);
var _r = An.exports = {
  to: {},
  get: {}
};
_r.get = function(r) {
  var t = r.substring(0, 3).toLowerCase(), a, o;
  switch (t) {
    case "hsl":
      a = _r.get.hsl(r), o = "hsl";
      break;
    case "hwb":
      a = _r.get.hwb(r), o = "hwb";
      break;
    default:
      a = _r.get.rgb(r), o = "rgb";
      break;
  }
  return a ? { model: o, value: a } : null;
};
_r.get.rgb = function(r) {
  if (!r)
    return null;
  var t = /^#([a-f0-9]{3,4})$/i, a = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, o = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, s = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, l = /^(\w+)$/, u = [0, 0, 0, 1], g, d, k;
  if (g = r.match(a)) {
    for (k = g[2], g = g[1], d = 0; d < 3; d++) {
      var _ = d * 2;
      u[d] = parseInt(g.slice(_, _ + 2), 16);
    }
    k && (u[3] = parseInt(k, 16) / 255);
  } else if (g = r.match(t)) {
    for (g = g[1], k = g[3], d = 0; d < 3; d++)
      u[d] = parseInt(g[d] + g[d], 16);
    k && (u[3] = parseInt(k + k, 16) / 255);
  } else if (g = r.match(o)) {
    for (d = 0; d < 3; d++)
      u[d] = parseInt(g[d + 1], 0);
    g[4] && (g[5] ? u[3] = parseFloat(g[4]) * 0.01 : u[3] = parseFloat(g[4]));
  } else if (g = r.match(s)) {
    for (d = 0; d < 3; d++)
      u[d] = Math.round(parseFloat(g[d + 1]) * 2.55);
    g[4] && (g[5] ? u[3] = parseFloat(g[4]) * 0.01 : u[3] = parseFloat(g[4]));
  } else
    return (g = r.match(l)) ? g[1] === "transparent" ? [0, 0, 0, 0] : Nn.call(Mt, g[1]) ? (u = Mt[g[1]], u[3] = 1, u) : null : null;
  for (d = 0; d < 3; d++)
    u[d] = Gr(u[d], 0, 255);
  return u[3] = Gr(u[3], 0, 1), u;
};
_r.get.hsl = function(r) {
  if (!r)
    return null;
  var t = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, a = r.match(t);
  if (a) {
    var o = parseFloat(a[4]), s = (parseFloat(a[1]) % 360 + 360) % 360, l = Gr(parseFloat(a[2]), 0, 100), u = Gr(parseFloat(a[3]), 0, 100), g = Gr(isNaN(o) ? 1 : o, 0, 1);
    return [s, l, u, g];
  }
  return null;
};
_r.get.hwb = function(r) {
  if (!r)
    return null;
  var t = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, a = r.match(t);
  if (a) {
    var o = parseFloat(a[4]), s = (parseFloat(a[1]) % 360 + 360) % 360, l = Gr(parseFloat(a[2]), 0, 100), u = Gr(parseFloat(a[3]), 0, 100), g = Gr(isNaN(o) ? 1 : o, 0, 1);
    return [s, l, u, g];
  }
  return null;
};
_r.to.hex = function() {
  var r = $t(arguments);
  return "#" + zt(r[0]) + zt(r[1]) + zt(r[2]) + (r[3] < 1 ? zt(Math.round(r[3] * 255)) : "");
};
_r.to.rgb = function() {
  var r = $t(arguments);
  return r.length < 4 || r[3] === 1 ? "rgb(" + Math.round(r[0]) + ", " + Math.round(r[1]) + ", " + Math.round(r[2]) + ")" : "rgba(" + Math.round(r[0]) + ", " + Math.round(r[1]) + ", " + Math.round(r[2]) + ", " + r[3] + ")";
};
_r.to.rgb.percent = function() {
  var r = $t(arguments), t = Math.round(r[0] / 255 * 100), a = Math.round(r[1] / 255 * 100), o = Math.round(r[2] / 255 * 100);
  return r.length < 4 || r[3] === 1 ? "rgb(" + t + "%, " + a + "%, " + o + "%)" : "rgba(" + t + "%, " + a + "%, " + o + "%, " + r[3] + ")";
};
_r.to.hsl = function() {
  var r = $t(arguments);
  return r.length < 4 || r[3] === 1 ? "hsl(" + r[0] + ", " + r[1] + "%, " + r[2] + "%)" : "hsla(" + r[0] + ", " + r[1] + "%, " + r[2] + "%, " + r[3] + ")";
};
_r.to.hwb = function() {
  var r = $t(arguments), t = "";
  return r.length >= 4 && r[3] !== 1 && (t = ", " + r[3]), "hwb(" + r[0] + ", " + r[1] + "%, " + r[2] + "%" + t + ")";
};
_r.to.keyword = function(r) {
  return On[r.slice(0, 3)];
};
function Gr(r, t, a) {
  return Math.min(Math.max(t, r), a);
}
function zt(r) {
  var t = Math.round(r).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
var Mc = An.exports;
const _t = In, Rn = {};
for (const r of Object.keys(_t))
  Rn[_t[r]] = r;
const A = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var Bn = A;
for (const r of Object.keys(A)) {
  if (!("channels" in A[r]))
    throw new Error("missing channels property: " + r);
  if (!("labels" in A[r]))
    throw new Error("missing channel labels property: " + r);
  if (A[r].labels.length !== A[r].channels)
    throw new Error("channel and label counts mismatch: " + r);
  const { channels: t, labels: a } = A[r];
  delete A[r].channels, delete A[r].labels, Object.defineProperty(A[r], "channels", { value: t }), Object.defineProperty(A[r], "labels", { value: a });
}
A.rgb.hsl = function(r) {
  const t = r[0] / 255, a = r[1] / 255, o = r[2] / 255, s = Math.min(t, a, o), l = Math.max(t, a, o), u = l - s;
  let g, d;
  l === s ? g = 0 : t === l ? g = (a - o) / u : a === l ? g = 2 + (o - t) / u : o === l && (g = 4 + (t - a) / u), g = Math.min(g * 60, 360), g < 0 && (g += 360);
  const k = (s + l) / 2;
  return l === s ? d = 0 : k <= 0.5 ? d = u / (l + s) : d = u / (2 - l - s), [g, d * 100, k * 100];
};
A.rgb.hsv = function(r) {
  let t, a, o, s, l;
  const u = r[0] / 255, g = r[1] / 255, d = r[2] / 255, k = Math.max(u, g, d), _ = k - Math.min(u, g, d), C = function(O) {
    return (k - O) / 6 / _ + 1 / 2;
  };
  return _ === 0 ? (s = 0, l = 0) : (l = _ / k, t = C(u), a = C(g), o = C(d), u === k ? s = o - a : g === k ? s = 1 / 3 + t - o : d === k && (s = 2 / 3 + a - t), s < 0 ? s += 1 : s > 1 && (s -= 1)), [
    s * 360,
    l * 100,
    k * 100
  ];
};
A.rgb.hwb = function(r) {
  const t = r[0], a = r[1];
  let o = r[2];
  const s = A.rgb.hsl(r)[0], l = 1 / 255 * Math.min(t, Math.min(a, o));
  return o = 1 - 1 / 255 * Math.max(t, Math.max(a, o)), [s, l * 100, o * 100];
};
A.rgb.cmyk = function(r) {
  const t = r[0] / 255, a = r[1] / 255, o = r[2] / 255, s = Math.min(1 - t, 1 - a, 1 - o), l = (1 - t - s) / (1 - s) || 0, u = (1 - a - s) / (1 - s) || 0, g = (1 - o - s) / (1 - s) || 0;
  return [l * 100, u * 100, g * 100, s * 100];
};
function Pc(r, t) {
  return (r[0] - t[0]) ** 2 + (r[1] - t[1]) ** 2 + (r[2] - t[2]) ** 2;
}
A.rgb.keyword = function(r) {
  const t = Rn[r];
  if (t)
    return t;
  let a = 1 / 0, o;
  for (const s of Object.keys(_t)) {
    const l = _t[s], u = Pc(r, l);
    u < a && (a = u, o = s);
  }
  return o;
};
A.keyword.rgb = function(r) {
  return _t[r];
};
A.rgb.xyz = function(r) {
  let t = r[0] / 255, a = r[1] / 255, o = r[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92, o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92;
  const s = t * 0.4124 + a * 0.3576 + o * 0.1805, l = t * 0.2126 + a * 0.7152 + o * 0.0722, u = t * 0.0193 + a * 0.1192 + o * 0.9505;
  return [s * 100, l * 100, u * 100];
};
A.rgb.lab = function(r) {
  const t = A.rgb.xyz(r);
  let a = t[0], o = t[1], s = t[2];
  a /= 95.047, o /= 100, s /= 108.883, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
  const l = 116 * o - 16, u = 500 * (a - o), g = 200 * (o - s);
  return [l, u, g];
};
A.hsl.rgb = function(r) {
  const t = r[0] / 360, a = r[1] / 100, o = r[2] / 100;
  let s, l, u;
  if (a === 0)
    return u = o * 255, [u, u, u];
  o < 0.5 ? s = o * (1 + a) : s = o + a - o * a;
  const g = 2 * o - s, d = [0, 0, 0];
  for (let k = 0; k < 3; k++)
    l = t + 1 / 3 * -(k - 1), l < 0 && l++, l > 1 && l--, 6 * l < 1 ? u = g + (s - g) * 6 * l : 2 * l < 1 ? u = s : 3 * l < 2 ? u = g + (s - g) * (2 / 3 - l) * 6 : u = g, d[k] = u * 255;
  return d;
};
A.hsl.hsv = function(r) {
  const t = r[0];
  let a = r[1] / 100, o = r[2] / 100, s = a;
  const l = Math.max(o, 0.01);
  o *= 2, a *= o <= 1 ? o : 2 - o, s *= l <= 1 ? l : 2 - l;
  const u = (o + a) / 2, g = o === 0 ? 2 * s / (l + s) : 2 * a / (o + a);
  return [t, g * 100, u * 100];
};
A.hsv.rgb = function(r) {
  const t = r[0] / 60, a = r[1] / 100;
  let o = r[2] / 100;
  const s = Math.floor(t) % 6, l = t - Math.floor(t), u = 255 * o * (1 - a), g = 255 * o * (1 - a * l), d = 255 * o * (1 - a * (1 - l));
  switch (o *= 255, s) {
    case 0:
      return [o, d, u];
    case 1:
      return [g, o, u];
    case 2:
      return [u, o, d];
    case 3:
      return [u, g, o];
    case 4:
      return [d, u, o];
    case 5:
      return [o, u, g];
  }
};
A.hsv.hsl = function(r) {
  const t = r[0], a = r[1] / 100, o = r[2] / 100, s = Math.max(o, 0.01);
  let l, u;
  u = (2 - a) * o;
  const g = (2 - a) * s;
  return l = a * s, l /= g <= 1 ? g : 2 - g, l = l || 0, u /= 2, [t, l * 100, u * 100];
};
A.hwb.rgb = function(r) {
  const t = r[0] / 360;
  let a = r[1] / 100, o = r[2] / 100;
  const s = a + o;
  let l;
  s > 1 && (a /= s, o /= s);
  const u = Math.floor(6 * t), g = 1 - o;
  l = 6 * t - u, u & 1 && (l = 1 - l);
  const d = a + l * (g - a);
  let k, _, C;
  switch (u) {
    default:
    case 6:
    case 0:
      k = g, _ = d, C = a;
      break;
    case 1:
      k = d, _ = g, C = a;
      break;
    case 2:
      k = a, _ = g, C = d;
      break;
    case 3:
      k = a, _ = d, C = g;
      break;
    case 4:
      k = d, _ = a, C = g;
      break;
    case 5:
      k = g, _ = a, C = d;
      break;
  }
  return [k * 255, _ * 255, C * 255];
};
A.cmyk.rgb = function(r) {
  const t = r[0] / 100, a = r[1] / 100, o = r[2] / 100, s = r[3] / 100, l = 1 - Math.min(1, t * (1 - s) + s), u = 1 - Math.min(1, a * (1 - s) + s), g = 1 - Math.min(1, o * (1 - s) + s);
  return [l * 255, u * 255, g * 255];
};
A.xyz.rgb = function(r) {
  const t = r[0] / 100, a = r[1] / 100, o = r[2] / 100;
  let s, l, u;
  return s = t * 3.2406 + a * -1.5372 + o * -0.4986, l = t * -0.9689 + a * 1.8758 + o * 0.0415, u = t * 0.0557 + a * -0.204 + o * 1.057, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92, s = Math.min(Math.max(0, s), 1), l = Math.min(Math.max(0, l), 1), u = Math.min(Math.max(0, u), 1), [s * 255, l * 255, u * 255];
};
A.xyz.lab = function(r) {
  let t = r[0], a = r[1], o = r[2];
  t /= 95.047, a /= 100, o /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
  const s = 116 * a - 16, l = 500 * (t - a), u = 200 * (a - o);
  return [s, l, u];
};
A.lab.xyz = function(r) {
  const t = r[0], a = r[1], o = r[2];
  let s, l, u;
  l = (t + 16) / 116, s = a / 500 + l, u = l - o / 200;
  const g = l ** 3, d = s ** 3, k = u ** 3;
  return l = g > 8856e-6 ? g : (l - 16 / 116) / 7.787, s = d > 8856e-6 ? d : (s - 16 / 116) / 7.787, u = k > 8856e-6 ? k : (u - 16 / 116) / 7.787, s *= 95.047, l *= 100, u *= 108.883, [s, l, u];
};
A.lab.lch = function(r) {
  const t = r[0], a = r[1], o = r[2];
  let s;
  s = Math.atan2(o, a) * 360 / 2 / Math.PI, s < 0 && (s += 360);
  const u = Math.sqrt(a * a + o * o);
  return [t, u, s];
};
A.lch.lab = function(r) {
  const t = r[0], a = r[1], s = r[2] / 360 * 2 * Math.PI, l = a * Math.cos(s), u = a * Math.sin(s);
  return [t, l, u];
};
A.rgb.ansi16 = function(r, t = null) {
  const [a, o, s] = r;
  let l = t === null ? A.rgb.hsv(r)[2] : t;
  if (l = Math.round(l / 50), l === 0)
    return 30;
  let u = 30 + (Math.round(s / 255) << 2 | Math.round(o / 255) << 1 | Math.round(a / 255));
  return l === 2 && (u += 60), u;
};
A.hsv.ansi16 = function(r) {
  return A.rgb.ansi16(A.hsv.rgb(r), r[2]);
};
A.rgb.ansi256 = function(r) {
  const t = r[0], a = r[1], o = r[2];
  return t === a && a === o ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(a / 255 * 5) + Math.round(o / 255 * 5);
};
A.ansi16.rgb = function(r) {
  let t = r % 10;
  if (t === 0 || t === 7)
    return r > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const a = (~~(r > 50) + 1) * 0.5, o = (t & 1) * a * 255, s = (t >> 1 & 1) * a * 255, l = (t >> 2 & 1) * a * 255;
  return [o, s, l];
};
A.ansi256.rgb = function(r) {
  if (r >= 232) {
    const l = (r - 232) * 10 + 8;
    return [l, l, l];
  }
  r -= 16;
  let t;
  const a = Math.floor(r / 36) / 5 * 255, o = Math.floor((t = r % 36) / 6) / 5 * 255, s = t % 6 / 5 * 255;
  return [a, o, s];
};
A.rgb.hex = function(r) {
  const a = (((Math.round(r[0]) & 255) << 16) + ((Math.round(r[1]) & 255) << 8) + (Math.round(r[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(a.length) + a;
};
A.hex.rgb = function(r) {
  const t = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let a = t[0];
  t[0].length === 3 && (a = a.split("").map((g) => g + g).join(""));
  const o = parseInt(a, 16), s = o >> 16 & 255, l = o >> 8 & 255, u = o & 255;
  return [s, l, u];
};
A.rgb.hcg = function(r) {
  const t = r[0] / 255, a = r[1] / 255, o = r[2] / 255, s = Math.max(Math.max(t, a), o), l = Math.min(Math.min(t, a), o), u = s - l;
  let g, d;
  return u < 1 ? g = l / (1 - u) : g = 0, u <= 0 ? d = 0 : s === t ? d = (a - o) / u % 6 : s === a ? d = 2 + (o - t) / u : d = 4 + (t - a) / u, d /= 6, d %= 1, [d * 360, u * 100, g * 100];
};
A.hsl.hcg = function(r) {
  const t = r[1] / 100, a = r[2] / 100, o = a < 0.5 ? 2 * t * a : 2 * t * (1 - a);
  let s = 0;
  return o < 1 && (s = (a - 0.5 * o) / (1 - o)), [r[0], o * 100, s * 100];
};
A.hsv.hcg = function(r) {
  const t = r[1] / 100, a = r[2] / 100, o = t * a;
  let s = 0;
  return o < 1 && (s = (a - o) / (1 - o)), [r[0], o * 100, s * 100];
};
A.hcg.rgb = function(r) {
  const t = r[0] / 360, a = r[1] / 100, o = r[2] / 100;
  if (a === 0)
    return [o * 255, o * 255, o * 255];
  const s = [0, 0, 0], l = t % 1 * 6, u = l % 1, g = 1 - u;
  let d = 0;
  switch (Math.floor(l)) {
    case 0:
      s[0] = 1, s[1] = u, s[2] = 0;
      break;
    case 1:
      s[0] = g, s[1] = 1, s[2] = 0;
      break;
    case 2:
      s[0] = 0, s[1] = 1, s[2] = u;
      break;
    case 3:
      s[0] = 0, s[1] = g, s[2] = 1;
      break;
    case 4:
      s[0] = u, s[1] = 0, s[2] = 1;
      break;
    default:
      s[0] = 1, s[1] = 0, s[2] = g;
  }
  return d = (1 - a) * o, [
    (a * s[0] + d) * 255,
    (a * s[1] + d) * 255,
    (a * s[2] + d) * 255
  ];
};
A.hcg.hsv = function(r) {
  const t = r[1] / 100, a = r[2] / 100, o = t + a * (1 - t);
  let s = 0;
  return o > 0 && (s = t / o), [r[0], s * 100, o * 100];
};
A.hcg.hsl = function(r) {
  const t = r[1] / 100, o = r[2] / 100 * (1 - t) + 0.5 * t;
  let s = 0;
  return o > 0 && o < 0.5 ? s = t / (2 * o) : o >= 0.5 && o < 1 && (s = t / (2 * (1 - o))), [r[0], s * 100, o * 100];
};
A.hcg.hwb = function(r) {
  const t = r[1] / 100, a = r[2] / 100, o = t + a * (1 - t);
  return [r[0], (o - t) * 100, (1 - o) * 100];
};
A.hwb.hcg = function(r) {
  const t = r[1] / 100, o = 1 - r[2] / 100, s = o - t;
  let l = 0;
  return s < 1 && (l = (o - s) / (1 - s)), [r[0], s * 100, l * 100];
};
A.apple.rgb = function(r) {
  return [r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255];
};
A.rgb.apple = function(r) {
  return [r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535];
};
A.gray.rgb = function(r) {
  return [r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255];
};
A.gray.hsl = function(r) {
  return [0, 0, r[0]];
};
A.gray.hsv = A.gray.hsl;
A.gray.hwb = function(r) {
  return [0, 100, r[0]];
};
A.gray.cmyk = function(r) {
  return [0, 0, 0, r[0]];
};
A.gray.lab = function(r) {
  return [r[0], 0, 0];
};
A.gray.hex = function(r) {
  const t = Math.round(r[0] / 100 * 255) & 255, o = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(o.length) + o;
};
A.rgb.gray = function(r) {
  return [(r[0] + r[1] + r[2]) / 3 / 255 * 100];
};
const Ut = Bn;
function _c() {
  const r = {}, t = Object.keys(Ut);
  for (let a = t.length, o = 0; o < a; o++)
    r[t[o]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return r;
}
function $c(r) {
  const t = _c(), a = [r];
  for (t[r].distance = 0; a.length; ) {
    const o = a.pop(), s = Object.keys(Ut[o]);
    for (let l = s.length, u = 0; u < l; u++) {
      const g = s[u], d = t[g];
      d.distance === -1 && (d.distance = t[o].distance + 1, d.parent = o, a.unshift(g));
    }
  }
  return t;
}
function Fc(r, t) {
  return function(a) {
    return t(r(a));
  };
}
function xc(r, t) {
  const a = [t[r].parent, r];
  let o = Ut[t[r].parent][r], s = t[r].parent;
  for (; t[s].parent; )
    a.unshift(t[s].parent), o = Fc(Ut[t[s].parent][s], o), s = t[s].parent;
  return o.conversion = a, o;
}
var Cc = function(r) {
  const t = $c(r), a = {}, o = Object.keys(t);
  for (let s = o.length, l = 0; l < s; l++) {
    const u = o[l];
    t[u].parent !== null && (a[u] = xc(u, t));
  }
  return a;
};
const De = Bn, Dc = Cc, it = {}, Tc = Object.keys(De);
function Ac(r) {
  const t = function(...a) {
    const o = a[0];
    return o == null ? o : (o.length > 1 && (a = o), r(a));
  };
  return "conversion" in r && (t.conversion = r.conversion), t;
}
function Ic(r) {
  const t = function(...a) {
    const o = a[0];
    if (o == null)
      return o;
    o.length > 1 && (a = o);
    const s = r(a);
    if (typeof s == "object")
      for (let l = s.length, u = 0; u < l; u++)
        s[u] = Math.round(s[u]);
    return s;
  };
  return "conversion" in r && (t.conversion = r.conversion), t;
}
Tc.forEach((r) => {
  it[r] = {}, Object.defineProperty(it[r], "channels", { value: De[r].channels }), Object.defineProperty(it[r], "labels", { value: De[r].labels });
  const t = Dc(r);
  Object.keys(t).forEach((o) => {
    const s = t[o];
    it[r][o] = Ic(s), it[r][o].raw = Ac(s);
  });
});
var Ec = it;
const ut = Mc, Pr = Ec, Ln = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], Te = {};
for (const r of Object.keys(Pr))
  Te[[...Pr[r].labels].sort().join("")] = r;
const Yt = {};
function vr(r, t) {
  if (!(this instanceof vr))
    return new vr(r, t);
  if (t && t in Ln && (t = null), t && !(t in Pr))
    throw new Error("Unknown model: " + t);
  let a, o;
  if (r == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (r instanceof vr)
    this.model = r.model, this.color = [...r.color], this.valpha = r.valpha;
  else if (typeof r == "string") {
    const s = ut.get(r);
    if (s === null)
      throw new Error("Unable to parse color from string: " + r);
    this.model = s.model, o = Pr[this.model].channels, this.color = s.value.slice(0, o), this.valpha = typeof s.value[o] == "number" ? s.value[o] : 1;
  } else if (r.length > 0) {
    this.model = t || "rgb", o = Pr[this.model].channels;
    const s = Array.prototype.slice.call(r, 0, o);
    this.color = Ae(s, o), this.valpha = typeof r[o] == "number" ? r[o] : 1;
  } else if (typeof r == "number")
    this.model = "rgb", this.color = [
      r >> 16 & 255,
      r >> 8 & 255,
      r & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const s = Object.keys(r);
    "alpha" in r && (s.splice(s.indexOf("alpha"), 1), this.valpha = typeof r.alpha == "number" ? r.alpha : 0);
    const l = s.sort().join("");
    if (!(l in Te))
      throw new Error("Unable to parse color from object: " + JSON.stringify(r));
    this.model = Te[l];
    const { labels: u } = Pr[this.model], g = [];
    for (a = 0; a < u.length; a++)
      g.push(r[u[a]]);
    this.color = Ae(g);
  }
  if (Yt[this.model])
    for (o = Pr[this.model].channels, a = 0; a < o; a++) {
      const s = Yt[this.model][a];
      s && (this.color[a] = s(this.color[a]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
vr.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(r) {
    let t = this.model in ut.to ? this : this.rgb();
    t = t.round(typeof r == "number" ? r : 1);
    const a = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return ut.to[t.model](a);
  },
  percentString(r) {
    const t = this.rgb().round(typeof r == "number" ? r : 1), a = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return ut.to.rgb.percent(a);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const r = {}, { channels: t } = Pr[this.model], { labels: a } = Pr[this.model];
    for (let o = 0; o < t; o++)
      r[a[o]] = this.color[o];
    return this.valpha !== 1 && (r.alpha = this.valpha), r;
  },
  unitArray() {
    const r = this.rgb().color;
    return r[0] /= 255, r[1] /= 255, r[2] /= 255, this.valpha !== 1 && r.push(this.valpha), r;
  },
  unitObject() {
    const r = this.rgb().object();
    return r.r /= 255, r.g /= 255, r.b /= 255, this.valpha !== 1 && (r.alpha = this.valpha), r;
  },
  round(r) {
    return r = Math.max(r || 0, 0), new vr([...this.color.map(Oc(r)), this.valpha], this.model);
  },
  alpha(r) {
    return r !== void 0 ? new vr([...this.color, Math.max(0, Math.min(1, r))], this.model) : this.valpha;
  },
  // Rgb
  red: sr("rgb", 0, ur(255)),
  green: sr("rgb", 1, ur(255)),
  blue: sr("rgb", 2, ur(255)),
  hue: sr(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (r) => (r % 360 + 360) % 360),
  saturationl: sr("hsl", 1, ur(100)),
  lightness: sr("hsl", 2, ur(100)),
  saturationv: sr("hsv", 1, ur(100)),
  value: sr("hsv", 2, ur(100)),
  chroma: sr("hcg", 1, ur(100)),
  gray: sr("hcg", 2, ur(100)),
  white: sr("hwb", 1, ur(100)),
  wblack: sr("hwb", 2, ur(100)),
  cyan: sr("cmyk", 0, ur(100)),
  magenta: sr("cmyk", 1, ur(100)),
  yellow: sr("cmyk", 2, ur(100)),
  black: sr("cmyk", 3, ur(100)),
  x: sr("xyz", 0, ur(95.047)),
  y: sr("xyz", 1, ur(100)),
  z: sr("xyz", 2, ur(108.833)),
  l: sr("lab", 0, ur(100)),
  a: sr("lab", 1),
  b: sr("lab", 2),
  keyword(r) {
    return r !== void 0 ? new vr(r) : Pr[this.model].keyword(this.color);
  },
  hex(r) {
    return r !== void 0 ? new vr(r) : ut.to.hex(this.rgb().round().color);
  },
  hexa(r) {
    if (r !== void 0)
      return new vr(r);
    const t = this.rgb().round().color;
    let a = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return a.length === 1 && (a = "0" + a), ut.to.hex(t) + a;
  },
  rgbNumber() {
    const r = this.rgb().color;
    return (r[0] & 255) << 16 | (r[1] & 255) << 8 | r[2] & 255;
  },
  luminosity() {
    const r = this.rgb().color, t = [];
    for (const [a, o] of r.entries()) {
      const s = o / 255;
      t[a] = s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  },
  contrast(r) {
    const t = this.luminosity(), a = r.luminosity();
    return t > a ? (t + 0.05) / (a + 0.05) : (a + 0.05) / (t + 0.05);
  },
  level(r) {
    const t = this.contrast(r);
    return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark() {
    const r = this.rgb().color;
    return (r[0] * 2126 + r[1] * 7152 + r[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const r = this.rgb();
    for (let t = 0; t < 3; t++)
      r.color[t] = 255 - r.color[t];
    return r;
  },
  lighten(r) {
    const t = this.hsl();
    return t.color[2] += t.color[2] * r, t;
  },
  darken(r) {
    const t = this.hsl();
    return t.color[2] -= t.color[2] * r, t;
  },
  saturate(r) {
    const t = this.hsl();
    return t.color[1] += t.color[1] * r, t;
  },
  desaturate(r) {
    const t = this.hsl();
    return t.color[1] -= t.color[1] * r, t;
  },
  whiten(r) {
    const t = this.hwb();
    return t.color[1] += t.color[1] * r, t;
  },
  blacken(r) {
    const t = this.hwb();
    return t.color[2] += t.color[2] * r, t;
  },
  grayscale() {
    const r = this.rgb().color, t = r[0] * 0.3 + r[1] * 0.59 + r[2] * 0.11;
    return vr.rgb(t, t, t);
  },
  fade(r) {
    return this.alpha(this.valpha - this.valpha * r);
  },
  opaquer(r) {
    return this.alpha(this.valpha + this.valpha * r);
  },
  rotate(r) {
    const t = this.hsl();
    let a = t.color[0];
    return a = (a + r) % 360, a = a < 0 ? 360 + a : a, t.color[0] = a, t;
  },
  mix(r, t) {
    if (!r || !r.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof r);
    const a = r.rgb(), o = this.rgb(), s = t === void 0 ? 0.5 : t, l = 2 * s - 1, u = a.alpha() - o.alpha(), g = ((l * u === -1 ? l : (l + u) / (1 + l * u)) + 1) / 2, d = 1 - g;
    return vr.rgb(
      g * a.red() + d * o.red(),
      g * a.green() + d * o.green(),
      g * a.blue() + d * o.blue(),
      a.alpha() * s + o.alpha() * (1 - s)
    );
  }
};
for (const r of Object.keys(Pr)) {
  if (Ln.includes(r))
    continue;
  const { channels: t } = Pr[r];
  vr.prototype[r] = function(...a) {
    return this.model === r ? new vr(this) : a.length > 0 ? new vr(a, r) : new vr([...Rc(Pr[this.model][r].raw(this.color)), this.valpha], r);
  }, vr[r] = function(...a) {
    let o = a[0];
    return typeof o == "number" && (o = Ae(a, t)), new vr(o, r);
  };
}
function Nc(r, t) {
  return Number(r.toFixed(t));
}
function Oc(r) {
  return function(t) {
    return Nc(t, r);
  };
}
function sr(r, t, a) {
  r = Array.isArray(r) ? r : [r];
  for (const o of r)
    (Yt[o] || (Yt[o] = []))[t] = a;
  return r = r[0], function(o) {
    let s;
    return o !== void 0 ? (a && (o = a(o)), s = this[r](), s.color[t] = o, s) : (s = this[r]().color[t], a && (s = a(s)), s);
  };
}
function ur(r) {
  return function(t) {
    return Math.max(0, Math.min(r, t));
  };
}
function Rc(r) {
  return Array.isArray(r) ? r : [r];
}
function Ae(r, t) {
  for (let a = 0; a < t; a++)
    typeof r[a] != "number" && (r[a] = 0);
  return r;
}
var Bc = vr;
const Lc = /* @__PURE__ */ Le(Bc), pn = (r) => {
  const t = Er.fromInt($n(r));
  return [t.hue, t.chroma, t.tone];
};
function Ie(r) {
  const t = Er.from(r[0], r[1], r[2]);
  return oc(t.toInt());
}
function zc(r, t) {
  if (t) {
    const [a, o, s, l] = Wr(r).rgba(), u = Wr.rgb(a, o, s).hex();
    return `hcta(${pn(u).map((d) => Math.round(d)).join(",")},${l})`;
  } else
    return `hct(${pn(r).map((o) => Math.round(o)).join(",")})`;
}
function Ee(r, t) {
  let a = r;
  const o = Wr(r).alpha() !== 1, s = Lc(r);
  switch (t) {
    case "hex": {
      a = o ? s.hexa().toString() : s.hex().toString();
      break;
    }
    case "hct": {
      a = zc(r, o);
      break;
    }
    case "rgb": {
      a = s.rgb().string();
      break;
    }
    case "hsv": {
      a = s.hsv().string();
      break;
    }
  }
  return a;
}
function $e({
  hRotate: r,
  cTarget: t,
  tStart: a,
  tTarget: o,
  tEasing: s,
  i: l,
  steps: u
}) {
  if (!l || !u)
    return Ie([r, t, a]);
  const g = l / u, d = St(...s), k = a + (o - a) * d(g);
  return Ie([r, t, k]);
}
function mn(r, {
  hRotate: t,
  // 色相偏移（旋转）
  hEasing: a,
  // 色相偏移的缓动函数
  cTarget: o,
  // 色度
  cEasing: s,
  // 色度的缓动函数
  tTarget: l,
  // 目标明度
  tEasing: u
  // 明度的缓动函数
}, g, d, k) {
  const _ = Er.fromInt($n(r)), [C, O, L] = [_.hue, _.chroma, _.tone], B = d / k, w = St(...a), R = St(...s), or = St(...u), tr = C + Sc(C, t * w(B), g), G = O + (o - O) * R(B), ar = L + (l - L) * or(B);
  return Ie([tr, G, ar]);
}
function Sc(r, t, a) {
  const { segment: o, multiply: s } = a;
  return qc(o[0], o[1], t, s)(r);
}
function qc(r, t, a, o) {
  const s = Math.PI / 180, l = 360 / (t - r), u = -1 * l * s * (3 * r + t) / 4, g = a * o, d = (a + g) / 2, k = (a - g) / 2;
  return (_) => {
    const C = _ * s;
    return k * Math.sin(l * C + u) + d;
  };
}
function Fe(r) {
  return r >= 0 && r <= 255;
}
function yn(r) {
  return r.length < 4 ? `rgb(${r.join(",")})` : `rgba(${r.join(",")})`;
}
function Ne(r, t) {
  const [a, o, s] = Wr(r).rgb(), [l, u, g] = Wr(t).rgb();
  for (let d = 0.01; d <= 1; d += 0.01) {
    const k = Math.round((a - l * (1 - d)) / d), _ = Math.round((o - u * (1 - d)) / d), C = Math.round((s - g * (1 - d)) / d);
    if (Fe(k) && Fe(_) && Fe(C))
      return Wr(yn([k, _, C, Math.round(d * 100) / 100])).hex();
  }
  return Wr(yn([a, o, s, 1])).hex();
}
function kn(r, {
  up: t,
  down: a,
  upSteps: o,
  downSteps: s,
  hue: l
}) {
  const u = [];
  for (let g = o; g >= 1; g--)
    u.push(mn(r, t, l, g, o));
  u.push(r);
  for (let g = 1; g <= s; g++)
    u.push(mn(r, a, l, g, s));
  return u;
}
function Gc({
  up: r,
  down: t,
  upSteps: a,
  downSteps: o
}) {
  const s = [];
  for (let l = a; l >= 1; l--)
    s.push($e({ ...r, i: l, steps: a }));
  s.push($e(r));
  for (let l = 1; l <= o; l++)
    s.push($e({ ...t, i: l, steps: o }));
  return s;
}
function Uc(r) {
  for (const t in r)
    document.documentElement.style.setProperty(t, r[t]);
}
const ze = {
  data: {
    colorList: [
      {
        color: "#409eff",
        darkColor: "#589ffe",
        id: "Primary",
        title: "Brand",
        type: "normal"
      },
      {
        color: "#e6202a",
        darkColor: "#ff5d55",
        id: "Red",
        title: "Red",
        type: "normal"
      },
      {
        color: "#ff832b",
        darkColor: "#ffa366",
        id: "65c1",
        title: "Orange",
        type: "normal"
      },
      {
        color: "#ffcc00",
        darkColor: "#ffd668",
        id: "Yellow",
        title: "Yellow",
        type: "normal"
      },
      {
        color: "#1db84c",
        darkColor: "#65ca67",
        id: "Green",
        title: "Green",
        type: "normal"
      },
      {
        color: "#00b3af",
        darkColor: "#56c6c4",
        id: "Sky",
        title: "Teal",
        type: "normal"
      },
      {
        color: "#1fa5ff",
        darkColor: "#67baff",
        id: "f38c",
        title: "Cyan",
        type: "normal"
      },
      {
        color: "#176cff",
        darkColor: "#5792ff",
        id: "116bd",
        title: "Blue",
        type: "normal"
      },
      {
        color: "#8a3ffc",
        darkColor: "#a275ff",
        id: "Purple",
        title: "Purple",
        type: "normal"
      },
      {
        color: "#ea3c8e",
        darkColor: "#ff6ba3",
        id: "17d81",
        title: "Magenta",
        type: "normal"
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
            0.7
          ],
          cEasing: [
            0,
            0,
            1,
            1
          ],
          hEasing: [
            0,
            0,
            1,
            1
          ]
        },
        up: {
          cTarget: 50,
          hRotate: 20,
          tTarget: 10,
          tEasing: [
            0,
            0,
            1,
            1
          ],
          cEasing: [
            0,
            0,
            1,
            1
          ],
          hEasing: [
            0,
            0,
            1,
            1
          ]
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
              0.72
            ]
          },
          up: {
            tTarget: 6,
            tEasing: [
              0.29,
              0,
              0.65,
              1
            ]
          }
        }
      },
      hue: {
        palettes: {
          multiply: -0.5,
          segment: [
            50,
            200
          ]
        },
        neutral: {
          multiply: 1,
          segment: [
            0,
            360
          ]
        }
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
            1
          ],
          cEasing: [
            0,
            0,
            1,
            1
          ],
          hEasing: [
            0,
            0,
            1,
            1
          ]
        },
        up: {
          cTarget: 20,
          hRotate: -20,
          tTarget: 96,
          tEasing: [
            0,
            0,
            0.5,
            0.7
          ],
          cEasing: [
            0,
            0,
            1,
            1
          ],
          hEasing: [
            0,
            0,
            1,
            1
          ]
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
              0.29
            ]
          },
          up: {
            tTarget: 97,
            tEasing: [
              0.15,
              0.05,
              0.1,
              0.82
            ]
          }
        }
      },
      step: {
        down: 4,
        up: 5
      }
    },
    stepFliter: [],
    system: {
      edit: {
        isolateEdit: !1
      },
      pattern: {
        displayFliterStep: !1,
        isFliterStep: !1,
        isolateDark: !1
      }
    }
  },
  name: "element-plus"
};
function Yc(r = null) {
  const t = r || ze.data.generate, a = Vt(t, !0);
  return {
    light: Vt(t),
    dark: a
  };
}
function Vc(r = null, t = "rgb") {
  const a = r || ze.data.generate, o = Vt(a, !0);
  return {
    light: Vt(a).map((l) => Ee(Ne(l, "#fff"), t)),
    dark: o.map((l) => Ee(Ne(l, "#000"), t))
  };
}
function jc({
  light: r,
  dark: t,
  generate: a,
  format: o
}) {
  const s = a || ze.data.generate, { up: l, down: u } = s.step, { up: g, down: d } = s.light, { up: k, down: _ } = s.dark, C = s.hue.palettes, O = kn(t, {
    up: k,
    down: _,
    upSteps: l,
    downSteps: u,
    hue: C
  });
  return {
    light: kn(r, {
      up: g,
      down: d,
      upSteps: l,
      downSteps: u,
      hue: C
    }),
    dark: O.map((L) => Ee(Ne(L, "#000"), o))
  };
}
function Vt(r, t = !1) {
  const { up: a, down: o } = r.step, {
    cTarget: s,
    hRotate: l,
    up: u,
    down: g,
    tTarget: d
  } = r[t ? "dark" : "light"].neutral;
  return Gc({
    up: {
      ...u,
      cTarget: s,
      hRotate: l,
      tStart: d
    },
    down: {
      ...g,
      cTarget: s,
      hRotate: l,
      tStart: d
    },
    upSteps: a,
    downSteps: o
  });
}
export {
  ze as ELEMENT_PLUS_CONSTANTS,
  mn as adjustHex,
  $e as adjustNeutralHex,
  Sc as calcHueRotate,
  Uc as changeThemeByCssvars,
  Ee as colorTypeFormat,
  qc as genCalcHueVaule,
  Ne as getAlphaColor,
  kn as getLadderColors,
  Yc as getNeutral,
  Vc as getNeutralAlpha,
  Gc as getNeutualColors,
  jc as getPalette,
  Ie as hctToHex,
  pn as hexToHct,
  zc as toHctString
};
//# sourceMappingURL=theme.mjs.map
