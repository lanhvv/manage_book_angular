import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './modules/admin/book/table/table.component';
import { UpdateComponent } from './modules/admin/book/update/update.component';

const routes: Routes = [
  {
    path:"book", 
    component: TableComponent, 
    children: [
      {
        path:'create',
        component: UpdateComponent,
      },
      {
        path:'update/:id',
        component: UpdateComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
