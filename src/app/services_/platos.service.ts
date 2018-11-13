import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root' // no sé para qué es esto;
})
export class PlatosService {

  private route1 = 'http://localhost:3000/queries/*';
  private defaultDate: any;
  // private todayPlatos: any;
  private route2 = 'http://localhost:3000/queries/*';
  constructor(private http: HttpClient) { }


  getCasinosPerUser(userEmail: string) {
     return this.http.get(this.route1);

  }


  getTodayPlatos() {
    return this.http.get(this.route2);

  }



}
