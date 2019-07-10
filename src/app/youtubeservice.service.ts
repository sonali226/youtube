import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeserviceService {
  public Data: Subject<any>;

  constructor(private http:HttpClient) {
    this.Data = new Subject();
  }
  getdatafrom(value) {
    this.Data=value;
  }
  getVideosForChanel(): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDMamMQ8sgwykclY8XtiVtUKTSRt0j_hx8&q=' + this.Data + '&part=snippet&type=video&maxResults=20';
    return this.http.get(url);
  }
  gettrendvideos():Observable<any>
  {
    let url='https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=es&videoCategoryId=17&key=AIzaSyDMamMQ8sgwykclY8XtiVtUKTSRt0j_hx8&type=video&maxResults=20';
    return this.http.get(url);
  }
}
