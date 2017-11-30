import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { MyHomeComponent } from "./components/my-home/my-home.component";
import { MyMovieComponent } from "./components/my-movie/my-movie.component";

import { MovieServiceService } from "./services/movie-service.service";
import { CinemaServiceService } from "./services/cinema-service.service";
import { ModuleWithComponentFactories } from "@angular/core/src/linker/compiler";
const routes: Routes = [
  { path: "", component: MyHomeComponent },
  { path: "movie/:id", component: MyMovieComponent }
];

@NgModule({
  declarations: [AppComponent, MyHomeComponent, MyMovieComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CinemaServiceService, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
