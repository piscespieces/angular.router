import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SonglistComponent } from "./songlist/songlist.component";

const songsRoutes: Routes = [
  {
    path: "songs",
    component: SonglistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(songsRoutes)],
  exports: [RouterModule],
})
export class SongsRoutingModule {}
