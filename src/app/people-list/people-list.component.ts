import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  users: any;
  cards: any;
  buttons: any;
  titles: any;
  constructor(private http: HttpClient) {
    this.buttons = [
      {link: '', icon: 'fa fa-qrcode icons'},
      {link: '/people', icon: 'fa fa-group icons'},
      {link: '/event', icon: 'fa fa-calendar-check-o icons'},
      {link: '/messages', icon: 'fa fa-commenting-o icons'}
    ];
    this.titles = [
      'Recently Seen', 'Personal Network', 'People to Meet'
    ];
  }

  ngOnInit() {
    this.getSecondUsers();
  }

  getSecondUsers(): void {
    this.usersServiceSecondGetUsers()
    .subscribe(
      users => {
        this.users = users;
        console.log(this.users, 'users');
      }
    );
  }

  usersServiceSecondGetUsers() {
    return this.http
      .get<any[]>('https://us-central1-talloo-app.cloudfunctions.net/app/users/recommended')
        .pipe(map(data => data));
  }

}
