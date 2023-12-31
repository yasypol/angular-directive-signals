import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { User, SingleUserResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public http = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  constructor() { }

  getUserById (id: number): Observable<User> {
    return this.http.get<SingleUserResponse>(`${ this.baseUrl}/${ id}`)
      .pipe(
        map( response => response.data ),
      )

  }
}
