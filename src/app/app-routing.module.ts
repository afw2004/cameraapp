import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginscreenComponent } from "./components/loginscreen/loginscreen.component";
import { HomescreenComponent } from "./components/homescreen/homescreen.component";
import { ReportingscreenComponent } from "./components/reportingscreen/reportingscreen.component";
import { SettingsscreenComponent } from "./components/settingsscreen/settingsscreen.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomescreenComponent },
  { path: "login", component: LoginscreenComponent },
  { path: "reporting", component: ReportingscreenComponent },
  { path: "settings", component: SettingsscreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
