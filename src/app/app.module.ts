import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetUserComponent } from './Components/get-user/get-user.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { ShowRepoComponent } from './Components/show-repo/show-repo.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from './services/api.service';
NgxPaginationModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowRepoComponent,
    GetUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
