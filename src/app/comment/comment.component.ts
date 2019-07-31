import { Component, Input } from '@angular/core';

import { MyComment } from '../comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comments: MyComment[];

  /**
   * Create new sub comment
   * @param MyComment comment
   */
  onSubmit(comment: MyComment, form) {
    if (form.valid) {
      comment.comments.unshift(new MyComment(form.value.title, []));
      form.reset();
    }
  }

  /**
   * Delete parent comment and all sub comment
   * @param number index
   */
  onDelete(index: number) {
    this.comments.splice(index, 1);
  }

}
