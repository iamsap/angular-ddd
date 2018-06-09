import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page, User } from './models';
import { UserRepository } from './repositories/user.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'app works!';
  page:Page;

  // Business logic in constructor
  /*
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.http.get<Page>('https://reqres.in/api/users')
              .subscribe((data: Page) => this.page = { ...data });
  } 
  */ 

  // Domain repository
  constructor(private repo:UserRepository) {
  }

  ngOnInit() {
    this.repo.getUsers()
      .subscribe((data: Page) => this.page = { ...data });
  } 

}
