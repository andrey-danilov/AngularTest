import {User} from '../user';
/*import {HttpClient} from '@angular/common/http';*/
export class UserService {

  /*constructor(private http: HttpClient) { }*/

  users:  User[] = [
    {name: 'John' , email: 'John@doe.com' , company: 'Alibaba'},
  ];


  AddItem(user:  User) {
    this.users.push(user);
  }

  // postData(user: User)  {
  //  const body = {name: user.name, company: user.company , email: user.email};
  // return this.http.post('someurl', body);
  // }
}
