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

  users: User[] = [];
  NewUser: User;
  constructor(private userService: UserService)  {  }

  ngOnInit() {
    this.userService.Get().subscribe(data => {
      console.log(data)
      this.users = data;
    });

  }
  AddItem() {
    this.NewUser = {Name:  this.username, Email: this.email , Company: this.company};
    this.userService.AddItem(this.NewUser);
  }
}
