import { AppError } from './../app.error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../not-found-error';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any[];
  constructor(private postService: PostService, private route: Router, private activatedRouter: ActivatedRoute) { 
  }

  ngOnInit() {    
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = <any[]>posts;
    },(error: Response)=>{
      if(error.status === 404)
      alert("An enexpected error occurred");
      console.log("error");
    });
  }

  getPostById(id: String){
    this.postService.getPostById(id).subscribe(res => {
      return res;
    },error=>{
      alert("An enexpected error occurred");
      console.log("error");
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title : input.value};
    input.value = '';
    this.postService.createPost(post).subscribe((res:any) => {
      post['id'] = res.id;
      (this.posts).splice(0,0,post);
     //this.posts.push(post);
    },(error: Response)=>{
      alert("An enexpected error occurred");
      console.log("error");
    });
  }

  updatePost(post){
    let postObj = { title: post.title };
    this.postService.updatePost(post).subscribe( res=> {
    },(error: Response) => {
      if(error.status === 404)
      alert("Post not found");
      console.log("error");
    });
  }

  deletePost(post){
    //let postObj = { title: post.title };
    this.postService.deletePost(post.id).subscribe( res=> {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },(error: AppError) => {
      if(error instanceof NotFoundError)
      alert("Post not found");
      else
      alert("An enexpected error occurred");
      console.log("error");
    });
  }

  viewPost(post){
    console.log("sdfs");
    this.route.navigate(["/post"], {queryParams: {id:1, name:"ritesh"}});

  }

}
