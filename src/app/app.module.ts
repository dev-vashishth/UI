import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TodayComponent } from './today/today.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './event/event.component';
import { MessagesComponent } from './messages/messages.component';
import { environment } from './../environments/environment';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { VerificationComponent } from './verification/verification.component';
import { ZipcodeComponent } from './registration/zipcode/zipcode.component';
import { ProfilepicComponent } from './registration/profilepic/profilepic.component';
import { ContactinfoComponent } from './registration/contactinfo/contactinfo.component';
import { ProfilePicVerificationComponent } from './registration/profile-pic-verification/profile-pic-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    TodayComponent,
    EventComponent,
    MessagesComponent,
    LoginComponent,
    HeaderComponent,
    VerificationComponent,
    ZipcodeComponent,
    ProfilepicComponent,
    ContactinfoComponent,
    ProfilePicVerificationComponent,
    ProfileComponent,
    MainHeaderComponent,
    HomeComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientXsrfModule.disable(),
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
