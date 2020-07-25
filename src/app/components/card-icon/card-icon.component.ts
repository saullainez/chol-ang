import { Component, OnInit, Input } from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent implements OnInit {
  media$: Observable<MediaChange[]>;
  @Input() count : number;
  @Input() title : string;
  @Input() icon : string;
  @Input() iconBackground : string;

  constructor(
    media: MediaObserver
  ) { 
    this.media$ = media.asObservable();
  }

  ngOnInit(): void {
  }

}
