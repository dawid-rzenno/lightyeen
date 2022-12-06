import {Item} from "./room.type";

export class RoomUtil {
  // LED Bulb
  // LED Strip
  private static createBulb(): HTMLDivElement {
    const newElement: HTMLDivElement = document.createElement('div');
    newElement.style.width = '50px';
    newElement.style.height = '50px';
    newElement.style.backgroundColor = 'red';
    newElement.draggable = true;
    return newElement;
  }

  private static createBasicDivElement(config: Item): HTMLDivElement {
    const newElement: HTMLDivElement = document.createElement('div');
    newElement.style.width = '50px';
    newElement.style.height = '50px';
    newElement.style.backgroundColor = 'red';
    newElement.draggable = true;
    return newElement;
  }
}
