import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../modal/artist";
import { Album } from "../../modal/album";


@Component({
    selector: 'artist',
    templateUrl: 'artist.html',
    providers: [ SpotifyService ]
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor( private route: ActivatedRoute, private _SpotifyService:SpotifyService ){
    this.id = route.snapshot.params['id']
    this._SpotifyService.getArtist(this.id).subscribe( artist => {
       this.artist = artist;
     });
     this._SpotifyService.getAlbums(this.id).subscribe( albums => {
       this.albums = albums.items;
     } )
  }
  ngOnInit(){
    this.getArtist();
  }
  getArtist(){
      this._SpotifyService.getArtist(this.id).subscribe( artist => {
       this.artist = artist;
     })
   }
}
