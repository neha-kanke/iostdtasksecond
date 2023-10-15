import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iproducts} from './shared/modals/p';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'iostdtasksecond';
  productarray:Array<Iproducts>=[
    {
    ptitle:"sumsang mobile",
    dproduct:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
    pcategary:"product"
  },
  {
    ptitle:"sumsang mobile",
    dproduct:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
    pcategary:"catalog"
  },

];
@ViewChild("producttitle")producttitle !:ElementRef;
@ViewChild("dproduct")dproduct!:ElementRef



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
  onprodcutadd(catg:"product" | "catalog"){
    if(this.producttitle.nativeElement.value.length >0 && this.dproduct.nativeElement.value.length>0){
      let obj:Iproducts={
        ptitle:this.producttitle.nativeElement.value,
        dproduct:this.dproduct.nativeElement.value,
        pcategary:catg
      }
      this.producttitle.nativeElement.value="",
      this.dproduct.nativeElement.value=""
      this.productarray.push(obj);

   
  }else{
     return
  }
}

 }








