import { Component } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public files: File[] = [];

  constructor(private upload: UploadService) {}

  onSelect(event: any) {
    console.log("ADD",event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: any) {
    console.log("REMOVED",event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
