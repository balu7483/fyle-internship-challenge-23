import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Profile } from './models/Profile';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(

  ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  

}