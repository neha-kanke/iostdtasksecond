import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from '../../modals/p';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
@Input() getdatformparent:Array<Iproducts>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
