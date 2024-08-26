import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Post } from '../post';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  @Input() post!: Post; // Usando Non-Null Assertion

  constructor() {}

  ngOnInit() {}
}
