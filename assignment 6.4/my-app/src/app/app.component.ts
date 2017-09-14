import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  firstName: string;
  lastName: string;
  title: string;
  clicked: boolean;
  // firstName and lastName properties assigned value through ngOnInit
  ngOnInit() {
    this.firstName = `John`;
    this.lastName = `Doe`;
  }
  // printDetais method is bound to click event, values are bounded using the template variable
  printDetails(frstnm: HTMLInputElement, lstnm: HTMLInputElement, event: any): void {
    this.firstName = frstnm.value || this.firstName;
    this.lastName = lstnm.value || this.lastName;
    this.title = `First Name is: ${this.firstName} \u00A0 | \u00A0 Last Name is: ${this.lastName}`;
    event.preventDefault();
    this.clicked = true;
  }
  // binds class using ngClass. Displays the paragraph of details only when clicked
  isVisible() {
    const classes = {
      display: this.clicked
    };
    return classes;
  }
}
