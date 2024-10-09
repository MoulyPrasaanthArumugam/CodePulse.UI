import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blogpost.model';
import { BlogpostServiceService } from '../service/blogpost-service.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../Category/models/category-model';
import { CategoryService } from '../../Category/service/category.service';
import { ImageService } from '../../../shared/components/image-selector/image.service';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrl: './add-blog-post.component.css'
})
export class AddBlogPostComponent implements OnInit,OnDestroy{
  model:AddBlogPost;
  isImageSelectorVisible : boolean = false;
  categories$?:Observable<Category[]>;
  imageSelectorSubscription?: Subscription;

  constructor( private blogService: BlogpostServiceService,
    private router: Router, private categoryService: CategoryService,private imageService: ImageService
  ) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date(),
      categories: []
    }

    }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.imageSelectorSubscription = this.imageService.onSelectImage()
     .subscribe({
      next: (selectedImage) => {
        this.model.featuredImageUrl = selectedImage.url;
        this.closeImageSelector();
      }
     })
  }
    onFormSubmit():void{
      console.log(this.model);
      this.blogService.createBlogPost(this.model).
      subscribe({
        next:(response) =>{
            this.router.navigateByUrl('/admin/blogPost')
        }
      })
    }

    openImageSelector(): void {
      this.isImageSelectorVisible = true;
    }
  
    closeImageSelector() : void {
      this.isImageSelectorVisible = false;
    }
  
    ngOnDestroy(): void {
      this.imageSelectorSubscription?.unsubscribe();
    }
  }
