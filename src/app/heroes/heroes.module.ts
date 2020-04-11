import { NgModule } from "@angular/core";
import { HerolistComponent } from "./herolist/herolist.component";
import { HeroesRoutingModule } from "./heroes-routing.module";

import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [HeroesRoutingModule, MatToolbarModule],
  declarations: [HerolistComponent],
})
export class HeroesModule {}
