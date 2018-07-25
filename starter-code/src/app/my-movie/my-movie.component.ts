import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  id: number
  constructor(private route: ActivatedRoute, public moviesService: Movies) {
    this.route.params.subscribe((params) => {
      this.id = params.id
    })
  }

  ngOnInit() {
  }

}
