import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  myform: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AddProfileComponent>,
    private builder: FormBuilder) {
    this.myform = this.builder.group({
      id: [data?.id || ''],
      name: [data?.name || '', Validators.required],
      image: [data?.image || ''] // Add FormControl for image
    });
    this.selectProfileIcon(this.myform.value.image || this.profileImages[0]);
  }

  ngOnInit(): void {
    this.inputData = this.data;
    setTimeout(() => {
      document.getElementById('floatingInput')?.focus();
    });
  }

  inputData: any;
  selectedProfileIcon: string | null = null;

  profileImages: string[] = [
    '../../../assets/Profiles/person1.jpg',
    '../../../assets/Profiles/person2.jpg',
    '../../../assets/Profiles/person4.webp'
  ];

  selectProfileIcon(image: string) {
    this.selectedProfileIcon = image;
    this.myform.patchValue({ image }); // Update the form control
  }

  closePopup() {
    this.ref.close();
  }

  Saveprofile() {
    if (this.myform.valid) {
      this.ref.close(this.myform.value); // Return form data
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
