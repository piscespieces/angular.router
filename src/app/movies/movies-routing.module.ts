import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const moviesRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
