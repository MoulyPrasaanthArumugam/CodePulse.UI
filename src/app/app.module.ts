import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { CategoryListComponent } from './features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './features/Category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './features/Category/edit-category/edit-category.component';
import { BlogPostListComponent } from './features/blogPost/blog-post-list/blog-post-list.component';
import { AddBlogPostComponent } from './features/blogPost/add-blog-post/add-blog-post.component';  
import { MarkdownModule } from 'ngx-markdown';
import { EditBlogpostComponent } from './features/blogPost/edit-blogpost/edit-blogpost.component';
import { ImageSelectorComponent } from './shared/components/image-selector/image-selector.component';
import { BlogDetailsComponent } from './features/public/blog-details/blog-details.component';
import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authInterceptor } from './core/auth.interceptor';
import { SignupComponent } from './features/auth/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogPostListComponent,
    AddBlogPostComponent,
    EditBlogpostComponent,
    ImageSelectorComponent,
    BlogDetailsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    provideClientHydration()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
