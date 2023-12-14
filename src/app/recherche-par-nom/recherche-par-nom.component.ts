import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',

})
export class RechercheParNomComponent implements OnInit {

  Albums!:Album[];
  searchTerm!:String;
  nomAlbum!:String;
  allAlbums!:Album[];
  genericName!:String;

  constructor(private albumService:AlbumService,
              public authService:AuthService) { 
    this.Albums=this.albumService.listeAlbums();
  }

  ngOnInit(): void {

    this.Albums = this.albumService.listeAlbums();
    this.allAlbums = this.Albums;
      
  }

  onChange() {
    this.Albums = this.albumService.rechercherParNom(this.genericName);
  }

  SupprimerAlbum(s: Album) {
    let conf = confirm("Etes-vous sur que vous aimerez supprimer cette Album?");
    if (conf) {
      this.albumService.supprimerAlbum(s);
    }
  }
  onKeyUp(filterText : string){
    this.Albums = this.allAlbums.filter(item =>
      item.nomAlbum!.toLowerCase().includes(filterText.toLocaleLowerCase()));
    }


}
