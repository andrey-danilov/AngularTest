import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user';
import {forEach} from '@angular/router/src/utils/collection';
import {count} from 'rxjs/operators';
import {Log} from '../log';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  ngOnInit() {

  }

  /*constructor(private userService: UserService )  {  }

  users: User[];



  startDate = new Date(2018, 2, 2);
  endDate = new Date(2018, 8, 3);
  private Count: number;


  GenerationLogs() {
    this.userService.Get().subscribe(data => {
      this.users = data;
    });


   for (const u of this.users) {
     const UserLogsCount = this.getRandomInt(50, 500);
     this.Count =  0;
        while (UserLogsCount > 0 ) {
          const NewLog: Log = new Log(this.Count, u.Name, this.randomDate(this.startDate, this.endDate),
            'http',
            this.getRandomInt(100, 10995116277760));
          this.homeService.AddItem(NewLog);

          this.Count++;
        }
   }
  }

  randomDate(startDate: Date, endDate: Date) {
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  }


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }*/
}
