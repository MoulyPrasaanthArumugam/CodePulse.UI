import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/core/component/navbar/navbar.component';
import { CategoryListComponent } from './features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './features/Category/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowseComponent } from './features/public/browse/browse.component';
import { AddProfileComponent } from './features/public/add-profile/add-profile.component';
import { AlertComponent } from '../app/core/component/alert/alert.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    SignupComponent,
    BrowseComponent,
    AddProfileComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
