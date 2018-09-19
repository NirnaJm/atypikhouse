import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../shared/service/users.service';
import { User } from '../users/user';
import { LoginComponent } from '../users/login/login.component';


import { StorageService } from '../shared/service/mock/storage.service';

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

  deconnexionUser(){
        // console.log('jjoj');
    this.usersService.deconnexion();
  }

}
