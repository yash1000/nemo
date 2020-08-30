import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApicallService } from '../../services/apicall.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  inp: any = 'asas';
  modalRef: BsModalRef;
  profileForm: FormGroup;
  profileForm1: FormGroup;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
      $(element).css('padding-top', 120);
      $('#parent').css('padding-top', 7);
      // $('#parent').css('background-color', 'white');
      $('#parent').css('background-color', 'white');
      // $(element).find('li>a').css({'background-color': 'transparent !important'});
    } else {
      $(element).css('padding-top', 120);
      $('#parent').css({ 'background-color': 'transparent' });
      $('#parent').css('padding-top', 30);
    }
  }

  constructor(
    private router: Router,
    private eleref: ElementRef,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private api: ApicallService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      CompanyName: [],
      ContactPerson: [],
      ContactNumber: [],
      Email: [],
    });

    this.profileForm1 = this.fb.group({
      Name: [],
      ServiceArea: [],
      PhoneNumber: [],
      Email: [],
    });

    const element = this.eleref.nativeElement.querySelector('#header2');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }
  openModalWithClass1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  onSubmit(event) {
    console.log(this.profileForm.value);
    this.api.LendingPartner(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
  onSubmit1(event) {
    console.log(this.profileForm1.value);
    this.api
      .BuisnessServicePartner(this.profileForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
