import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-xpert',
  templateUrl: './xpert.component.html',
  styleUrls: ['./xpert.component.scss']
})
export class XpertComponent implements OnInit {
  formopen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 7);
    $('#parent').css('background-color', 'white');
    $(element).find("li>a").css({"color": "black"});
    } else {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 30);
    $('#parent').css('background-color', 'transparent');
    $(element).find("li>a").css({"color": "black"});
    }
  }
  constructor(private eleref: ElementRef) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    $(element).find("li>a").css({"color": "black"});
  }
  form(){
    this.formopen = true;
  }
}
