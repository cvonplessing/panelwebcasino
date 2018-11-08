import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private route = 'http://localhost:3000/queries/*';
  constructor(private http: HttpClient) { }




}
