import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApicallService } from '../../services/apicall.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profileForm: FormGroup;
  modalRef: BsModalRef;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.eleref.nativeElement.querySelector('#header2');
    const numb = window.scrollY;
    if (numb >= 100) {
      $(element).css('padding-top', 120);
      $('#parent').css('padding-top', 7);
      $('#parent').css('background-color', 'white');
    } else {
      $(element).css('padding-top', 120);
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
      Name: [],
      Email: [],
      ContactNumber: [],
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
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  onSubmit(event) {
    console.log(this.profileForm.value);
    this.api.RequestDemo(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
