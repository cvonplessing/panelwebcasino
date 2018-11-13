import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private  route = 'http://localhost:3000/queries/*';
  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = this.route;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData).
      pipe(map(() => { return true; }));
  }

}
