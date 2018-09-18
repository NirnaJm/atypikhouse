import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../shared/service/users.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  user: User;

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

}
