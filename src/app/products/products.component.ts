import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Store } from '../models/store';
import { Iproducts } from '../models/iproducts'
import { Catdata } from '../models/catdata';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnChanges {
  storeInfClass : Store;
  productlist:Iproducts[]
 datenow:Date = new Date();

//category
 productListCat:Iproducts[] = [];
 @Input() receivedCatId:number = 0;
 @Output() allCatData:EventEmitter<any>;
 totalPrice:number = 0;
 @Output() totalPriceChanged:EventEmitter<number>;
 catData:Catdata[]=[];
  constructor() { 
    this.allCatData= new EventEmitter<any>();
    this.totalPriceChanged= new EventEmitter<number>();
    this.storeInfClass = new Store('ITI store' ,["mansoura" , "smart" , "Alex"],'../../assets/1.jpg')
    this.productlist=[
      {ID:1, Name:"samsung",Quantity:0, Price:400,Img:'../../assets/1.jpg',CategoryID:3},
      {ID:2, Name:"iphone",Quantity:1,Price:500,Img:'../../assets/1.jpg',CategoryID:2},
      {ID:3, Name:"hawawy",Quantity:0, Price:600,Img:'../../assets/1.jpg',CategoryID:1},
      {ID:4, Name:"nokia",Quantity:4, Price:700,Img:'../../assets/1.jpg',CategoryID:1},
      {ID:5, Name:"lenovo",Quantity:2, Price:800,Img:'../../assets/1.jpg',CategoryID:2},
      {ID:6, Name:"toshepa",Quantity:1,Price:900,Img:'../../assets/1.jpg',CategoryID:3}

    ]
  }


  image:boolean=true;
  msg:boolean=false;
  toggle(){
    this.image=!this.image;
    this.msg=!this.msg;
  }

  increaseQuantity(item:Iproducts ,itemcount:any){
    return item.Quantity-=itemcount;
  }

  ngOnChanges(): void {
    this.getProductOfCat();
  }


  ngOnInit(): void {
  }

  private getProductOfCat(){
    if(this.receivedCatId == 0){
      this.productListCat = Array.from(this.productlist)
      return;
    }

    this.productListCat = this.productlist.filter((item)=>
      item.CategoryID == this.receivedCatId
    )
  }

  getcatdata(name:string,price:number,count:any){
    this.catData.push({Name:name ,Price:price,Count:count})
    this.allCatData.emit(this.catData)

  }

  updateTotalPrice(itemPrice:number , itemCount:any){

    this.totalPrice += (itemPrice*+itemCount);
    this.totalPriceChanged.emit(this.totalPrice);
  }



}
