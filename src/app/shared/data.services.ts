import { HttpClient } from '@angular/common/http';
import { Movies } from '../movies/movies-list/movies.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface MovieItems {
    title: string;
    imageUrl: string;
    rating: number;
    overview: string;
    releaseDate: Date;
}
@Injectable({ providedIn: 'root' })
export class DataService {
    imageUrl = 'https://image.tmdb.org/t/p/w200';
    url = 'https://api.themoviedb.org/3/search/movie?api_key=62d1a8737b7c14a5d4f88ee3ec688227';
    newUrl: string;
    movieSelected = new Subject<MovieItems[]>();
    private movieItems: MovieItems[] = [];

    constructor(private http: HttpClient) { }

    fetchData(query: string) {
        this.newUrl = this.url + '&query=' + query;
        this.http.get<Movies>(this.newUrl)
            .subscribe(response => {
                this.movieItems = [];
                response.results.map(movie => {
                    let imagePath = movie.poster_path;
                    let title = movie.original_title;
                    let rating = movie.vote_average;
                    let overview = movie.overview;
                    let releaseDate = movie.release_date;
                    if (movie.poster_path === null) {
                        return
                    } else {
                        let imageUrl = this.imageUrl + imagePath
                        this.movieItems.push({ title, imageUrl, rating, overview, releaseDate });
                        console.log(this.movieItems)
                    }
                })
            })
    }

    getData() {
        return this.movieItems.slice();
    }
}