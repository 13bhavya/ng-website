import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/data.services';
import { MovieItems } from 'src/app/shared/data.services';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movieItems: MovieItems[] = [];
  changeText: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // console.log(this.searForm)
  }

  onSubmit(searForm: NgForm) {
    let queryIn = searForm.value.search;
    this.dataService.fetchData(queryIn)

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movieItems = this.dataService.getData());
      }, 1000);
    });
    promise.then(() => {

    }, error => {
      console.log(error);
    });

    // async () => {
    //   await this.dataService.fetchData(queryIn);
    //   // this.movieItems = this.dataService.getData();

    // }

    // this.dataService.movieSelected.next();
    console.log("Items", this.movieItems)
  }
}
