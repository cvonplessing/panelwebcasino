import { Component, OnInit } from '@angular/core';
import { SenderService} from '../services_/sender.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private service: SenderService) { }


  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.service.postFile(this.fileToUpload).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
