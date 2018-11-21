import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TodayComponent } from './today/today.component';
import { EventComponent } from './event/event.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { VerificationComponent } from './verification/verification.component';
import { ZipcodeComponent } from './registration/zipcode/zipcode.component';
import { ProfilepicComponent } from './registration/profilepic/profilepic.component';
import { ContactinfoComponent } from './registration/contactinfo/contactinfo.component';
import { ProfilePicVerificationComponent } from './registration/profile-pic-verification/profile-pic-verification.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path : 'header',
      component : HeaderComponent
    },
    {
      path: 'home',
      component: TodayComponent
    },
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'profilePhoto',
      component : ProfilepicComponent
    },
    {
      path : 'verification',
      component : VerificationComponent
    },
    {
      path : 'contactInfo',
      component : ContactinfoComponent
    },
    {
      path : 'profilePicConfirmation',
      component : ProfilePicVerificationComponent
    },
    {
      path : 'zip',
      component : ZipcodeComponent
    },
    {
      path: 'people',
      component: PeopleListComponent
    },
    {
      path: 'event',
      component: EventComponent
    },
    {
      path: 'messages',
      component: MessagesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule { }
