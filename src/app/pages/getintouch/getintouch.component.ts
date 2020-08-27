import { Component, OnInit, HostListener, ElementRef, TemplateRef } from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.scss']
})
export class GetintouchComponent implements OnInit {
  modalRef: BsModalRef;
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
  constructor(private eleref: ElementRef, private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'gray modal-md' }));
  }
}
