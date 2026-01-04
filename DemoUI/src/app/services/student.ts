import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private apiUrl = 'http://localhost:5099/api/students';

  private http = inject(HttpClient);

  getStudents(){
    return this.http.get<any[]>(this.apiUrl);
  }
}
