import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  itemName1=""
  iN1=""
  itemName2=""
  iN2=""
  price1=""
  pr1=""
  price2=""
  pr2=""
  invoiceBtn:boolean=false;
  checkout:boolean=false;
  total:number;
  totBill:number;
  tax:number;
  // flag:boolean=true;

  constructor() { }                                                                                             

  onclick(){
    if(this.itemName1!=""&&this.itemName2!=""&&this.pr1!=""&&this.pr2!=""){
      this.invoiceBtn=true;
    }
    this.iN1=this.itemName1;
    this.iN2=this.itemName2;
    this.pr1="Price is :"+this.price1;
    this.pr2="Price of :"+this.price2;
    this.total= parseInt(this.price1) +parseInt (this.price2);
    
  }
  totalBill(){
    this.totBill=(this.total)+(0.18*this.total)
    this.tax=(this.total*0.18);
    this.checkout=true;

  }

  ngOnInit() {
  }

}
