import {DEFAULT_SCALE, ItemCategory, M_TO_PX, M_TO_Z_INDEX, SurfaceCategory} from "./room.const";

export type CSS = {
  width: string,
  height: string
};

export class XY {
  constructor(
    public x: number = 0,
    public y: number = 0
  ) {}
}

export class XYZ {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public z: number = 0 // length from bottom to top
  ) {}
}

const xyz = new XYZ(0, 0, 0);

export type RoomCSS = CSS;
export type ItemCSS = CSS & {
  top: string,
  left: string,
  zIndex: string,
  backgroundColor: string
};

export type ItemConfig = {
  category: ItemCategory,
  surface: SurfaceCategory,
  dimensions: XYZ,
  placement: XYZ,
  css?: ItemCSS
};

export type RoomConfig = {
  dimensions: XYZ,
  items: Item[] | [],
  css?: RoomCSS
};

export function getPx(meters: number): number {
  return meters * M_TO_PX * DEFAULT_SCALE;
}

export function getZIndex(zDimension: number, zPlacement: number): number {
  return (zDimension + zPlacement) * M_TO_Z_INDEX;
}

export class Item {
  readonly config: ItemConfig;
  readonly divElement: HTMLDivElement;

  constructor(config: ItemConfig) {
    this.config = config;

    const css: ItemCSS = config.css ?? Item.createCss(config);
    const divElement: HTMLDivElement = Item.createDivElement();
    this.divElement = Item.styleDivElement(divElement, css);
  }

  private static styleDivElement(divElement: HTMLDivElement, css: ItemCSS): HTMLDivElement {
    divElement.classList.add('item');
    // divElement.setAttribute('')
    Object.assign(divElement.style, css);
    return divElement;
  }

  private static createDivElement(): HTMLDivElement {
    return document.createElement('div');
  }

  private static createCss(config: ItemConfig): ItemCSS {
    return {
      width: `${getPx(config.dimensions.x)}px`,
      height: `${getPx(config.dimensions.y)}px`,
      left: `${getPx(config.placement.x)}px`,
      top: `${getPx(config.placement.y)}px`,
      backgroundColor: 'green',
      zIndex: `${getZIndex(config.dimensions.z, config.placement.z)}`
    } as ItemCSS;
  }
}

export class Room {
  readonly config: RoomConfig;
  readonly divElement: HTMLDivElement;

  constructor(config: RoomConfig, divElement: HTMLDivElement = Room.createDivElement()) {
    this.config = config;

    const css: RoomCSS = config.css ?? Room.createCss(config);
    this.divElement = Room.styleDivElement(divElement, css);

    config.items.forEach((item: Item) => this.divElement.appendChild(item.divElement))
  }

  private static styleDivElement(divElement: HTMLDivElement, css: RoomCSS): HTMLDivElement {
    Object.assign(divElement.style, css);
    return divElement;
  }

  private static createDivElement(): HTMLDivElement {
    return document.createElement('div');
  }

  private static createCss(config: RoomConfig): RoomCSS {
    return {
      width: `${getPx(config.dimensions.x)}px`,
      height: `${getPx(config.dimensions.y)}px`,
    } as RoomCSS;
  }
}
