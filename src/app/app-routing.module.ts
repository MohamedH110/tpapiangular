import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ​{ CommonModule } ​from ​'@angular/common'​;
import { AjoutComponent } from './ajout/ajout.component';
import { ModifEmployeeComponent } from './modif-employee/modif-employee.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path :'ajouter',component :AjoutComponent},
  {path:'modifier/:id',component:ModifEmployeeComponent},
  {path:'appcom',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
