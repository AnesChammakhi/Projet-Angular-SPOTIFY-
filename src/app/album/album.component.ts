import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-Albums',
  templateUrl: './Album.component.html',
  styleUrls: ['./Album.component.css']
})
export class AlbumsComponent implements OnInit {
  Albums : Album[]; //un tableau de chînes de caractères

  constructor(private AlbumService: AlbumService,
              public authService:AuthService ) {
    this.Albums = AlbumService.listeAlbums();
    }
    
  

  ngOnInit(): void {
  }
  supprimerAlbum(s: Album)
  {
  //console.log(s);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  
  this.AlbumService.supprimerAlbum(s);
  }
}
