import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { FromNowPipe } from "./form-now.pipe";
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FromNowPipe,
    ReactiveFormsModule,
    UploadComponent
  ],
  declarations: [FromNowPipe, UploadComponent],
  providers: [UploadService]
})
export class SharedModule { }
