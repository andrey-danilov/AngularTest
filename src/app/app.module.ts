import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import {UserService} from './user/user.service';
import {CompanyServes} from './company/company.serves';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material';

const Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'company', component: CompanyComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CompanyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(Routes),
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [  ],
  providers: [UserService, CompanyServes],
  bootstrap: [AppComponent]
})
export class AppModule { }
