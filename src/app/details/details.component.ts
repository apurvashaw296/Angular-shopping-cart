import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public productlist:any[]=[];
  public detailId: any;
  constructor(private _productlistservice:ProductlistService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productlist=this._productlistservice.getProducts()

    let id=parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.detailId=id;
  }

}
