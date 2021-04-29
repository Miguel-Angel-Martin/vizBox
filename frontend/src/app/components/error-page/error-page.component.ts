import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viz-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage = 'Something went wrong. Please check your route.';

  constructor(private router: Router) {
    this.errorMessage = this.getErrorMessage();
  }

  ngOnInit() {
  }
  private getErrorMessage = (): string => {
    const state = this.router.getCurrentNavigation()?.extras.state;
    return state?.errorMessage || this.errorMessage;
  }

}
