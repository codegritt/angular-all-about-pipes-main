import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today = new Date();
  users = [
    { name: 'Dennis', age: 21 },
    { name: 'Matt', age: 33 },
    { name: 'Adam', age: 21 }
  ];
  onClickAdd() {
    this.users.push({name:'Ben',age:26});
  }
}
