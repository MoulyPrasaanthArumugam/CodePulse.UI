import { Injectable } from '@angular/core';
import { AlertComponent } from '../../core/component/alert/alert.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  selectedLanguage: string = 'en';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // Mapping of language codes to full names
  languageMap: { [key: string]: string } = {
    en: 'English',
    es: 'Español'
  };

  profiles = [
    { id: 1, name: 'John', image: '../../../assets/Profiles/person1.jpg', selectedprofile: false },
    { id: 2, name: 'Jane', image: '../../../assets/Profiles/person2.jpg', selectedprofile: false },
    { id: 3, name: 'Alex', image: '../../../assets/Profiles/person4.webp', selectedprofile: false },
    { id: 4, name: 'Sara', image: '../../../assets/Profiles/person1.jpg', selectedprofile: false }
  ];

  constructor(private route: Router, private _snackBar: MatSnackBar) { }

  navigateToRoute(path: string): void {
    this.route.navigate([path]);
  }

  setLanguage(language: string): void {
    this.selectedLanguage = language;
  }

  selectProfile(profileId: number) {
    console.log(`Selected Profile ID: ${profileId}`);
    // Mark the selected profile as true
    this.profiles.forEach(profile => {
      profile.selectedprofile = profile.id === profileId;
    });

    // Optionally, navigate to a different page
    this.route.navigate(['/home']);
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(AlertComponent, {
      data: { message },
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
    });
  }

  logout() {
    // Implement logout logic
    // Deselect all profiles
    this.selectedLanguage = 'en';
    this.profiles.forEach(profile => {
      profile.selectedprofile = false;
    });
    this.route.navigate(['/login']);
    console.log('User logged out');
  }


}
