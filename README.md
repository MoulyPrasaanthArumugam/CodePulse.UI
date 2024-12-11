# HTTPclientmodule will be used to interact with API

addCategory(model:addCategoryRequest) : Observable<void>
model:addCategoryRequest - Input parameter (input is a model of type addCategoryRequest )
Observable<void> -Return Type


 private addSubscription ?: Subscription //We create a subscription type to handle the subscriptions
 
this.addSubscription = this.categoryService.addCategory(this.model) //assigning subscription to addsubscription type
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/categories');
      },
ngOnDestroy(): void {
    this.addSubscription?.unsubscribe();  //Unsubscribing 
  }
  
 
export class AddCategoryComponent implements OnDestroy{  //Ondestroy hook act as a interface so we need to implement


# Environments:
To store api base url constants for different environments
 command: ng g environment
 

# Async Pipe:
It autmatically subscribes an observable and update the template with emitted value. Used only for display purpose not required to bind or modify

<ng-container *ngIf="categories$ | async as categories"> // using async pipe to subscribe an observable here categories is a temp variable
categories$?:Observable<Category[]>; //here $ is notation for array of observables


# Routing in TS:
we need to include router in constructor part
  constructor(private categoryService: CategoryService, private router:Router) {
this.addSubscription = this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/categories');
      },  //If there is success response it will be routed
	  
	  
Logic to Fetch details by passing parameter
<a class="btn btn-light" [routerLink]="['/admin/categories',category.id]">Edit</a>  //Passing parameter in router link
constructor( private route:ActivatedRoute)  //Use Activated route to capture parameter by route

 ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next:(params) => {
        this.id = params.get('id');  //Capturing the route parameter

        if(this.id){
          //get the data from API for this Category ID
          this.categoryService.getCategoryByID(this.id). //Using it to filter 
          subscribe({
            next:(response) =>{
              this.category = response;
            }
          })
        }
      }


# we can right if else like this
<ng-container *ngIf="category;else notfound">

<ng-template #notfound>  //here not found is used as template id to show alert
<div class="alert alert-warning" role="alert">
Category not found
</div>
</ng-template >

# Markdown:
It is done by ngx-markdown package
<markdown [data]="model.content"></markdown> //Used two way binding to display the markdown content

# Image Upload:
# Reusable component
 <div class="images-container-modal" [ngClass]="{'d-block': isImageSelectorVisible, 'd-none': !isImageSelectorVisible}">  // Used isImageSelectorVisible to show and hide popup
    <button type="button" class="btn btn-light" style="position: fixed; top: 10px;right: 10px" (click)="closeImageSelector()">X</button>
  <app-image-selector></app-image-selector>  

Uploading image in API
public async Task<IActionResult> UploadImage([FromForm] IFormFile file,
    [FromForm] string fileName, [FromForm] string title)   //we use FromForm attribute to recieve details from form IFromFile is a file type
                
ModelState.AddModelError("file", "Unsupported file format"); //used for validation


# @viewchild 
 @ViewChild('form', { static: false}) imageUploadForm?: NgForm;  // it is createad as a variable to reset form
 
 
# BehaviourSubject
   Used to create observables to emit values to its subscribers
Because BehaviorSubject always holds the latest value, it is often used in state management scenarios. For example, you can use it to store and update the state of a component or service, ensuring that all parts of your application have access to the most recent state3.


#After Siva integration pull - follow below steps
npm uninstall marked ngx-cookie-service ngx-markdown
npm install ngx-cookie-service@17.0.0 ngx-markdown@17.0.0 marked@9.1.6
npm install bootstrap
ng add @angular/material
npm uninstall prismjs


