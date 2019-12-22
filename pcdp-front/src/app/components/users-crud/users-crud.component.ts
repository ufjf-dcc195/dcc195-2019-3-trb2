import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {

  constructor() { }

  user: User = new User();

  ngOnInit() {
  }

  save() {
    
  }
}
