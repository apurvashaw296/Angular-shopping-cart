import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {

  public productlist:any[]=[];
  constructor(private _productlistservice:ProductlistService, private router:Router) { }

  ngOnInit(): void {
    this.productlist=this._productlistservice.getProducts();
  }

  
  // flip: string = 'inactive';

  // details() {
  //   this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  // }

  data: CardData = {
    state: "default"
  };

  onSelect(det: { id: any; }){
    this.router.navigate(['/details',det.id])
  }
  // cardClicked() {
  //   const detail=true
  //   if (this.data.state === "default") {
  //     this.data.state = "flipped";
  //   } else {
  //     this.data.state = "default";
  //   }
  // }
}



export interface CardData {
  state: 'default' | 'flipped' | 'matched';
}
