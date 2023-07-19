import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/service/gsap.service';
import { DarkModeService } from 'src/service/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public gsap: GsapService, public darkMode: DarkModeService) { }

  public showImage = false;
  public status = 'Enable';

  ngOnInit(): void {
    this.gsap.gsapAnimationHeader();
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
    this.status = this.showImage ? 'Enable' : 'Disable';
  }
}
