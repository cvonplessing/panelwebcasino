import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root' // no sé para qué es esto;
})
export class PlatosService {

  private userSource = new BehaviorSubject('defaultUser');
  cast = this.userSource.asObservable();

  private route1 = 'http://localhost:3000/queries/*';
  private defaultDate: any;
  // private todayPlatos: any;
  private route2 = 'http://localhost:3000/queries/*';
  private route3 = 'http://localhost:3000/queries/*';

  constructor(private http: HttpClient) { }

  toSetUser(currentUser) {
    this.userSource.next(currentUser);
  }

  getCasinosPerUser(userEmail: any) {
     return this.http.get(this.route1);

  }

  getPlatosPerCasino(userEmail: any, casino: any) {
    return this.http.get(this.route2);

  }
  getTodayPlatos(searchDate: any) {
    return this.http.get(this.route3);

  }



}
