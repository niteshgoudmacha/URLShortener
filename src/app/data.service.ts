import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({
//    'Content-Type': 'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient /*dependency injection*/ ) { }
  url = 'http://localhost:5000/api/url/shorten'
  getURL(longUrl: any) {
    
    console.log('dataservices: ', longUrl);
      return this.http.post(this.url, { longUrl }).toPromise().then((data) => {
        console.log(data);
        return data;
      }).catch(err => {
        // console.log('ERROR = ', err); 
        return err.error;
      });
    
    
  }
}
