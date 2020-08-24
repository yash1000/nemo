import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';
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

  constructor(private eleref: ElementRef) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    console.log(element);
  }

}
