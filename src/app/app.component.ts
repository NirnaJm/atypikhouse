import { Component } from '@angular/core';
import {UsersService} from  './shared/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fatypikhouse';

  constructor(protected usersService:UsersService){

  }
  ngOnInit():void{
    this.usersService.populate();
  }


}
