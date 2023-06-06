import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

  //onload function 
  currentHeadlines = 0;
  showHeadline = true;

  ngOnInit(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('img', {
      scrollTrigger:{
        trigger: 'img',
      },
      y: -100,
    });
    gsap.from('h1', {
      scrollTrigger: 'h1',
      x: -100,
      smoothOrigin: true,
    });

  }


  













}
