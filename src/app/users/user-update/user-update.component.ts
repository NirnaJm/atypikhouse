import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../shared/service/users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  updateUserForm: FormGroup;
  submitted = false;
  msgError: string;
  user: User;

  selectedUser:User;
  constructor(
    private usersService:UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  // get f() { return this.updateUserForm.controls; }

    onSubmit() {
        // this.submitted = true;
        //
        // // stop here if form is invalid
        // if (this.updateUserForm.invalid) {
        //     return;
        // }
        // this.usersService.createUser(this.updateUserForm.value);
        //  console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.usersService.getUsers()))


  }

  getUser(): void {
  const id = +this.route.snapshot.paramMap.get('id_user');
  this.usersService.getUser(id)
  .subscribe(user => this.user = user);
}

selectUserUpdate(user:User){
  this.selectedUser = user;
}

goBack(): void {
    this.location.back();
  }

// save(): void {
//    this.usersService.updateUser(this.user)
//      .subscribe(() => this.goBack());
//  }

}
