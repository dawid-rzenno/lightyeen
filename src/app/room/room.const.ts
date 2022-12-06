export enum Scale {
  X1 = 1/100,
  X2 = 1/50,
  X5 = 1/20,
  X10 = 1/10,
  X20 = 1/5,
  X50 = 1/2,
  X100 = 1,
}

export enum SurfaceCategory {
  FLOOR = 'FLOOR',
  WALL = 'WALL',
  CEILING = 'CEILING'
}

export enum ItemCategory {
  BULB = 'BULB',
  STRIP = 'STRIP',
  FURNITURE = 'FURNITURE',
}

export const DEFAULT_SCALE = Scale.X5;
export const M_TO_PX = 3779;
export const M_TO_Z_INDEX = 1000;
