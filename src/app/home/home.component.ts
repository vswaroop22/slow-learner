//this is a bydefault
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

//decorators(all with @)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// a simple class
export class HomeComponent implements OnInit,OnDestroy {
  
public allBlogs= [];
 
  constructor(public blogHttpService:BlogHttpService) {
    console.log("Home component constructor is called")
   }

  ngOnInit() {
    console.log("ngOnInit is called");
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log("logging data");
        console.log(data);

        this.allBlogs = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
)
    console.log(this.allBlogs);
   }
  
  ngOnDestroy(){
    console.log("destroy is called")


  }

}
