import { Component, OnInit } from '@angular/core';
import { BlogpostServiceService } from '../../blogPost/service/blogpost-service.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blogPost/models/blogpost.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  blogs$?: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogpostServiceService) {  
  }

  ngOnInit(): void {
    this.blogs$ = this.blogPostService.getAllBlogPost();
  }

}
