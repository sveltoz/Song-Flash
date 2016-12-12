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
var SearchComponent = (function () {
    function SearchComponent(_SpotifyService, _router) {
        this.id = 'Akon';
        this.searchStr='';
        this._SpotifyService = _SpotifyService;
        this._router = _router;
    }
    SearchComponent.prototype.ngOnInit = function (){
        var _this = this;
      _this.searchMusic();
    //    _this.getArtist();
    //    _this.getAlbums(); 
      _this.goArtist();
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._SpotifyService.searchMusic(this.id)
            .subscribe(function (res) {
            _this.SearchRes = res.artists.items;
        });
        this._SpotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.SearchRes = res.artists.items;
        });
    };

    // SearchComponent.prototype.getArtist = function(){
    //     var _this =this;
    //     this._SpotifyService.getArtist(this.id).subscribe( artist => {
    //    _this.artist = artist;
    //  });
    // }
    // SearchComponent.prototype.getAlbums = function(){
    // var _this =this;
    //  this._SpotifyService.getAlbums(this.id).subscribe( albums => {
    //    _this.albums = albums.items;
    //  });
    // }
    SearchComponent.prototype.goArtist = function () {
        this._router.navigate(['artist']);
    };
    SearchComponent.prototype.goToArtist = function (artist) {
        this._router.navigate(['artist', artist.id]);
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.html',
            providers: [spotify_service_1.SpotifyService]
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;