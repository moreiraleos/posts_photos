import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent implements OnInit {
  public nomearquivo: string = '';

  public dados = {
    post: new Post('', '', '', '', ''),
    arquivo: null,
  };
  constructor(public dialogref: MatDialogRef<PostDialogComponent>) {}
  ngOnInit() {}
  mudouarquivo(event: any) {
    // console.log(event.target.files[0]);
    this.nomearquivo = event.target.files[0].name;
    this.dados.arquivo = event.target.files[0];
  }
  salvar() {
    this.dialogref.close(this.dados);
  }
  cancelar() {
    this.dialogref.close();
  }
  onClose(): void {
    this.dialogref.close();
  }
}
