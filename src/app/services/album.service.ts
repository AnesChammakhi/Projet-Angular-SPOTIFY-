import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  Albums : Album[]; //un tableau de Album
  Album! : Album;
  types! :Type[];
  AlbumsRecherche!:Album[];
  constructor() {
this.types=[{idType:1,nomType:"POP"},
             {idType:2,nomType:"JAZZ"},];

    this.Albums = [
      {idAlbum : 1, nomAlbum : "The Dark Side of the Moon", artist : "Taylor Swift",dateCreation : new Date("10/08/2022"),langue:"Anglais",type:{idType:1,nomType:"POP"}},
      {idAlbum : 2, nomAlbum : "Steal This Album!", artist : "Pink Floyd", dateCreation : new Date("12/07/2021"),langue:"Anglais",type:{idType:1,nomType:"POP"}},
      {idAlbum : 3, nomAlbum :" A Love Supreme ",  artist : "john Coltrane ", dateCreation : new Date("02/20/2016"),langue:"anglais",type:{idType:1,nomType:"POP"}},
      {idAlbum : 4, nomAlbum :"Love Yourself: Tear ",  artist : "Pink Floyd", dateCreation : new Date("07/15/2014"),langue:"corean",type:{idType:2,nomType:"JAZZ"}}
       ];
  }
  listeAlbums():Album[] {
    return this.Albums;
}
ajouterAlbum( alb: Album){
this.Albums.push(alb);
}
supprimerAlbum( alb: Album){
  //supprimer la Album ser du tableau Albums
  const index = this.Albums.indexOf(alb, 0);
  if (index > -1) {
  this.Albums.splice(index, 1);
  }
  //ou Bien
  /* this.Albums.forEach((cur, index) => {
  if(ser.idAlbum === cur.idAlbum) {
  this.Albums.splice(index, 1);
  }
  }); */
  }
  consulterAlbum(id:number): Album{
    this.Album = this.Albums.find(p => p.idAlbum == id)!;
    return this.Album;
    }

    trierAlbums(){
      this.Albums = this.Albums.sort((n1,n2) => {
      if (n1.idAlbum! > n2.idAlbum!) {
      return 1;
      }
      if (n1.idAlbum! < n2.idAlbum!) {
      return -1;
      }
      return 0;
      });
      }

    updateAlbum(s:Album)
{
// console.log(s);
this.supprimerAlbum(s);
this.ajouterAlbum(s);
this.trierAlbums();
}
listeTypes():Type[]{
  return this.types;
}
consulterType(id:number):Type{
  return this.types.find(typ=>typ.idType == id)!;
}
rechercherParType(idType:number): Album[]{
  this.AlbumsRecherche=[];
  if(idType == 0) {
    return this.Albums;
  }
  this.Albums.forEach((cur,index)=>{
    if(idType==cur.type.idType){
      console.log("cur"+cur);
      this.AlbumsRecherche.push(cur);
    }
  });                     
  return this.AlbumsRecherche;
}

rechercherParNom(nom: String): Album[]{
  this.AlbumsRecherche = [];

  this.Albums.forEach((cur, index) => {
   if(nom == cur.nomAlbum) {
       console.log("cur "+cur);
      this.AlbumsRecherche.push(cur);
       }
 });
 return this.AlbumsRecherche;
 }
 ajouterType(item: Type) {
  this.types.push(item);
}
getNbAlbums(): number {
  return this.Albums.length;
}
getNbTypes() : number{
  return this.types.length;
}

    
}

