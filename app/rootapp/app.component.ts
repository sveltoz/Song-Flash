import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { SpotifyService } from "../serivces/spotify.service";
import { Artist } from "../modal/artist";
import { Album } from "../modal/album";
import { ActivatedRoute} from "@angular/router";
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})


export class AppComponent {
    id: string;
  artist: Artist[];
  albums: Album[];
  
  constructor(private _router: Router, private route: ActivatedRoute, private _SpotifyService:SpotifyService ){
                 this.id = route.snapshot.params['id']
                 this._SpotifyService.getArtist(this.id).subscribe( artist => {
                 this.artist = artist;
              });
              this._SpotifyService.getAlbums(this.id).subscribe( albums => {
              this.albums = albums.items;
     } )
  }

 }
