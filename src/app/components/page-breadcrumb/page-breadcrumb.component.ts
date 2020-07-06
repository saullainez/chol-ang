import { Component, OnInit, Input } from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';
import  { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-page-breadcrumb',
  templateUrl: './page-breadcrumb.component.html',
  styleUrls: ['./page-breadcrumb.component.scss']
})
export class PageBreadcrumbComponent implements OnInit {
  media$: Observable<MediaChange[]>;
  @Input() title : string;
  module : string;

  constructor(
    media: MediaObserver,
    private storageService: StorageService
  ) {
    this.media$ = media.asObservable();
   }

  ngOnInit(): void {
    this.module = this.storageService.getCurrentModuleDesc();
  }

}
