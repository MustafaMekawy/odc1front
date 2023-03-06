import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { FoundationComponent } from './pages/foundation/foundation.component';
import { FunctionalitiesComponent } from './pages/functionalities/functionalities.component';
import { DetailsComponent } from './pages/details/details.component';
import { LeftbarComponent } from './com/leftbar/leftbar.component';
import { ProjcetDetailsComponent } from './pages/projcet-details/projcet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformComponent,
    FoundationComponent,
    FunctionalitiesComponent,
    DetailsComponent,
    LeftbarComponent,
    ProjcetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
