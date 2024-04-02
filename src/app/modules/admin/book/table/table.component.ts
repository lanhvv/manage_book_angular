import { Component, OnInit } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { BookService } from 'src/app/service/book.service';
import {ConstUtil} from "src/app/shared/constant-util";
import { transformationStringFromObject } from "@cloudinary/url-gen";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public books: any[] = [];
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.get().subscribe((res: any) => {
      this.books = res?.body;
      this.books.forEach((x: any) => {
        const cld = new Cloudinary({cloud: {cloudName: ConstUtil.CLOUD_NAME}});
        x.img = cld.image(x?.img);
        const transformation = transformationStringFromObject([{gravity: "face", height: 150, width: 150, crop: "thumb"}]);
        x.img.addTransformation(transformation);
      });
    });
  }


}
