import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zainab-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  alphaAppDB= '../assets/images/Alphaapp dashboard.png ';
  salesUI = '../assets/images/SalesUI.png ';

  constructor() { }

  ngOnInit(): void {
  }

}
