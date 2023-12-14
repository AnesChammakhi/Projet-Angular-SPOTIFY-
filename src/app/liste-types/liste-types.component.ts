import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styles: [
  ]
})
export class ListeTypesComponent implements OnInit {
  types!:Type[];

  updatedType: Type={idType: 0,nomType:''};
  
  ajout:boolean=true;

  constructor(private albumService: AlbumService,
    public authService:AuthService) { }

  ngOnInit(): void {
this.types=this.albumService.listeTypes();
  }

  typeUpdated(type:Type){
this.albumService.ajouterType(type);
console.log(type);
  }
  chargerType(){
    this.types=this.albumService.listeTypes();
  }
  updateType(type:Type){
    this.updatedType=type;
    this.ajout=false;
  }
  

}
