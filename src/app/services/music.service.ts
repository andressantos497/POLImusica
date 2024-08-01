import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json"; 
@Injectable({
  providedIn: 'root'
})
export class MusicService {
  
  urlServer = "https://music.fly.dev"
  httpHeader = { headers: new HttpHeaders({"Content-Type": "application/json"})}
  
  constructor(
    private http: HttpClient
  ) { }

  getArtistsJson(){
    return dataArtists;
  }

  getArtists(){
    //return this.http.get(`${this.urlServer}/artists`, this.httpHeader)
    return fetch(`${this.urlServer}/artists`).then(
      response => response.json()
    )
  }
  getArtistTracks(artists_id:number){
    return this.http.get(`${this.urlServer}/tracks/artist/${artists_id}`, this.httpHeader)
  }
}
