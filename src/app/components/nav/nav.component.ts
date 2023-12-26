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
  angularmateriallogo = '../assets/images/angular material logo.png';
  UoBlogo = '../assets/images/UoBrating.webp';
  UoBcrest = '../assets/images/UoBcrest.png';
  ngrxlogo = '../assets/images/ngrx logo.png';
  javalogo = '../assets/images/javalogo.png';
  trellologo = '../assets/images/Trellologo.jpeg';
  flasklogo = '../assets/images/Flasklogo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
