import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Importando os módulos do Angular Material e outras dependências
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PostComponent } from './post/post.component'; // Importar o componente stand-alone
import { Post } from './post';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatDialog } from '@angular/material/dialog';

import { MatDialogModule } from '@angular/material/dialog';

import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    PostComponent,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatDialogModule,
    PostDialogComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService],
})
export class AppComponent {
  title = 'meuapp';

  public posts: Post[];

  constructor(public dialog: MatDialog, public postService: PostService) {}
  ngOnInit() {
    this.posts = this.postService.posts;
  }
  openDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postService.salvar(result.post, result.arquivo);
      }
    });
  }
}
