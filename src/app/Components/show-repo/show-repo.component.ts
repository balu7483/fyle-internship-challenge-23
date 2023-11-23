import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-repo',
  templateUrl: './show-repo.component.html',
  styleUrls: ['./show-repo.component.scss']
})
export class ShowRepoComponent  implements OnInit{
  @Input() profile!: Profile;
  @Output() per_page!: number;
  @Output() page!: number;
  @Output() gotoPreviousPage: EventEmitter<number> = new EventEmitter();
  @Output() gotoNextPage: EventEmitter<number> = new EventEmitter();
  ngOnInit(): void {
    
  }

  constructor(private apiService: ApiService) {
    this.per_page = 10;
    this.page = 1;

    this.profile = {
      avatar_url: '',
      name: '',
      login: '',
      bio: '',
      html_url: '',
      public_repos: 0,
      twitter_username: '',
      repos_url: '',
      repos: [],
    };
  }

}
