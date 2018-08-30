import { Component } from '@angular/core';

export interface LineItem {
  Description: string;
  Priority: string;
  Due: string;
 } 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskListApp: LineItem[] = [
    {Description:"Lunch", Priority:"Low", Due:"Not Sure"},
    {Description:"Dinner", Priority:"High", Due:"Not Sure"}
  ];
  title = 'ToDoList';
}
