import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-carsearching',
  templateUrl: './carsearching.component.html',
  styleUrls: ['./carsearching.component.css']
})
export class CarsearchingComponent {

     cardetails:any=""
     brands:any=""
     constructor(private service:ProductsService){
     }
     ngOnInit() {
       this.service.cardetails().subscribe(data=>{
         this.cardetails=data;
         });
         this.service.brands().subscribe(data=>{
          this.brands=data;
          });
        }

        // getTotalCars(){
        //   return this.cardetails.length;
        // }
        // getHighPriceCars() {
        //   return this.cardetails.filter((carDetail: { price: number; }) => carDetail.price >= 5000).length;
        // }
        // getLowPriceCars() {
        //   return this.cardetails.filter((carDetail: { price: number; }) => carDetail.price < 5000).length;
        // }


        // carscountRadioButton:string='All';

        // onRadioButton(data:string){
        //      this.carscountRadioButton= data;
        // }
     searchText:string='';

     onsearchtextEntered(searchValue:string){
       this.searchText=searchValue;

     }
}
