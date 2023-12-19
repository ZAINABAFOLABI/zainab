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
investCriteria2 = 'I create negotiable and valuable user stories.';
investCriteria3 = 'I am precise with time estimate, small and testable user stories.'
moscowPrioritization1 = 'I use Trello and Jira labels to prioritize user stories.'
moscowPrioritization2 = 'I specify must have, should have, could have & will not have user stories in a sprint.'
moscowPrioritization3 = 'I update Trello and Jira labels to prioritize user stories in sprints.'
planningPoker3 = 'I complete my assigned tasks within the timeframe.';
planningPoker2 = 'I negotiate with my team to agree to a completion rate of user stories.';
planningPoker1 = 'I collaborate with my team members to predict a timeframe for user story completion.';
riskMgt3 = 'I track the risk burn down chart, comparing planned and actual software delivery timeline.';
riskMgt2 = 'I update the risk board in a timely manner.';
riskMgt1 = 'I develop strategic software risk management template plan, comprising risk approaches of accept, mitigate, transfer & avoid.';
backlog3 = 'I refine backlogs based on product delivery constraints in given sprints.';
backlog2 = 'I reprioritize user stories on the Trello board to address changing product needs.';
backlog1 = 'I curate smart backlog refinement during agile development using Trello & Jira.';
sprint1 = 'I excellently champion sprint planning sessions.';
sprint2 = 'I anchor daily stand up meetings to track team progress.';
sprint3 = 'I supervise sprint demo days, accurately ensuring delivered product feature compliance with acceptance criteria and definition of done.';

  constructor() { }

  ngOnInit(): void {
  }

}
