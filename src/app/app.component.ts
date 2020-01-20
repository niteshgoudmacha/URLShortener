import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlshortener';
  postData = {
    longUrl: "https://medium.com/@edigleyssonsilva/adding-bulma-css-framework-to-your-angular-6-app-8e0b28ac2cf5"
  };
  url = 'http://localhost:5000/api/url/shorten' // 'http://httpbin.org/post'
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data) => {
      console.log(data);
    });
  }
}
