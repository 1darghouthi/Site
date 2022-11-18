import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  articles=[
    {id:1, title: "Title 1 ", description:"Description 1",date:"27/09/2022"},
    {id:2, title: "Title 2" , description:"Description 1",date:"27/09/2022"},
    {id:3, title: "Title 3" , description:"Description 1",date:"27/09/2022"},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
