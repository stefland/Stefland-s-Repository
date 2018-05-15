import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from "./upload.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() path;
  @Input() meta;
  @Input() uploadType;

  //On déclare un attribut selection
  //FileList vient de l'API HTML
  selection: FileList;

  constructor(private uploadService: UploadService) { }



  ngOnInit() { }

  //Detection d'un upload
  detect(event){
    this.selection = event.target.files;
  }

  //Upload du fichier
  upload() {
    const file = this.selection[0];

    if (file.type.split('/')[0] == 'image') {
      this.uploadService.uploadTask(
        this.path,
        file,
        this.meta,
        this.uploadType
      )
    } else {
      console.log("image only")
    }
  }

}
