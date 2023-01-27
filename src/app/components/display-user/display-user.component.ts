import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  X : any = [] ;
  id: any ;
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    // Get ID from path
  //   this.id = this.activatedRoute.snapshot.paramMap.get('id');
  //   //  Call Match Service to send request to get object by ID
  //   this.userService.getUserById(this.id).subscribe(
  //     (response) => {
  //       // response : Array of objects
  //       this.X = response.user ;

  //     }
  //   );
  }
}
