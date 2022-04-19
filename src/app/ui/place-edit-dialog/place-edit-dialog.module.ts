import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { PhotosUploaderModule } from "../shared/components/photos-uploader/photos-uploader.module"
import { RatingModule } from "../shared/components/rating/rating.module"
import { TagsModule } from "../shared/components/tags/tags.module"
import { PlaceEditComponent } from './components/place-edit/place-edit.component';

@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    TagsModule,
    PhotosUploaderModule
  ]
})
export class PlaceEditDialogModule { }
