import { Component, OnInit, Input} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../user';
import {MatDialog} from '@angular/material';
import {EditUserComponent} from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  @Input() user;

  users: User[] = [];
  NewUser: User = new User();
  constructor(private userService: UserService, public dialog: MatDialog)  {  }

  ngOnInit() {
    this.userService.Get().subscribe(data => {
      console.log(data);
      this.users = data;
    });

  }

  OnDelete(U: User) {
    console.log(U.Company);
    this.userService.Delete(U);
    this.userService.Get().subscribe(data => {
      console.log(data);
      this.users = data;
    });

  }

  AddItem(U: User) {
    U.id = this.users.length + 1;
    this.userService.AddItem(U);
  }

  openDialog(U: User): void {
    console.log(U.Company);
    const dialogRef = this.dialog.open(EditUserComponent, {data: {user: U}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
