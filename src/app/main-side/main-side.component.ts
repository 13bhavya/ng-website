import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Names } from '../main/names.model';

@Component({
  selector: 'app-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.css']
})
export class MainSideComponent implements OnInit {

  @Input() name: Names;
  @Input() index: number;
  @Output() Resetfield = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClear() {
    this.Resetfield.emit();
  }

}
