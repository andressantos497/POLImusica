import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'
import { MusicService } from '../services/music.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  artistsJson:any;
  artists: any;
  constructor(private router: Router, private musicService: MusicService) {}

  close(){
    this.router.navigateByUrl("/intro")
  } 
  ngOnInit(){
    this.artistsJson = this.musicService.getArtistsJson().artists;
    console.log(this.artistsJson)
    this.musicService.getArtists().subscribe((data:any) =>{
      this.artists=data
      console.log(this.artists)
    })
  }
}
