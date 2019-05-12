import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal.component';

const portalRoutes: Routes = [
  {
    path: 'portal', component: PortalComponent, children: [
      { path: 'home', component: HomeComponent }
        ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(portalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortalRoutingModule {

}
