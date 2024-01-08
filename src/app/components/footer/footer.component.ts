import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'zainab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  CV = '../assets/documents/Omolola Zainab Afolabi CV.pdf';


  constructor() { }

  ngOnInit(): void {
  }

}
