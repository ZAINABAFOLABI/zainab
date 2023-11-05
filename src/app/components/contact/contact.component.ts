import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zainab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact(data:any){
    console.log("Contact form", data);

  }

}
