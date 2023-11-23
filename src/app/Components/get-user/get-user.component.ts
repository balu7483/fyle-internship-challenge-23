import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent {
  userName!: string;
  @Output() submitUser: EventEmitter<string> = new EventEmitter();

  constructor(){
    this.userName='';
  }
  onSubmitUserName() {
    const userName = this.userName;
    this.submitUser.emit(userName);
  }
}
