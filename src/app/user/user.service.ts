import {User} from '../user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  Get(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/Users');
  }

  AddItem(user:  User)  {
    return this.http.post('http://localhost:3000/Users/', user).subscribe((res: Response)  => console.log(res));
  }

  Delete(user: User)  {
    this.http.delete('http://localhost:3000/Users/' + user.id).subscribe((res: Response)  => console.log(res));
  }

  Edit(user: User) {
    this.http.put('http://localhost:3000/Users/' + user.id , user).subscribe((res: Response)  => console.log(res));
  }

}
