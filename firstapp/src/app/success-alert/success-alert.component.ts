import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  // templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css'],
  template: `<div class="alert alert-success" role="alert">
    This is a success alert—check it out!
  </div> `,
  styles: [
    `
      .alert-success {
        color: blue;
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
