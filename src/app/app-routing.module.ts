import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerCategoryComponent } from './views/manager-category/manager-category.component';
import { ManagerDeviceComponent } from './views/manager-device/manager-device.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDeviceComponent,

  },
  {
    path: 'category',
    component:ManagerCategoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
