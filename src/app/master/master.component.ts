import { Component, OnInit } from '@angular/core';
import { Catdata } from '../models/catdata';
import { Icategory } from '../models/icategory';



@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  catlist:Icategory[];
  catselcted:number=0;
  catrecived:Catdata[]=[];
  price:number=0;


  constructor() {
    this.catlist=[{ID:1,Name:'laptop'},
    {ID:2,Name:'mobile'},
    {ID:3,Name:'TV'}
  ]
   }

  ngOnInit(): void {
  }

  Retdata(Catdata:any){
    this.catrecived=Catdata
  }

  onTotalPriceChanged(totalPrice:number){
    console.log(totalPrice);
    this.price = totalPrice;
  }

}
