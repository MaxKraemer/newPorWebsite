import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('p', {
      scrollTrigger:{
        trigger: 'p',
      },
      y: -100,
    });
    gsap.from('h3', {
      scrollTrigger:{
        trigger: 'h3',
      },
      y: -100,
    });
  
  }

}
