import { Component, OnInit } from '@angular/core';
import { Movies } from '../../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(public moviesService: Movies) { }

  ngOnInit() {
  }

}
