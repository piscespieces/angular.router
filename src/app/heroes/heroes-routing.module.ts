import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HerolistComponent } from "./herolist/herolist.component";

const heroesRoutes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "heroes", component: HerolistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
