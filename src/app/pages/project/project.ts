import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.css'] // Add global style
})
export class Project {
  sayHello() {
    alert('Hello!'); // Define the sayHello function for the <p onclick="sayHello()"> in header
  }
}