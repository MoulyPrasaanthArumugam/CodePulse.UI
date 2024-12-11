import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddProfileComponent } from '../add-profile/add-profile.component';
import { CoreService } from '../../../core/services/core.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

  constructor(private dialog: MatDialog, public coreService: CoreService,
    private breakpointObserver: BreakpointObserver, private route: Router) { }
  showEditIcons = false; // Controls visibility of the edit icons


  openAddProfile() {
    let dialogWidth = '50%'; // Default width for larger screens
    let dialogHeight = 'auto'; // Auto height adjusts to content

    // Adjust width for small screens
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      dialogWidth = '90%'; // Full-width for mobile
    } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      dialogWidth = '70%'; // Adjust for tablet
    }
    var _popup = this.dialog.open(AddProfileComponent, {
      width: dialogWidth,
      height: dialogHeight,
      data: {
        title: 'Add a profile',
        name: '',  // default value for name
        image: ''  // default value for image
      }
    });
    _popup.afterClosed().subscribe(input => {
      if (input && input.name && input.image) {
        const nextId =
          this.coreService.profiles.length > 0
            ? Math.max(...this.coreService.profiles.map((p) => p.id)) + 1
            : 1;
        const newProfile = { id: nextId, name: input.name, image: input.image, selectedprofile: false }
        this.coreService.profiles.push(newProfile);
        this.coreService.openSnackBar('Profile Created !');
      }
    })
  }


  toggleManageProfile() {
    this.showEditIcons = !this.showEditIcons; // Toggle the visibility of edit icons
  }

  editProfile(profile: any) {
    let dialogWidth = '50%'; // Default width for larger screens
    let dialogHeight = 'auto'; // Auto height adjusts to content

    // Adjust width for small screens
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      dialogWidth = '90%'; // Full-width for mobile
    } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      dialogWidth = '70%'; // Adjust for tablet
    }
    var _popup = this.dialog.open(AddProfileComponent, {
      width: dialogWidth,
      height: dialogHeight,
      data: {
        title: 'Edit a profile',
        id: profile.id,
        name: profile.name,
        image: profile.image
      }
    });
    _popup.afterClosed().subscribe(input => {
      if (input.id && input.name && input.image) {
        // Update the existing profile
        const existingProfile = this.coreService.profiles.find((p) => p.id === input.id);
        if (existingProfile) {
          existingProfile.name = input.name;
          existingProfile.image = input.image;
          this.coreService.openSnackBar('Profile Updated !');
        }
        this.toggleManageProfile();
      }
    })
  }

}
