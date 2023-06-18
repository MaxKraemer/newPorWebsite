import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GsapService } from 'src/service/gsap.service';


@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  //change headline
  headlines = [

    'Hi, Im Max Kraemer Junior Front End Developer',
    'Fascinated of Coding',
    'Coding is the language of the future'

  ];

  constructor(public gsap: GsapService) { }

  //onload function 
  currentHeadlines = 0;
  showHeadline = true;

  ngOnInit(){
    this.gsap.gsapAnimationHeadline();
  }


  













}
