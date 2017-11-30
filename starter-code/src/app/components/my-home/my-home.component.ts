import { Component, OnInit } from "@angular/core";
import { MovieServiceService } from "../../services/movie-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-home",
  templateUrl: "./my-home.component.html",
  styleUrls: ["./my-home.component.css"]
})
export class MyHomeComponent implements OnInit {
  movieList = null;

  constructor(
    private movieServiceService: MovieServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieList = this.movieServiceService.getMovies();
  }
}
