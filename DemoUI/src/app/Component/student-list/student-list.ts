import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../services/student';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit{
  students: any[] = [];

  private studentSrvc = inject(Student);
  private auth = inject(Auth);
  private route = inject(Router);

  ngOnInit(): void {
    this.studentService();
  }

  studentService(){
    this.studentSrvc.getStudents().subscribe(data => {
      this.students = data;
    })
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
