import {Component, OnInit} from '@angular/core';
import {MyComment} from './comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  comments: Array<{}>;
  postComment: string;

  ngOnInit(): void {
    this.comments = [
      new MyComment('Comment 1', [
        new MyComment('Comment 1.2', [])
      ]),
      new MyComment('Comment 2', []),
      new MyComment('Comment 3', [
        new MyComment('Comment 3.1', []),
        new MyComment('Comment 3.2', []),
        new MyComment('Comment 3.3', [
          new MyComment('Comment 3.3.1', []),
          new MyComment('Comment 3.3.2', []),
          new MyComment('Comment 3.3.3', []),
        ]),
      ]),
      new MyComment('Comment 4', []),
    ];

  }

  onSubmit() {
    this.comments.unshift(new MyComment(this.postComment, []));
  }


}
