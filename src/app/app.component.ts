import { Component, OnInit } from '@angular/core';
import { CloudinaryService } from './service/cloudinary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'manage_book_angular';

  constructor(private cloudinary: CloudinaryService) {
  }
  ngOnInit(): void {
    this.cloudinary.upload('https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg').subscribe(resp => {
      debugger
    });
  }
}
