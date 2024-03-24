import { Component } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public books: any[] = [];
  
}
