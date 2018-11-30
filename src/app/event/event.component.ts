import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  display: string;

  ngOnInit() {
  }

  openModal() {
       this.display = 'block';
    }

  onCloseHandled() {
    this.display = 'none';
  }

}
