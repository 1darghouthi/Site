import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users: any = [];

  constructor(
    private userService:UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      (response)=> {
        this.users= response;
      }
    )
  }

  goToProfile(id){
    this.router.navigate([`profile/${id}`]);
  }

}
