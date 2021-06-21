import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GainService {
  private options;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.options = { headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
    })};
  }

  public getAll() {
    return this.http.get(`${environment.baseUrl}/gains`, this.options);
  }

  public create(gain) {
    return this.http.post(`${environment.baseUrl}/gains`, gain, this.options);
  }
}