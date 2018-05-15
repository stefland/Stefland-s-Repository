import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleyListComponent } from './galley-list/galley-list.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleyListComponent, GalleryListComponent, GalleryDetailComponent]
})
export class GalleryModule { }
