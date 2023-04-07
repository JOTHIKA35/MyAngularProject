import { Component ,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
   @Input() all:number=0;
   @Input() above:number=0;
   @Input() below:number=0;

   selectedRadioButton:string='All';

   @Output()
   filterRadioButton:EventEmitter<string> = new EventEmitter<string>();

   onRadioButton(){
     this.filterRadioButton.emit(this.selectedRadioButton);
   }
}
