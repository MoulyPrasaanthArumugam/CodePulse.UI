import { Component, OnDestroy } from '@angular/core';
import { addCategoryRequest } from '../models/add-category-request-model';
import { CategoryService } from '../service/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy{

  model:addCategoryRequest;
  private addSubscription ?: Subscription

  constructor(private categoryService: CategoryService, private router:Router) {
   this.model = {
    name:'',
    urlHandle:''
   };
  }
 
  onFormSubmit(){
    this.addSubscription = this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/categories');
      },
      
    })
   console.log(this.model);
  }

  ngOnDestroy(): void {
    this.addSubscription?.unsubscribe();
  }
}
