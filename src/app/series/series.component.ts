import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NameService } from '../main/name.services';
import { Names } from '../main/names.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  @ViewChild('usertag', {static: false}) Ref: ElementRef;
  names: Names[];
  curentNameIndex: number
  private ChangedSub: Subscription;

  constructor(private namesService: NameService) { }

  ngOnInit(): void {
    this.names = this.namesService.getNames()

    console.log(this.names)

    this.ChangedSub = this.namesService.namesChanged.subscribe(
      (names: Names[]) => {
        this.names = names;
      })
  }

  onClick(i: number){
    console.log(i);
    console.log(this.names[i]);
    this.namesService.delName(i);
  }

  ngOnDestory() {
    this.ChangedSub.unsubscribe();
    console.log("Unsubscribe")
  }

}
