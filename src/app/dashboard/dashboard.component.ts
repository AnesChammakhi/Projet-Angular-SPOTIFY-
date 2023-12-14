import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
nbalb = 0;
nbtyp = 0;
avgMoy = 0;
nbUsers = 0;
constructor(private albumServ : AlbumService, private authServ:AuthService) {
   this.nbalb = albumServ.getNbAlbums()
   this.nbtyp = albumServ.getNbTypes()
   this.nbUsers = authServ.calculNbUsers();
   }
}
