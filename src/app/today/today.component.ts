import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  public events: Observable<any[]>;
  users: any;
  apiUrl = 'https://us-central1-talloo-app.cloudfunctions.net/app/users/recommended';
  persons: any;
  buttons: any;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  constructor(db: AngularFirestore, private http: HttpClient) {
    this.events = db.collection('/events').valueChanges();
    this.persons = [
      'assets/images/1.png', 'assets/images/2.png', 'assets/images/3.png'
    ];
    this.buttons = [
      { link: '', icon: 'fa fa-qrcode icons' },
      { link: '/people', icon: 'fa fa-group icons' },
      { link: '/event', icon: 'fa fa-calendar-check-o icons' },
      { link: '/messages', icon: 'fa fa-commenting-o icons' }
    ];
    this.text1 = 'What you should know about driving inbound referrals into your business through online sources.';
    this.text2 = 'Suzi, Royce and Anna are metting for coffee - join us?';
    this.text3 = 'The key success is simple, yet it requires the right activity.';
    this.text4 = 'When you help others get what they want, you will get what you want. Make introductions and give referrals.';
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersServiceGetUsers()
      .subscribe(
        users => {
          this.users = users;
        }
      );
  }

  usersServiceGetUsers() {
    return this.http
      .get<any[]>(this.apiUrl)
        .pipe(map(data => data));
  }

}
