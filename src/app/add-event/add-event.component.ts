import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

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
