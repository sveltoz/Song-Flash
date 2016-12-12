import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SpotifyService } from "../../serivces/spotify.service";
import { Artist } from "../../modal/artist";
import { Album } from "../../modal/album";
@Component({
    selector: 'search',
    templateUrl: 'search.html',
    providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchStr:string;
  SearchRes: Artist[];
   artist: Artist[];
   albums: Album[];
id:string;
  constructor(private _SpotifyService: SpotifyService, private _router:Router){
    this.id = 'Akon';
    this.searchStr ='';
   // this.id = route.snapshot.params['id']
  } 

   ngOnInit(){
       this.searchMusic();
      //  this.getArtist();
      //  this.getAlbums();
      this.goArtist();
     };
  //     this._SpotifyService.getArtist(this.id)
  //    .subscribe(res =>{
  //    this.SearchRes = res.artists.items;})
  //  this.searchMusic();
   

  searchMusic(){
    this._SpotifyService.searchMusic(this.id)
      .subscribe(res => {
        this.SearchRes = res.artists.items;
      })
      this._SpotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.SearchRes = res.artists.items;
      })
  }
   goArtist(){
     this._router.navigate(['artist'])
   }
  //  getArtist(){
  //     this._SpotifyService.getArtist(this.id).subscribe( artist => {
  //      this.artist = artist;
  //    })
  //  }
  //  getAlbums(){
  //    this._SpotifyService.getAlbums(this.id).subscribe( albums => {
  //      this.albums = albums.items;
  //    })
  //  }

   goToArtist(artist){
    this._router.navigate(['artist', artist.id])
  }
}
