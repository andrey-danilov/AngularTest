import { Component, OnInit, Input} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  @Input() user;
  username;
  email;
  company;

  done = false;

  users: User[];
  NewUser: User;
  constructor(private userService: UserService)  {  }

  ngOnInit() {
    this.users = this.userService.Get().subscribe(data => {
      this.users = data;
      console.log(data);
    });

  }
  AddItem() {
    this.NewUser = {name:  this.username, email: this.email , company: this.company};
    this.userService.AddItem(this.NewUser);
  }
}
