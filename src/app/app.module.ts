import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewairlineComponent } from './viewairline/viewairline.component';
import { ViewallpassComponent } from './viewallpass/viewallpass.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ViewairlineComponent },
  { path: 'viewallpass', component: ViewallpassComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewairlineComponent,
    ViewallpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
