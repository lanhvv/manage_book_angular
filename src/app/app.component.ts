import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'manage_book_angular';

  // cld:CloudinaryImage;
  //   constructor(private cloudinary: CloudinaryService) {
  //       const cld = new Cloudinary({cloud: {cloudName: 'dwuhxymqb'}});
  //       this.cld = cld.image('cld-sample-5');
  //   }
  ngOnInit(): void {
    // this.cloudinary.upload('https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg').subscribe(resp => {
    //   debugger
    // });
  }
}
