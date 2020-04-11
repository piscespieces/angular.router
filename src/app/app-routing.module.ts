import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import { SelectivePreloadingStrategyService } from "./selective-preloading-strategy.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
