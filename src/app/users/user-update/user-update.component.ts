import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/service/users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

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

selectUserUpdate(user:User){
  this.selectedUser = user;
}

}
