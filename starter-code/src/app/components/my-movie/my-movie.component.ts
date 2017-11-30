import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieServiceService } from "../../services/movie-service.service";

@Component({
  selector: "app-my-movie",
  templateUrl: "./my-movie.component.html",
  styleUrls: ["./my-movie.component.css"]
})
export class MyMovieComponent implements OnInit {
  movie = null;
  movieId: number;
  constructor(
    private route: ActivatedRoute,
    private movieServiceService: MovieServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.movieId = Number(params["id"]))
    );
    this.movie = this.movieServiceService.getMovie(this.movieId);
  }
}
