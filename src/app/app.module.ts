import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';
import { ActivityComponent } from './activity/activity.component';

import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    NavitemsComponent,
    AboutusComponent,
    ContactusComponent,
    TransactionComponent,
    ActivityComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"aboutus",component:AboutusComponent
      },
    {
      path:"login",component:LoginComponent
    }, {
      path:"contactus",component:ContactusComponent
    },
    {
      path:"transaction",component:TransactionComponent
    },
    {
      path:"dashboard",component:DashboardComponent
    },
    {
      path:"activity",component:ActivityComponent
    },
    {
      path:"logout",component:LogoutComponent
    },
    {
      path:"",component:LoginComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
