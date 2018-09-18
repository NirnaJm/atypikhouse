import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/service/users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;

    selectedUser:User;
    constructor(
      private usersService:UsersService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id_user');
    this.usersService.getUser(id)
    .subscribe(user => this.user = user);
  }

//   getUsers():void{
// this.usersService.getUsers().subscribe(users=>this.users=users);
// }

selectUserUpdate(user:User){
this.selectedUser = user;
}

}
