import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('header', {
      scrollTrigger: 'header',
      duration: 0.5,
      opacity: 0,
      stagger: 0.5,
      y: -100,
    });
  }


  public showImage = false;
  public status = 'Enable'; 


  public toggleImage(): void {
    this.showImage = !this.showImage;
    this.status = this.showImage ? 'Enable' : 'Disable';
  }

  showMenu(){
      document.getElementById('menu')?.classList.remove('d-none');
  }
  closeMenu(){
      document.getElementById('menu')?.classList.add('d-none');
  }



  

}
