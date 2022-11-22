import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles = [
    {id:1, date: "28/09/2022", title: "Title 1", description: "Description 1", img: "assets/images/bg_1.jpg"},
     {id:2, date: "28/09/2022", title: "Title 1", description: "Description 1", img: "assets/images/bg_1.jpg"},
     {id:2, date: "28/09/2022", title: "Title 1", description: "Description 1", img: "assets/images/bg_1.jpg"},
     {id:2, date: "28/09/2022", title: "Title 1", description: "Description 1", img: "assets/images/bg_1.jpg"}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
