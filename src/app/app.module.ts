import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CloudinaryModule} from '@cloudinary/ng';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './modules/admin/book/update/update.component';
import { TableComponent } from './modules/admin/book/table/table.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule,
    HttpClientModule,
    NgxDropzoneModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
