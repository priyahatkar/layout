import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/app/shared/models/allInterface';
import { MobileService } from 'src/app/shared/services/mobile.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';

@Component({
  selector: 'app-single-mo',
  templateUrl: './single-mo.component.html',
  styleUrls: ['./single-mo.component.scss']
})
export class SingleMoComponent implements OnInit {
  public mobileId !: number;
  public moInfo !: Imobile;
  public isAvailable = true;
  constructor(private _moService:MobileService, private _route : ActivatedRoute,
                private _addNewService : AddToCardService) { }


  ngOnInit(): void {
    this.mobileId =  +this._route.snapshot.params['moId'];
    console.log(this.mobileId);
    this.moInfo =this._moService.getSingleMoApi(this.mobileId)
  }
  onAddNewProduct(){
    let obj : any ={
      moId : this.mobileId,
      name : this.moInfo.name,
      price : this.moInfo.price,
      ram : this.moInfo.ram,
      imgUrl : this.moInfo.imgUrl,
      details : this.moInfo.details,
      rating : this.moInfo.rating,
      status : this.moInfo.status
    }
    this._addNewService.getAddNewItemsApi(obj)
  }
}
