import { Component, OnInit } from '@angular/core';
import {findService} from '../services/find.service';
import {Repository} from '../repository';
import {user} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
