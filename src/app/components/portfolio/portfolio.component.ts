import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/service/gsap.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public gsap: GsapService,) { }

  ngOnInit(): void {
    this.gsap.gsapPortfolioAnimation();
  }

}
