import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GsapService } from 'src/service/gsap.service';
import Typed from 'typed.js';



@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {


  constructor(public gsap: GsapService) { }


  ngOnInit(){
    this.gsap.gsapAnimationHeadline();
  }
}










