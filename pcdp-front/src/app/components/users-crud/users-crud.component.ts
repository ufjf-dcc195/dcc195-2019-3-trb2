import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {

  constructor( private userService: UserService) { }

  user: User = new User();

  ngOnInit() {
  }

  save() {
    console.log(this.user);
    this.userService.salvar(this.user).subscribe();
  }
}
