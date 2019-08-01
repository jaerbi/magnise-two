import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MyComment } from './comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('formSearch', { static: true }) searchForm: NgForm;

  comments: MyComment[];
  filterComments = [];
  filteredComments = [];
  serchMode = false;
  postComment: string;
  searchField: string;

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

  /**
   * Search comment
   */
  onSearch() {
    const searchField = this.searchForm.value.searchField.toLowerCase();

    if (!searchField) {
      this.serchMode = false;
    } else {
      this.serchMode = true;
      this.filterComments = [];
      this.findComment(this.comments);
      this.filteredComments = this.filterComments.filter((title) => {
        return title.toLowerCase().includes(searchField);
      });
    }

  }

  findComment(comments) {
    comments.forEach((comment) => {
      if (comment.comments.length) {
        this.findComment(comment.comments);
      }
      this.filterComments.push(comment.title);
    });
  }

  onSubmit() {
    if (this.postComment) {
      this.comments.unshift(new MyComment(this.postComment, []));
      this.postComment = '';
    }
  }
}
