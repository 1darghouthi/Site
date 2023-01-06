import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:any;
  user: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserProfile(this.id).subscribe(
      (response)=>{
        this.user = response;
      }
    )
  }

}
