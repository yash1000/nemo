import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { PopupsComponent } from 'src/app/common/popups/popups.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    // const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PopupsComponent, {
      autoFocus: false
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  //   dialogConfig.position = {
  //     'top': '0',
  //     left: '0'
  // };
  }

}
