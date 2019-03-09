import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-intraction',
  templateUrl: './component-intraction.component.html',
  styleUrls: ['./component-intraction.component.css']
})
export class ComponentIntractionComponent implements OnInit {

  selectedRadioButtonValue:string = "All";

  @Input()
  All:number;

  @Input()
  Male:number;

  @Input()
  Female:number;


  @Output()
  onRadioButtonChange:EventEmitter<string> = new EventEmitter<string>();

  callRadioButtonChange()
  {
    this.onRadioButtonChange.emit(this.selectedRadioButtonValue)
  }

  constructor() { }

  ngOnInit() {
  }

}
