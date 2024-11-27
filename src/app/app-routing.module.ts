import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { EladoMotorokComponent } from './elado-motorok/elado-motorok.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "fooldal", component:FooldalComponent},
  {path: "eladoMotorok", component:EladoMotorokComponent},
  {path: "", redirectTo:"/fooldal", pathMatch:"full"},
  {path: "**", component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
