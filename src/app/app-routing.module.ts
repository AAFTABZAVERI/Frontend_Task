import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { CommentsComponent } from './comments/comments.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: CommentTableComponent,
      },
      {
        path: 'comments/:userId',
        component: CommentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
