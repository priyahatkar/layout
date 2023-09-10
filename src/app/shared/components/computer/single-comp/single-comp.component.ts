import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Icomputer } from 'src/app/shared/models/allInterface';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';
import { ComputerService } from 'src/app/shared/services/computer.service';

@Component({
  selector: 'app-single-comp',
  templateUrl: './single-comp.component.html',
  styleUrls: ['./single-comp.component.scss']
})
export class SingleCompComponent implements OnInit {
  public compId !: number;
  public compInfo !: Icomputer;
  addId !: number;
  constructor(private _route : ActivatedRoute,
      private _compService : ComputerService,
      private _addItemsService : AddToCardService) { }

  ngOnInit(): void {
    this.compId = +this._route.snapshot.params['cId']
    console.log(this.compId);
    this.compInfo = this._compService.getSingleComputerApi(this.compId)
  }
  onAddNewProduct(){
    let obj : any ={
      name: this.compInfo.name,
      imgUrl: this.compInfo.imgUrl,
      details: this.compInfo.details,
      price: this.compInfo.price,
      cId: this.compInfo.cId,
      ram: this.compInfo.ram,
      rating: this.compInfo.rating,
      status: this.compInfo.status
    }
    this._addItemsService.getAddNewItemsApi(obj)
  }
}
