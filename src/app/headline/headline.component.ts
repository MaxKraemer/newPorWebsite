import { Component, OnInit } from '@angular/core';


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

    this.showImages();

  }
  
  showImages() {
    
    setInterval(() => {

      this.currentHeadlines++;
      this.currentHeadlines = this.currentHeadlines % this.headlines.length;
      this.showHeadline = false;

      setInterval (() => {

        this.showHeadline = true;

      },400);

    },6000);


  }


  













}
