import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.scss']
})
export class GetintouchComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 7);
    $('#parent').css('background-color', 'white');
    $(element).find('li').css({color: 'red !important'});
    } else {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 30);
    }
  } 
  constructor(private eleref: ElementRef) { }

  ngOnInit(): void {
  }

}
