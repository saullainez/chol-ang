import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {

  public message: string;
  public type: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer
  ) { 
    iconRegistry.addSvgIcon(
      'error',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/close.svg'));
    const dataArr = data.split('|');
    this.message = dataArr[0];
    this.type = dataArr[1];

  }

  ngOnInit(): void {
  }

}
