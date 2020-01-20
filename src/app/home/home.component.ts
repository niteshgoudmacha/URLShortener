import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  longUrl: String = '';
  shortUrl: any;
  show: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  generateLink() {
    console.log('clicked');
    if(this.longUrl === '') {
      return ;
    }
    this.dataService.getURL(this.longUrl).then((data) => {
      // console.log("callback");
      this.shortUrl = data;
      this.show = true;
      console.log(data);
    });
  }


}
