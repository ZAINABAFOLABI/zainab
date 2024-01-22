import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import {Observable, map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = environment.base_url;


  constructor(private http:HttpClient) { }

  sendMessage(data:any){
    console.log("Data to api", data)
    return this.http.post(this.url, data ).pipe(
      map((res: any) => res.data)
    );
  }

  getMessage(payload:any): Observable<any>{
    return this.http.get(this.url).pipe(
      map((res: any) => res.data)
    )
  }
}
