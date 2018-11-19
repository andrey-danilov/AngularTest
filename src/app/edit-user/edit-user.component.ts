import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../user';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() user;
  constructor(private matDialogRef: MatDialogRef<EditUserComponent> ,
              @Inject(MAT_DIALOG_DATA) public data: any ,
              private  userService: UserService) { }

  ngOnInit() {
  }

  Edit(U: User) {
    console.log(U.id);
    console.log(U.Name);
    console.log(U.Company);
    console.log(U.Email);
    this.userService.Edit(U);
    this.matDialogRef.close();
  }

}
