import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.scss']
})
export class OurstoryComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 7);
    $('#parent').css('background-color', 'white');
    } else {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 30);
    }
  }

  constructor(private eleref: ElementRef,private router: Router) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
