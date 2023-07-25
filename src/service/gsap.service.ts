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
      stagger: 0.5,
    });
    gsap.from('#starWarsImg', {
      opacity: 0,
      stagger: 0.5,
      x: 100,
      duration: 1.5,
    });
    gsap.from('#burger-menu', {
      opacity: 0,
      stagger: 0.5,
      x: 100,
      duration: 1.5,
    });
    gsap.from('#logo', {
      opacity: 0,
      stagger: 0.5,
      x: -100,
      duration: 1.5,
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
    gsap.from('#headline', {
      opacity: 0,
      stagger: 0.10,
      y: -100,
      duration: 1.3,
    });
    gsap.from('#name', {
      x: 100,
      stagger: 0.8,
      duration: 1.5,
    });
    gsap.from('#content', {
      opacity: 0,
      y: 100,
      stagger: 0.11,
      duration: 1.8,
    });
  };

  public gsapSkillsAnimation(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('#skill-image', {
      duration: 1.5,
      opacity: 0,
      x: -100,
        scrollTrigger: {
          trigger: '#skills',
          start: 'left center',
        },
    });
    gsap.from('#skill-images', {
      duration: 1.5,
      opacity: 0,
      x: 100,
        scrollTrigger: {
          trigger: '#skills',
          start: 'left center',
        },
    });
    gsap.from('#skill-name', {
      duration: 1.5,
      opacity: 0,
      y: 100,
       scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
      },
    });
  }

  public gsapPortfolioAnimation(){
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    gsap.from('#port-img', {
      duration: 1.5,
      opacity: 0,
      x: -100,
        scrollTrigger: {
          trigger: '#portfolio',
          start: 'left center',
        },
    });
    gsap.from('#port-text', {
      duration: 1.5,
      opacity: 0,
      x: 100,
        scrollTrigger: {
          trigger: '#portfolio',
          start: 'left center',
        },
    });
    gsap.from('#port-weather-img', {
      duration: 1.5,
      opacity: 0,
      x: 100,
        scrollTrigger: {
          trigger: '#portfolio',
          start: 'left center',
        },
    });
    gsap.from('#port-weather-text', {
      duration: 1.5,
      opacity: 0,
      x: -100,
        scrollTrigger: {
          trigger: '#portfolio',
          start: 'left center',
        },
    });
  

  }
}
