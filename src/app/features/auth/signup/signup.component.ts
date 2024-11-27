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

  

  onSubmit()
  { 

    this.authService.register(this.modellist)
    // .subscribe({
    //   next: (response) => {
    //     // Set Auth Cookie
    //     this.cookieService.set('Authorization', `Bearer ${response.token}`,
    //     undefined, '/', undefined, true, 'Strict');

    //     // Set User
    //     this.authService.setUser({
    //       email: response.email,
    //       roles: response.roles
    //     });

       

    
    console.log('Userlist:',  this.modellist); 
    this.router.navigateByUrl('/login');
  }
}
