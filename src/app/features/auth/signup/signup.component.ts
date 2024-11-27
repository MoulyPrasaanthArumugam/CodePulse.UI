import { Component } from '@angular/core';
import { SignupRequest } from '../models/Signup_request_Model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component
({ selector: 'app-signup',
   templateUrl: './signup.component.html', 
   styleUrl: './signup.component.css'
})

export class SignupComponent{
  modellist: SignupRequest;

  
  constructor(private authService: AuthService,  
  private router: Router) {
    this.modellist = {
      UserName :'',
      Email:'',
      Password:''
    };    
  }

  

  onSubmit():any
  { 
    this.authService.register(this.modellist).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('User registered successfully!');
      },
      error: (error) => {
        console.error('Error during registration:', error);
        alert('Registration failed! Please try again.');
      }
    });

    console.log('Userlist:',  this.modellist); 
    this.router.navigateByUrl('/login');
  }
}
