import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupsComponent } from 'src/app/common/popups/popups.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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


  constructor(public dialog: MatDialog, private eleref: ElementRef) { }

  ngOnInit(): void {
    const element = this.eleref.nativeElement.querySelector('#header2');
    $(element).find("li>a").css({"color": "white"});
  }
  // openDialog(): void {
  //  this.dialog.open(PopupsComponent, {
  //     autoFocus: false,
  //   });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  //   dialogConfig.position = {
  //     'top': '0',
  //     left: '0'
  // };
  }

