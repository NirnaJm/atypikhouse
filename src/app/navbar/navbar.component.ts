import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/service/users.service';
import { User } from '../users/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.user.subscribe(user => this.user = user);
  }

}
