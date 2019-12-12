import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //Declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastmodified": "2019-12-05",
      "created": "2019-12-04",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyhtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "this is blog 1"
    },
    {
      "blogId": "2",
      "lastmodified": "2019-12-03",
      "created": "2019-12-02",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyhtml": "<h1>this is blog body</h1> <p>small text</p>",
      "description": "this is blog 2 description",
      "title": "this is blog 2 example"
    },
    {
      "blogId": "3",
      "lastmodified": "2019-12-04",
      "created": "2019-12-01",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyhtml": "this is blog body. this is si si si",
      "description": "this is blog 3rd description",
      "title": "this is blog 3"
    }
  ]
  public currentBlog: { "blogId": string; "lastmodified": string; "created": string; "tags": any[]; "author": string; "category": string; "isPublished": boolean; "views": number; "bodyhtml": string; "description": string; "title": string; };

  public getAllBlogs(): any {

    return this.allBlogs;
  }

  constructor() {
    console.log("service constructor is called")

  }

  public getSingleBlogInformation(currentBlogId): any {

    for (let blog of this.allBlogs) {

      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }



}
