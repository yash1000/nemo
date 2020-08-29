import { Component, OnInit, HostListener, ElementRef, TemplateRef } from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApicallService } from '../../services/apicall.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.scss']
})
export class GetintouchComponent implements OnInit {
  modalRef: BsModalRef;
  profileForm: FormGroup;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const numb = window.scrollY;
    const element = this.eleref.nativeElement.querySelector('#header2');
    if (numb >= 100) {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 7);
    $('#parent').css('background-color', 'white');
    } else {
    $(element).css('padding-top' , 120);
    $('#parent').css('padding-top', 30);
    }
  }
  constructor(private router: Router,private eleref: ElementRef, private modalService: BsModalService, private fb: FormBuilder, private api: ApicallService) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    // $(element).find('li>a').css({'color': 'black'});
    this.profileForm = this.fb.group({
      Name : ['', Validators.required],
      Organisation : [],
      ContactNumber : ['', Validators.required],
      Email : ['' , Validators.required],
      Message : ['' , Validators.required]
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'gray modal-md' }));
  }
  onSubmit(event) {
    console.log(this.profileForm.value);
    this.api.GetInTouch(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
