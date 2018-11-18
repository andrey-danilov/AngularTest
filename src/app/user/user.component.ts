import { Component, OnInit, Input} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../user';
import {MatDialog} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  @Input() user;


  users: User[] = [];
  NewUser: User = new User();
  constructor(private userService: UserService, private dialog: MatDialog)  {  }

  ngOnInit() {
    this.userService.Get().subscribe(data => {
      console.log(data);
      this.users = data;
    });

  }
  OnOpenModalEdit(U: User) {
    console.log(U.Company);
  }

  OnDelete(U: User) {
    console.log(U.Company);
    this.users.splice(this.users.indexOf(U), 1);
  }

  AddItem() {
    this.users.push(this.NewUser);
  }
}
