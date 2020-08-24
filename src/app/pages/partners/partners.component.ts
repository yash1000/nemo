import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 7);
    $('#parent').css('background-color', '#164ecc');
    $(element).find("li>a").css({"color": "white"});
    } else {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 30);
    $('#parent').css('background-color', 'transparent');
    $(element).find("li>a").css({"color": "white"});
    }
  }


  constructor( private eleref: ElementRef) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    $(element).find("li>a").css({"color": "white"});
  }

}
