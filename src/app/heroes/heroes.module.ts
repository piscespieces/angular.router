import { NgModule } from "@angular/core";
import { HerolistComponent } from "./herolist/herolist.component";
import { HeroesRoutingModule } from "./heroes-routing.module";

@NgModule({
  imports: [HeroesRoutingModule],
  declarations: [HerolistComponent],
})
export class HeroesModule {}
