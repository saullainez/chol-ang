import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  optionsautocomplete: any;

  constructor() { }

  ngOnInit(): void {
    
    this.optionsautocomplete = ['One', 'Two', 'Three', 'Four', 'Five'];
  }

  public GetValue(event: any, variable: string) {
    this[variable] = event;
    console.log(this[variable]);
  }

  public ValueKey(event: any, variable: string) {
    this[variable] = event.target.value;
  }

}
