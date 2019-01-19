import { NotFoundError } from './../not-found-error';
import { AppError } from './../app.error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators' ;
@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL = "https://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) { 
  }

  public getAllPosts(){
    let getAllUrl = this.URL + "/posts";  
    return this.httpClient.get(getAllUrl);
  }

  public getPostById(id: String) {
    let getAllUrl = this.URL + "/posts/"+id;  
    return this.httpClient.get(getAllUrl);
  }

  public createPost(post: any){
    let getAllUrl = this.URL + "/posts";  
    return this.httpClient.post(getAllUrl,JSON.stringify(post));
  }

  public updatePost(post){
    let updateUrl = this.URL + "/posts/" + post.id;
    return this.httpClient.patch(updateUrl,JSON.stringify(post));
  }

  public deletePost(id){
    let deleteUrl = this.URL + "/posts/" + id;
    return this.httpClient.delete(deleteUrl).pipe(catchError((error: Response)=>{
      //throw 'error in source. Details: ' +err;
      if(error.status === 404)
      return Observable.throw(new NotFoundError);
      return Observable.throw(new AppError(error));
    }));
  }
}
