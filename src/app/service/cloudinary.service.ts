import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

@Injectable({
    providedIn: 'root'
})

export class CloudinaryService {
    constructor(private http: HttpClient) {
    }

    public upload(file: any) {
        const data = new FormData();
        data.append('file', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg');
        data.append('api_key', '613915965463446');
        data.append('upload_preset', 'ml_default');
        return this.http.post('https://api.cloudinary.com/v1_1/dwuhxymqb/image/upload', data);
    }
}