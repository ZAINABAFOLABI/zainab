import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zainab-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  alphaAppDB= '../assets/images/Alphaapp dashboard.png ';
  usecasediagramUI = '../assets/images/Usecasediagram.png';
  salesUI = '../assets/images/SalesUI.png ';
  loginUIDesign = '../assets/images/Login UI design 1.png';
 loginUIDesign2 = '../assets/images/Login UI design 2.png';
healthMaxUIDesign = '../assets/images/Health Max Landing Page.png';
healthMaxPackagesUI = '../assets/images/Health Max Packages.png';
designPrototypingUI = '../assets/images/Activity DiagramUI.jpg';
investCriteria1 = 'I specify user stories that are independent of one another.';
investCriteria2 = 'I creating negotiable and valuable user stories.';
investCriteria3 = 'I am precise with time estimate, small and testable user stories.'
moscowPrioritization1 = 'I use Trello and Jira labels to prioritize user stories.'
moscowPrioritization2 = 'I specify must have, should have, could have & will not have user stories in a sprint.'
moscowPrioritization3 = 'I use Trello and Jira labels to prioritize user stories.'
planningPoker3 = 'I complete my assigned tasks within the timeframe.';
planningPoker2 = 'I negotiate with my team to agree to a completion rate of user stories.';
planningPoker1 = 'I collaborate with my team members to predict a timeframe for user story completion.';
riskMgt3: any;
riskMgt2: any;
riskMgt1: any;
backlog3: any;
backlog2: any;
backlog1: any;

  constructor() { }

  ngOnInit(): void {
  }

}
