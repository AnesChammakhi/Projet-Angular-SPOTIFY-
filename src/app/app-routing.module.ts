import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './album/album.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AlbumGuard } from './album.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "Albums", component : AlbumsComponent},
  {path: "add-Album", component : AddAlbumComponent,canActivate:[AlbumGuard]},
  {path: "updateAlbum/:id", component: UpdateAlbumComponent,canActivate:[AlbumGuard]},
  {path: "rechercheParType",component: RechercheParTypeComponent},
  {path:"rechercheParNom",component:RechercheParNomComponent},
  {path: "listeTypes", component : ListeTypesComponent},
  {path:"dashboard",component : DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: '', redirectTo: 'login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
