import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {
Albums!:Album[];
types!:Type[];
IdType!:number;



  constructor(private albumService: AlbumService,
              public authService:AuthService) { }

  ngOnInit(): void {
    this.types=this.albumService.listeTypes();
    
    this.Albums=[];
}
onChange(){
  console.log(this.IdType);
  this.Albums=this.albumService.rechercherParType(this.IdType);
  
  console.log(this.Albums);
}
supprimerAlbum(a:Album){
  let conf=confirm('Etes-vous sur?');
  if(conf)
  {
    this.albumService.supprimerAlbum(a);
    this.Albums=this.albumService.rechercherParType(this.IdType);
  }
}

}
