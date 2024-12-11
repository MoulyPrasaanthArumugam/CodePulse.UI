import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class HeaderComponent {
  isScrolled: boolean = false;
  @Input() showLanguageDropdown = false; // Control language dropdown visibility in header
  @Input() showSignInButton = false;     // Control Sign In button visibility in header
  @Input() showhomeheader = false; // Control for header menu visibility in header 
  isSearchVisible = false;  // Controls the visibility of the search input

  constructor(public coreService: CoreService, private route: Router) { }

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Add the class if the scroll position is greater than 50px
    this.isScrolled = window.scrollY > 50;
  }

  // Reference to the search input element
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  // Toggles the visibility of the search input and focuses on it
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;

    // Focus on the search input if it becomes visible
    if (this.isSearchVisible) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 0);  // Timeout to ensure the input is rendered before focusing
    }
  }

  // Get the selected profile's image
  getSelectedProfileImage() {
    const selectedProfile = this.coreService.profiles.find(profile => profile.selectedprofile);
    return selectedProfile ? selectedProfile.image : this.coreService.profiles[0].image;
  }

  goToProfile() {
    this.route.navigate(['/login']);
  }


}
