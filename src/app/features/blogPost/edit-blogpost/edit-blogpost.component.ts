import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BlogPost } from '../models/blogpost.model';
import { Category } from '../../Category/models/category-model';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostServiceService } from '../service/blogpost-service.service';
import { CategoryService } from '../../Category/service/category.service';
import { UpdateBlogPost } from '../models/update-blogpost.model';
import { ImageService } from '../../../shared/components/image-selector/image.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrl: './edit-blogpost.component.css'
})
export class EditBlogpostComponent implements OnInit,OnDestroy {

  id: string | null = null;
  model?: BlogPost;
  categories$? : Observable<Category[]>;
  selectedCategories?: string[]
  isImageSelectorVisible : boolean = false;

  routeSubscription?: Subscription;
  updateBlogPostSubscription?: Subscription;
  getBlogPostSubscription?: Subscription;
  deleteBlogPostSubscription?:Subscription;
  imageSelectSubscricption?: Subscription;


  constructor(private route:ActivatedRoute,
    private blogPostService: BlogpostServiceService,
    private categoryService: CategoryService,
    private router:Router,
    private imageService: ImageService) 
  {
    
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();


    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        // Get BlogPost From API
        if (this.id) {
          this.getBlogPostSubscription = this.blogPostService.getBlogPostById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCategories = response.categories.map(x => x.id);

              this.imageSelectSubscricption = this.imageService.onSelectImage()
              .subscribe({
                next: (response) => {
                  if (this.model) {
                    this.model.featuredImageUrl = response.url;
                    this.isImageSelectorVisible = false;
                  }
                }
              })
            }
          });
          
        }

      }
    });
  }

  onFormSubmit(): void {
    // Convert this model to Request Object
    if (this.model && this.id) {
      var updateBlogPost: UpdateBlogPost = {
        author: this.model.author,
        content: this.model.content,
        shortDescription: this.model.shortDescription,
        featuredImageUrl: this.model.featuredImageUrl,
        isVisible: this.model.isVisible,
        publishedDate: this.model.publishedDate,
        title: this.model.title,
        urlHandle: this.model.urlHandle,
        categories: this.selectedCategories ?? []
      };

      this.updateBlogPostSubscription = this.blogPostService.updateBlogPost(this.id, updateBlogPost)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/blogPost');
        }
      });
    }

  }

  onDelete(): void {
    if (this.id) {
      // call service and delete blogpost
      this.deleteBlogPostSubscription = this.blogPostService.deleteBlogPost(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/blogPost');
        }
      });
    }
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }

  closeImageSelector() : void {
    this.isImageSelectorVisible = false;
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateBlogPostSubscription?.unsubscribe();
    this.getBlogPostSubscription?.unsubscribe();
  }
}