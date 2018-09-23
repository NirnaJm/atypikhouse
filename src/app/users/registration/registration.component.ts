import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/service/users.service';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  msgError: string;
  user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router : Router
  ) { }

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
            photo_user: ['https://cdn.pixabay.com/photo/2015/06/08/14/50/sunset-801736_960_720.jpg'],
            last_name: ['', Validators.required],
            first_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],


        });

  }
  // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }



        this.userService.createUser(this.registerForm.value);
         console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.userService.getUsers()))

         event.preventDefault();
         let user = this.registerForm.value;
         this.userService
           .login(user.email, user.password)
           .subscribe((user:User) => {
            // this.router
            //   .navigate(['/']);
           }, err =>{
             this.msgError = 'Mot de passe ou email incorrect.';
           });
  }

}
