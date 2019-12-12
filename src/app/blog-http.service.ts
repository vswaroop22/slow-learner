import { Injectable } from '@angular/core';
//improting http client to male the request

import { HttpClient, HttpErrorResponse } from '@angular/common/http';



import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

/*import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';*/


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs: any;
  public currentBlog: any;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken: 'Admin';

  constructor(private _http,HttpClient) { 
    console.log("blog-http service was called");
  }

//exception handler
private handleError(err: HttpErrorResponse){
console.log("handle error http calls");
console.log(err.message);
return Observable.throw(err.message)
}

  //methode to return all the blogs
  public getAllBlogs() : any {

    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse
    
  }
  //method to get a particular blog

  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
return myResponse;
    
  }
}
