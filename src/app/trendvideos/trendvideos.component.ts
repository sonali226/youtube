import { Component, OnInit } from '@angular/core';
import { YoutubeserviceService } from '../youtubeservice.service';

@Component({
  selector: 'app-trendvideos',
  templateUrl: './trendvideos.component.html',
  styleUrls: ['./trendvideos.component.css']
})
export class TrendvideosComponent implements OnInit {
  public videos1: any;
  constructor(private youtubeservice: YoutubeserviceService) {
    this.videos1 = [];
   }

  ngOnInit() {
    this.youtubeservice.gettrendvideos().subscribe(list =>this.videos1=list.items);
  }

}
