import { NgModule } from "@angular/core";
import { SongsRoutingModule } from "./songs-routing.module";

import { SonglistComponent } from "./songlist/songlist.component";

@NgModule({
  imports: [SongsRoutingModule],
  declarations: [SonglistComponent],
})
export class SongsModule {}
