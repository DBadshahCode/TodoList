import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.scss']
})
export class CustomcardComponent {

  @Input() title: any;
  @Input() info: any;
  constructor() { }
}
