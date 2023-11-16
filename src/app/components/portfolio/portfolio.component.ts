import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zainab-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  alphaAppDB= '../assets/images/Alphaapp dashboard.png ';
  salesUI = '../assets/images/SalesUI.png ';
  loginUIDesign = '../assets/images/Login UI design 1.png';
 loginUIDesign2 = '../assets/images/Login UI design 2.png';
healthMaxUIDesign = '../assets/images/Health Max Landing Page.png';
healthMaxPackagesUI = '../assets/images/Health Max Packages.png';

  constructor() { }

  ngOnInit(): void {
  }

}
