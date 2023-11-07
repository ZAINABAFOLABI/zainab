import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zainab-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  angularLogo = '../assets/images/Angular_full_color_logo.svg.png';
  pythonLogo = '../assets/images/python logo.svg';
  javascriptLogo = '../assets/images/JavaScript-logo.png';
  dotNetLogo = '../assets/images/Microsoft.net.png';

  constructor() { }

  ngOnInit(): void {
  }

}
