import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http: HttpClient){}

    PATH = "https://620e0b94585fbc3359d4d271.mockapi.io/api/comic";

    public get() {
        return this.http.get(this.PATH, {observe: "response"});
    }

    public put(data: any) {
        return this.http.put(this.PATH, data, {observe: "response"});
    }

    public post(data: any) {
        return this.http.post(this.PATH, data, {observe: "response"});
    }
}