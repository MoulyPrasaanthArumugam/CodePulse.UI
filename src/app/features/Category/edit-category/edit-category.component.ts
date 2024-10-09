import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category-model';
import { updateCategory } from '../models/update-category-model';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit,OnDestroy {

  id:string | null = null;
  paramSubscription?:Subscription;
  editCategorySubscription?:Subscription
  category?:Category

  constructor( private route:ActivatedRoute,
    private categoryService:CategoryService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next:(params) => {
        this.id = params.get('id');

        if(this.id){
          //get the data from API for this Category ID
          this.categoryService.getCategoryByID(this.id).
          subscribe({
            next:(response) =>{
              this.category = response;
            }
          })
        }
      }
    

    });
  }

  onFormSubmit():void{
    const updateCategory : updateCategory ={
      name:this.category?.name ?? '',
      urlHandle:this.category?.urlHandle ?? ''
    };

    //Passing object to the service Call
    if(this.id)
    this.editCategorySubscription = this.categoryService.updateCategory(this.id,updateCategory).
  subscribe({
    next:(response)=>{
      this.router.navigateByUrl('/admin/categories');
    }
  })
  }

  onDelete():void{
    if(this.id)
      this.categoryService.deleteCategory(this.id).
    subscribe({
      next:(response) => {
        this.router.navigateByUrl('/admin/categories');
      }
    })
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }

}
