import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:5099/api/auth';

  private http = inject(HttpClient);

  login(username: string, password: string) {
  return this.http.post(
    `${this.apiUrl}/login`,
    { username, password },
    { responseType: 'text' }
  );
}

  saveToken(token: string){
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  logout(){
    localStorage.removeItem('accessToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
