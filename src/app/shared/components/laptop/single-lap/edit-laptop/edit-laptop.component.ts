import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IlapStatus, Ilaptop } from 'src/app/shared/models/allInterface';
import { LaptopService } from 'src/app/shared/services/laptop.service';

@Component({
  selector: 'app-edit-laptop',
  templateUrl: './edit-laptop.component.html',
  styleUrls: ['./edit-laptop.component.scss']
})
export class EditLaptopComponent implements OnInit {
    public lapId !: number;
    public lapInfo !: Ilaptop;
    public canEdit : boolean = false;
  constructor(private _route : ActivatedRoute, private _editService : LaptopService) { }

  ngOnInit(): void {
    this.lapId = +this._route.snapshot.params['lapId'];
    console.log(this.lapId);
    this.lapInfo = this._editService.getSingleLaptopApi(this.lapId)
    console.log(this.lapInfo);

    if(this._route.snapshot.queryParams['canEdit']=== 'Available'){
      this.canEdit = true;
    }
  }

  onUpdateLaptop(pName : HTMLInputElement,status : HTMLSelectElement){
    let obj : Ilaptop = {
      name : pName.value,
      rating : this.lapInfo.rating,
      price : this.lapInfo.price,
      details : this.lapInfo.details,
      imgUrl : this.lapInfo.imgUrl,
      status : status.value as IlapStatus,
      lapId : this.lapId
    }
    this._editService.getUpdatedLaptop(obj)
  }
}
