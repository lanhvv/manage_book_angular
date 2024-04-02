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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
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
    TableModule,
    BrowserAnimationsModule,
    TagModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
