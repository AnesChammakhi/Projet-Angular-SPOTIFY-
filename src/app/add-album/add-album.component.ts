import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import {Type} from '../model/type.model';

@Component({
  selector: 'app-add-Album',
  templateUrl: './add-Album.component.html',
  styleUrls: ['./add-Album.component.css']
})
export class AddAlbumComponent implements OnInit {
  newAlbum = new Album();
  types!:Type[];
  newIdType!:number;
  newType!:Type;


  constructor(private albumService: AlbumService,
               private router : Router) { }

  ngOnInit(): void {
    this.types=this.albumService.listeTypes();
  }
  addAlbum(){
    //console.log(this.newAlbum);
    this.newType=this.albumService.consulterType(this.newIdType);
    this.newAlbum.type=this.newType;
    this.albumService.ajouterAlbum(this.newAlbum);
    this.router.navigate(['Albums']);
    }
    

}
