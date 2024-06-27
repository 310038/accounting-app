import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  private apiUrl = 'http://localhost:5000/api/accounts'; // 後端 API URL

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addAccount(account: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, account);
  }
}
