import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MovielistComponent } from "./movielist/movielist.component";

const moviesRoutes: Routes = [
  {
    path: "movies",
    component: MovielistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
