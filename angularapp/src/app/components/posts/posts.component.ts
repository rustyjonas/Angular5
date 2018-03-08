import { Component, OnInit } from '@angular/core';
import {PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts =>{
        this.posts = posts;
      });
  }

}
