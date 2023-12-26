import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Omolola Zainab Afolabi - Senior Frontend developer '


  constructor(private metaTagService:Meta,
    private titleService:Title) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Angular developer,Frontend engineer, Frontend web development, software development'},
      {name: 'author', content: 'Omolola Zainab Afolabi'},
      {name: 'robots', content: 'index, follow'},
      {name: 'viewport', content: 'width-device-width, initial-scale=1'},
      {name: 'date', content: '2023-12-26', scheme:'YYYY-MM-DD'},
      {charset: 'UTF-8'}
    ]);
    this.titleService.setTitle(this.title);
  }

}
