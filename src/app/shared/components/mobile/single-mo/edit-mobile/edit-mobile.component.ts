import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImoStatus, Imobile } from 'src/app/shared/models/allInterface';
import { MobileService } from 'src/app/shared/services/mobile.service';

@Component({
  selector: 'app-edit-mobile',
  templateUrl: './edit-mobile.component.html',
  styleUrls: ['./edit-mobile.component.scss']
})
export class EditMobileComponent implements OnInit {
  public editMoObj !: Imobile;
  public editMoId !: number;
  public canEdit : boolean = false;
  constructor(private _route : ActivatedRoute, 
                private _mobileService : MobileService) { }

  ngOnInit(): void {
    this.editMoId = +this._route.snapshot.params['moId'];
    console.log( this.editMoId);
    this.editMoObj = this._mobileService.getSingleMoApi(this.editMoId)
    
    if(this._route.snapshot.queryParams['canEdit'] === 'Available'){
      this.canEdit = true;
    }
  }
  onUpdateMobile(moName : HTMLInputElement ,status : HTMLSelectElement){
    let obj : Imobile = {
      status : status .value as ImoStatus,
      name: moName.value,
      moId: this.editMoObj.moId,
      price: this.editMoObj.price,
      ram: this.editMoObj.ram,
      imgUrl: this.editMoObj.imgUrl,
      details: this.editMoObj.details,
      rating: this.editMoObj.rating
    }
    this._mobileService.getUpdatedMobile(obj)
  }
}
