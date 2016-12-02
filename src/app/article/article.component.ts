import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-article',
  template: `
    <article class="container">
      <router-outlet></router-outlet>
    </article>
  `,
  styles: []
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
