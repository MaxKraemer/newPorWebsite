import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  public gsapAnimation(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('a', {
      opacity: 0,
      stagger: 0.2,
    });
  };
 
}
