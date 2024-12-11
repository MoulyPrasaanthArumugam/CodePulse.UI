import { Component } from '@angular/core';
import { CoreService } from '../../../core/services/core.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public coreService: CoreService) { }

  password: string = ''; // Store the password
  passwordVisible: boolean = false;

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

}
