import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../../app.component';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})

export class TaskdisplayComponent implements OnInit {

  @Input()
  taskListDisplay: LineItem[];

  constructor() { }

  ngOnInit() {
  }

}
