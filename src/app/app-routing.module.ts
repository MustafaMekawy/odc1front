import { FoundationComponent } from './pages/foundation/foundation.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeftbarComponent } from './com/leftbar/leftbar.component';
import { FunctionalitiesComponent } from './pages/functionalities/functionalities.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProjcetDetailsComponent } from './pages/projcet-details/projcet-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'platform',component:PlatformComponent},
  {path:'leftbar',component:LeftbarComponent},
  {path:'foundation',component:FoundationComponent},
  {path:'fuunctionatities',component:FunctionalitiesComponent},
  {path:'details',component:DetailsComponent},
  {path:'projcetdetails',component:ProjcetDetailsComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
