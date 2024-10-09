import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostServiceService } from '../../blogPost/service/blogpost-service.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blogPost/models/blogpost.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit{
  url: string | null = null;
  blogPost$? : Observable<BlogPost>;

  constructor( private route: ActivatedRoute, private blogPostService:BlogpostServiceService) {   
  }
  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next: (params) => {
        this.url = params.get('url');
      }
    });

    // Fetch blog details by url
    if (this.url) {
      this.blogPost$ = this.blogPostService.getBlogPostByUrlHandle(this.url);
    }
  }

}
