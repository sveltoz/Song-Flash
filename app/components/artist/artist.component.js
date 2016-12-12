"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var spotify_service_1 = require("../../serivces/spotify.service");
var ArtistComponent = (function () {
    function ArtistComponent(route, _SpotifyService) {
        var _this = this;
        this.route = route;
        this._SpotifyService = _SpotifyService; 
        this.id = route.snapshot.params['id'];
        this._SpotifyService.getArtist(this.id).subscribe(function (artist) {
            _this.artist = artist;
        });
        this._SpotifyService.getAlbums(this.id).subscribe(function (albums) {
            _this.albums = albums.items;
        });
    }
        ArtistComponent.prototype.ngOnInit = function (){
        var _this = this;
       _this.getArtist();
    }
        
        ArtistComponent.prototype.getArtist = function(){
        var _this =this;
        this._SpotifyService.getArtist(this.id).subscribe( function(artist){
       _this.artist = artist;
         });
       }
    
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.html',
            providers: [spotify_service_1.SpotifyService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, spotify_service_1.SpotifyService])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
