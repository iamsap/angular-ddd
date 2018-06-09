import { Injectable } from '@angular/core';
import { ObserveOnMessage } from 'rxjs/operators/observeOn';
import { Page, User } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserRepository {
  constructor(private http:HttpClient) { 
  }

  getUsers():Observable<Page> {
    return this.http.get<Page>('https://reqres.in/api/users');
  }
}