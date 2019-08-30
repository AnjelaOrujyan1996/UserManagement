import {Component, ContentChild, Inject, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IUserView} from "../../core/models/user.model";
import {Subscription} from "rxjs";
import {UsersListService} from "../../core/services/get-users-service/users-list.service";
import {GetAllRolesService} from  "../../core/services/get-all-roles-service/get-all-roles.service"
import {generateId} from  "./dinamicIdGenerator"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit,OnDestroy {
  public id = generateId();
  public roles:string[];
  public users: Array<IUserView>;
  public model:any = {}
  public userInit:IUserView;
  private subscription: Subscription;

  constructor(private translate: TranslateService, private UsersService:UsersListService, private GetAllRoles:GetAllRolesService, private modalService: NgbModal) {
    translate.setDefaultLang('en');
  }

  open(content) {
    this.modalService.open(content, {backdropClass: 'light-gray-backdrop'});
  }

  changeLanguage(ln){
    this.translate.use(ln);
  }

  ngOnInit() {
    this.subscription = this.UsersService.getUsers().subscribe((data)=>{
      this.users = data['users'];
      for(let key in this.users){
        this.users[key]["id"] = this.id()
      }
    })

    this.subscription = this.GetAllRoles.getAllRoles().subscribe((data)=>{
      this.roles = data['roles'];

    })
  }

  selectedRole(e, id){
    for(let i=0; i < this.users.length; ++i){
      if(this.users[i]["id"] === id){
        this.users[i]["role"] = e.target.value;
        break;
      }
    }

  }

  deleteUser(id){
    for(let i=0; i < this.users.length; ++i){
      if(this.users[i]["id"] === id){
        this.users.splice(i,1);
        break;
      }
    }
  }

  onSubmit(f, content) {
    let user = this.model;
    this.userInit = {
      'id': this.id(),
      'phone': user['phone'],
      'name': user['name'],
      'surname': user['surname'],
      'email': user['email'],
      'date': new Date(),
      'role': user['role']
    }

    this.users.push(this.userInit);
    // this.model={
    //   'phone':" ",
    //   'name': ' ',
    //   'surname':' ',
    //   'email': ' ',
    //   'role': ' '
    // };
    console.dir(f)
    f.resetForm();
    this.modalService.dismissAll(content)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
