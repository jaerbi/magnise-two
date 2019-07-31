import {Component, Input} from '@angular/core';
import {MyComment} from '../comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comments: MyComment[];
  title: string;

  /**
   * Create new sub comment
   * @param MyComment comment
   */
  onSubmit(comment: MyComment) {
    comment.comments.unshift(new MyComment(this.title, []));
  }

  /**
   * Delete parent comment and all sub comment
   * @param number index
   */
  onDelete(index: number) {
    this.comments.splice(index, 1);
  }

}
