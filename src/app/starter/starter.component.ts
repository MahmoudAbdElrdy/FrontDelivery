import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    debugger;
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
