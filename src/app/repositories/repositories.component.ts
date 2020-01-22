import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

  repository: any;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;
      this.getDataFunction();

  }

  constructor(public gitRepoRequest: FindService ) { }

ngOnInit() {
      this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
}


    getDataFunction() {
        this.gitRepoRequest.gitRepos(this.searchRepo);

    }


}
