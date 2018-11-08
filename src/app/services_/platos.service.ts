import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root' // no sé para qué es esto;
})
export class PlatosService {

  private route = 'http://localhost:3000/queries/*';
  private defaultDate: any;
  // private todayPlatos: any;

  constructor(private http: HttpClient) { }


  getCasinos() {
     return this.http.get(this.route);

  }


  getTodayPlatos() {
    return this.http.get(this.route);

  }



}
