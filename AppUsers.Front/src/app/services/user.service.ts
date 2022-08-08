import { User } from './../models/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = `${environment.AppUsersApi}/User/`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
      .pipe(retry(1));
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}${id}`)
      .pipe(retry(1));
  }

  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user)
      .pipe(retry(1));
  }

  putUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + id, user)
      .pipe(retry(1));
  }

  DeleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.baseUrl}${id}`)
      .pipe(retry(1));
  }
}
