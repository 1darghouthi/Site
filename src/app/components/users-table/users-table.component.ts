import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  id:any;

  users: any = [];

  constructor(
    private userService:UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response)=> {
        this.users= response.users;
      }
    )
  }

  goToProfile(id){
    this.router.navigate([`profile/${id}`]);
  }

  goToDelete(id: number) {
    this.userService.deleteUser(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        this.userService.getAllUsers().subscribe(
          (response) => {
            this.users = response.users;
          }
        )
      }
    )

  }
}
