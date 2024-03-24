import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {ConstUtil} from "src/app/shared/constant-util";
@Injectable({
    providedIn: 'root'
})

export class UploadService {
    constructor(private http: HttpClient) {
    }

    public upload(file: any) {
        const data = new FormData();
        data.append('file', file);
        data.append('api_key', ConstUtil.API_KEY);
        data.append('upload_preset', ConstUtil.UPLOAD_PRESET);
        return this.http.post(`https://api.cloudinary.com/v1_1/${ConstUtil.CLOUD_NAME}/image/upload`, data);
    }
}