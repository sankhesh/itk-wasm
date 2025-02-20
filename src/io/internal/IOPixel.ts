const IOPixel = {
  UNKNOWNPIXELTYPE: 0,
  SCALAR: 1,
  RGB: 2,
  RGBA: 3,
  OFFSET: 4,
  VECTOR: 5,
  POINT: 6,
  COVARIANTVECTOR: 7,
  SYMMETRICSECONDRANKTENSOR: 8,
  DIFFUSIONTENSOR3D: 9,
  COMPLEX: 10,
  FIXEDARRAY: 11,
  ARRAY: 12,
  MATRIX: 13,
  VARIABLELENGTHVECTOR: 14,
  VARIABLESIZEMATRIX: 15
} as const

export default IOPixel
