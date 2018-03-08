import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
      alert('Please add post');
    }else{
      this.postService.savePost({title, body} as Post).subscribe
      (post => {
        this.newPost.emit(post);
      });
    }
  }

}
