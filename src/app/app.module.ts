import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ManagerDeviceComponent } from './views/manager-device/manager-device.component';
import { ManagerCategoryComponent } from './views/manager-category/manager-category.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListDeviceComponent } from './views/manager-device/list-device/list-device.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DeviceFormComponent } from './views/manager-device/device-form/device-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CategoryFormComponent } from './views/manager-category/category-form/category-form.component';
import { ListCategoryComponent } from './views/manager-category/list-category/list-category.component';
import { CategoryDeleteScreenComponent } from './views/manager-category/category-delete-screen/category-delete-screen.component';
import { DeviceDeleteScreenComponent } from './views/manager-device/device-delete-screen/device-delete-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    ManagerDeviceComponent,
    ManagerCategoryComponent,
    ListDeviceComponent,
    DeviceFormComponent,
    CategoryFormComponent,
    ListCategoryComponent,
    CategoryFormComponent,
    CategoryDeleteScreenComponent,
    DeviceDeleteScreenComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
