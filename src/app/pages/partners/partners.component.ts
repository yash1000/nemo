import { Component, OnInit, HostListener, ElementRef, TemplateRef } from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  modalRef: BsModalRef;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 7);
    $('#parent').css('background-color', '#164ecc');
    $(element).find('li>a').css({'color': 'white'});
    } else {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 30);
    $('#parent').css('background-color', 'transparent');
    $(element).find('li>a').css({'color': 'white'});
    }
  }


  constructor( private eleref: ElementRef, private modalService: BsModalService) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    $(element).find('li>a').css({'color': 'white'});
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'gray modal-md' }));
  }
  openModalWithClass1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'gray modal-lg' }));
  }
}
