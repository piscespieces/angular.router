import { NgModule } from "@angular/core";
import { MovielistComponent } from "./movielist/movielist.component";

import { MoviesRoutingModule } from "./movies-routing.module";

@NgModule({
  imports: [MoviesRoutingModule],
  declarations: [MovielistComponent],
})
export class MoviesModule {}
