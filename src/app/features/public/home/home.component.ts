import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Array of banner images
  banners: string[] = [
    '../../../../assets/Moviebanner/amaran.jpg',
    '../../../../assets/Moviebanner/leo.jpg',
    '../../../../assets/Moviebanner/maharaja.webp'
  ];


  trendingMovies = [
    { title: 'Movie 1', image: '../../../../assets/Movieslist/captainmiller.jpg' },
    { title: 'Movie 2', image: '../../../../assets/Movieslist/kanguva.jpg' },
    { title: 'Movie 3', image: '../../../../assets/Movieslist/movie2.jpg' },
    { title: 'Movie 4', image: '../../../../assets/Movieslist/movie3.webp' },
    { title: 'Movie 5', image: '../../../../assets/Movieslist/movie4.webp' }
  ];

  topRatedMovies = [
    { title: 'Top Movie 1', image: '../../../../assets/Movieslist/captainmiller.jpg' },
    { title: 'Top Movie 2', image: '../../../../assets/Movieslist/kanguva.jpg' },
    { title: 'Top Movie 3', image: '../../../../assets/Movieslist/movie2.jpg' },
    { title: 'Top Movie 4', image: '../../../../assets/Movieslist/movie3.webp' },
    { title: 'Top Movie 5', image: '../../../../assets/Movieslist/movie4.webp' }
  ];

  constructor() { }

}
