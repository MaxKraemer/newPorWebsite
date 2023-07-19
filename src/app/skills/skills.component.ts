import { Component, OnInit } from '@angular/core';
import {GsapService} from "../../service/gsap.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public gsap: GsapService) {}

  ngOnInit(): void {
    this.gsap.gsapSkillsAnimation();
  }

}
