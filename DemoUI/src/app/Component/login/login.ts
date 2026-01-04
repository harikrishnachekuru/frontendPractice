import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  private route = inject(Router);
  private auth = inject(Auth);

  login(){
    this.auth.login(this.username, this.password).subscribe({
      next:(token: string) => {
        this.auth.saveToken(token);
        this.route.navigate(['/students']);
      },
      error: () => this.errorMessage = "Invalid Credentials"
    })
  }
}
