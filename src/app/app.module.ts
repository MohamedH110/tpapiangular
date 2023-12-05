import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModifEmployeeComponent } from './modif-employee/modif-employee.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    ModifEmployeeComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
