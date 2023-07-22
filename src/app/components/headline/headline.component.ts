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

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    const headlineOptions = {
      strings: ['Max Kraemer', 'Web Developer', 'future Scrum Master'],
      typeSpeed: 100,
      loop: true
    };

    new Typed(this.elementRef.nativeElement.querySelector('#name'), headlineOptions);
  }
  }















