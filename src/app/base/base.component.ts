import { NgxMoveableComponent } from 'ngx-moveable';
import { ViewChild, ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  draggable: any = true;
  throttleDrag: any = 1;
  edgeDraggable: any = false;
  startDragRotate: any = 0;
  throttleDragRotate: any = 0;
  @ViewChild('targetRef')
  targetRef!: ElementRef<HTMLDivElement>;

  public onDragStart(ev: Event): void {}
  public onDrag(ev: Event): void {}
  public onDragEnd(ev: Event): void {}

  public onResizeStart(ev: Event): void {}
  public onResize(ev: Event): void {}
  public onResizeEnd(ev: Event): void {}

  public onScaleStart(ev: Event): void {}
  public onScale(ev: Event): void {}
  public onScaleEnd(ev: Event): void {}

  public onRotateStart(ev: Event): void {}
  public onRotate(ev: Event): void {}
  public onRotateEnd(ev: Event): void {}

  public onWarpStart(ev: Event): void {}
  public onWarp(ev: Event): void {}
  public onWarpEnd(ev: Event): void {}

  public onPinchStart(ev: Event): void {}
  public onPinch(ev: Event): void {}
  public onPinchEnd(ev: Event): void {}
}
