import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {Item, Room, RoomConfig, XYZ} from "./room.type";
import {ItemCategory, SurfaceCategory} from "./room.const";

@Component({
  selector: 'ly-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements AfterViewInit, OnDestroy {
  @ViewChild('room') elementRef!: ElementRef<HTMLDivElement>;

  private room!: Room;
  private nativeElement!: HTMLDivElement;
  private readonly destroy$: Subject<void> = new Subject<void>();

  ngAfterViewInit(): void {
    this.nativeElement = this.elementRef.nativeElement;
    this.room = this._createRoomMock();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  dragOverHandler($event: DragEvent) {
    $event.preventDefault();
    console.log($event);
  }

  dropHandler($event: DragEvent) {
    $event.preventDefault();
    console.log($event);
  }

  private _createRoomMock(): Room {
    return new Room({
        dimensions: new XYZ(4, 3, 2.5),
        items: [
          new Item({
            category: ItemCategory.FURNITURE,
            surface: SurfaceCategory.FLOOR,
            dimensions: new XYZ(0.25, 0.25, 1),
            placement: new XYZ(1.0, 2, 1)
          })
        ]
      } as RoomConfig,
      this.nativeElement)
  }
}
