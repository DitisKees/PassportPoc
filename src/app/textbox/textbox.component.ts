import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgxMoveableComponent } from 'ngx-moveable';
import { NgxSelectoComponent } from 'ngx-selecto';

@Component({
  selector: 'app-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.scss'],
})
export class TextboxComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('moveable', { static: false }) moveable: NgxMoveableComponent;
  @ViewChild('selecto', { static: false }) selecto: NgxSelectoComponent;
  cubes = [];
  targets = [];
  snappables = [];
  snapDirections: any = { top: true, left: true, bottom: true, right: true };
  snapThreshold: any = 5;
  bounds: any = { left: 0, top: 0, right: 0, bottom: 0, position: 'css' };
  ngOnInit() {
    const cubes = [];

    for (let i = 0; i < 5; ++i) {
      cubes.push(i);
      this.snappables.push('.cub' + i);
    }
    this.cubes = cubes;
  }
  public addCube() {
    this.cubes.push(this.cubes.length);
    this.snappables.push('.cub' + this.cubes.length);
  }
  onClickGroup(e) {
    this.selecto.clickTarget(e.inputEvent, e.inputTarget);
  }
  onDrag(e) {
    e.target.style.transform = e.transform;
  }
  onDragGroup(e) {
    e.events.forEach((ev) => {
      ev.target.style.transform = ev.transform;
    });
  }
  onDragStart(e) {
    const target = e.inputEvent.target;
    if (
      this.moveable.isMoveableElement(target) ||
      this.targets.some((t) => t === target || t.contains(target))
    ) {
      e.stop();
    }
  }
  onSelectEnd(e) {
    this.targets = e.selected;

    if (e.isDragStart) {
      e.inputEvent.preventDefault();

      setTimeout(() => {
        this.moveable.ngDragStart(e.inputEvent);
      });
    }
  }
  onWarpEnd(e) {}
  onWarp(e) {}
  onWarpStart(e) {}
  onResizeEnd(e) {}
  onResize(e) {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
  }
  onResizeStart(e) {}
  onRotate(e) {}
  onRotateEnd(e) {}
  onRotateStart(e) {}
  onScale(e) {}
  onScaleStart(e) {}
  onScaleGroup(e) {}
  onScaleEnd(e) {}
  onDragEnd(e) {}
  onDragEndGroup(e) {}
}
