import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import {RoomModule} from "../room/room.module";

@NgModule({
  declarations: [
    PlannerComponent
  ],
  exports: [
    PlannerComponent
  ],
  imports: [
    CommonModule,
    RoomModule
  ]
})
export class PlannerModule { }
