import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApicallService } from '../../services/apicall.service';
@Component({
  selector: 'app-xpert',
  templateUrl: './xpert.component.html',
  styleUrls: ['./xpert.component.scss']
})
export class XpertComponent implements OnInit {
  formopen: boolean = false;
  profileForm: FormGroup;

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
  constructor(private eleref: ElementRef,private fb: FormBuilder, private api: ApicallService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      Name : [],
      Email : [],
      ContactNumber : [],
      Problem : []
    });
    const element = this.eleref.nativeElement.querySelector('#header2');
    $(element).find("li>a").css({"color": "black"});
  }
  form(){
    this.formopen = true;
  }
  onSubmit(abc){
    console.log(this.profileForm.value);
    this.api.TalkToExpert(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
      this.profileForm.reset();
    });
  }
}
