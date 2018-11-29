import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUserView} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUserView[]> {
    return this.http.get<IUserView[]>('./assets/json/users.json');
  }
}
