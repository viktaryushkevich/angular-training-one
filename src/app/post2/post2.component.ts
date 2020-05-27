import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  template: `
    <div class="post4">
      <h2>Post Title 2</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  `,
  styles: [`
    .post4 {
      padding: 0.5rem;
      border: 2px solid black;
    }

    h2 {
      font-size: 1rem;
    }
  `]
})
export class Post2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
