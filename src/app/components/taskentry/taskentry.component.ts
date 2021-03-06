import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../../app.component';

@Component({
  selector: 'app-taskentry',
  templateUrl: './taskentry.component.html',
  styleUrls: ['./taskentry.component.css']
})

export class TaskentryComponent implements OnInit {

  @Input()
  taskListEntry: LineItem[];

  constructor() { }

  ngOnInit() {
  }

  button_pressed_add_to_list(myform) {
    this.taskListEntry.push(myform.value);
    myform.reset();
  }

}
