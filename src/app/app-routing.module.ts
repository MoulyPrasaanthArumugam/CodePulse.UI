import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './features/Category/add-category/add-category.component';
import { EditCategoryComponent } from './features/Category/edit-category/edit-category.component';
import { BlogPostListComponent } from './features/blogPost/blog-post-list/blog-post-list.component';
import { AddBlogPostComponent } from './features/blogPost/add-blog-post/add-blog-post.component';
import { EditBlogpostComponent } from './features/blogPost/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './features/public/home/home.component';
import { BlogDetailsComponent } from './features/public/blog-details/blog-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './features/auth/guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'blog/:url',
    component:BlogDetailsComponent
  },
  {
    path: 'admin/categories',
    component: CategoryListComponent,
    canActivate:[authGuard]
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent,
    canActivate:[authGuard]
  },
  {
    path: 'admin/categories/:id',
    component: EditCategoryComponent,
    canActivate:[authGuard]
  },
  {
    path: '',
    component: BlogDetailsComponent,
    canActivate:[authGuard]
  },
  {
    path: 'admin/blogpost/add',
    component: AddBlogPostComponent,
    canActivate:[authGuard]
  },
  {
    path: 'admin/blogpost',
    component: BlogPostListComponent,
    canActivate:[authGuard]
  },
  {
    path: 'admin/blogpost/:id',
    component: EditBlogpostComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
