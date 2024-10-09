import { Component, OnInit } from '@angular/core';
import { BlogpostServiceService } from '../service/blogpost-service.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost.model';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css'
})
export class BlogPostListComponent implements OnInit{

  blogPosts$?:Observable<BlogPost[]>;
constructor(private blogPostService:BlogpostServiceService) {
  
}

  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getAllBlogPost();
     
  }

}
