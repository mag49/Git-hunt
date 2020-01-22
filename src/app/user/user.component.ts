import { Component, OnInit } from '@angular/core';
import {findService} from '../services/find.service';
import {Repository} from '../repository';
import {user} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class SearchComponent implements OnInit {
  public searchMe = 'mag49';
  public githubUser: string;

  users: any ;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: findService, public userRepos: findService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}


  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;

  }
}