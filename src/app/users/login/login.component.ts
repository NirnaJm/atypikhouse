import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/service/users.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  msgError: string;

  constructor(
    protected userService:UsersService,
    protected router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit($event) {
    event.preventDefault();
    this.userService.login(this.user.email, this.user.password).subscribe((user:User) => {
    this.router.navigate(['/']);
  }, err =>{
    this.msgError = 'Mot de passe ou email incorrect.';
  });
  }

}
