import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
        // data.append('api_secret', '1_uIDb7ke6KVq2x8Gk8USOfP6uA');
        data.append('upload_preset', 'ml_default');
        data.append('cloud_name', 'dwuhxymqb');
        return this.http.post('https://api.cloudinary.com/v1_1/ml_default/image/upload', data);
    }
}