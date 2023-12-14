import { Type } from "./type.model";

export class Album {
    idAlbum? : number;
    nomAlbum? : string;
    artist? : string;
     dateCreation? : Date ;
     langue? : string;
     type!:Type;
    }
    