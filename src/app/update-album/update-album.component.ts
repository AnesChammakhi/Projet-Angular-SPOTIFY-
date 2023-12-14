import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../model/album.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-Album',
  templateUrl: './update-Album.component.html',
  styles: []
})
export class UpdateAlbumComponent implements OnInit {
  currentAlbum = new Album();
  types!:Type[];
  updatedTypeId!:number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private albumService: AlbumService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.types=this.albumService.listeTypes();
this.currentAlbum = this.albumService.consulterAlbum(this.activatedRoute.snapshot. params['id']);
this.updatedTypeId=this.currentAlbum.type.idType;
  }
  updateAlbum()
{ //console.log(this.currentAlbum);
  this.currentAlbum.type=this.albumService.consulterType(this.updatedTypeId);
this.albumService.updateAlbum(this.currentAlbum);
this.router.navigate(['Albums']);
}


}
