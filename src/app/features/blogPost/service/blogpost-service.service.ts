import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blogpost.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost.model';
import { environment } from '../../../../environments/environment';
import { UpdateBlogPost } from '../models/update-blogpost.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BlogpostServiceService {

  constructor(private http:HttpClient, private cookieService:CookieService) { }

  
  getAllBlogPost(): Observable<BlogPost[]>{
     return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/BlogPost`);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}`);
  }

  getBlogPostByUrlHandle(urlHandle: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${urlHandle}`);
  }

  //addAuth=true query string used to add Interceptor
  createBlogPost(data:AddBlogPost): Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPost?addAuth=true`,data);
  }


  updateBlogPost(id: string, updatedBlogPost: UpdateBlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}?addAuth=true`, updatedBlogPost);
  }

  deleteBlogPost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}?addAuth=true`);
  }
}
