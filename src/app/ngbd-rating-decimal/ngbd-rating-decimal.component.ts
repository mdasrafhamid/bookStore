import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngbd-rating-decimal',
  templateUrl: './ngbd-rating-decimal.component.html',
  styleUrls: ['./ngbd-rating-decimal.component.css']
})
export class NgbdRatingDecimalComponent implements OnInit {

  @Input()
  currentRate: number;

  @Input()
  editable: boolean;

  constructor() { }

  ngOnInit() {
  }

  @Output() currentRateChange = new EventEmitter();

  change(newValue) {
    this.currentRate = newValue;
    this.currentRateChange.emit(newValue);
  }
}
