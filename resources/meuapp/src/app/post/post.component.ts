import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    FlexLayoutServerModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  @Input() post!: Post; // Usando Non-Null Assertion

  constructor(private postService: PostService) {}

  like() {
    this.postService.like(this.post.id!);
  }

  ngOnInit() {}
}
