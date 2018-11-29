import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetAllRolesService {

  constructor(private http: HttpClient) { }

  getAllRoles(){
    console.log("++++++++++++++++++++++++++++++++++++++++")
    return this.http.get('./assets/json/roles.json');
  }
}
