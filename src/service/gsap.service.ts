import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  public gsapAnimationHeader(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('a', {
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from('#toogle', {
      opacity: 0,
      x: 100
    });
    gsap.from('#logo', {
      opacity: 0,
      y: -100,
    });
  };

  public gsapScrollAbout(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('#img', {
      duration: 1.5,
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: '#aboutContainer',
        start: 'top center',
      },
    });
    gsap.from('#textArea', {
      duration: 1.5,
      opacity: 0,
      y: 100,
       scrollTrigger: {
        trigger: '#aboutContainer',
        start: 'top center',
      },
    });
    gsap.from('#textBox', {
      duration: 1.5,
      opacity: 0,
      y: -100,
       scrollTrigger: {
        trigger: '#aboutContainer',
        start: 'top center',
      },
    });
  };
  public gsapAnimationHeadline(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('h1', {
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from('span', {
      opacity: 0,
      x: -100
    });
  };

}
