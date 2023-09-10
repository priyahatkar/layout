import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ilaptop } from 'src/app/shared/models/allInterface';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';
import { LaptopService } from 'src/app/shared/services/laptop.service';

@Component({
  selector: 'app-single-lap',
  templateUrl: './single-lap.component.html',
  styleUrls: ['./single-lap.component.scss']
})
export class SingleLapComponent implements OnInit {
  public laptopId !:number;
  public lapInfo !: Ilaptop;
  constructor(private _route : ActivatedRoute, 
                private _laptopService : LaptopService,
                private _addNewService : AddToCardService) { }

  ngOnInit(): void {
    this.laptopId = +this._route.snapshot.params['lapId']
    console.log(this.laptopId);
    this.lapInfo = this._laptopService.getSingleLaptopApi(this.laptopId)
    
  }
  
  onAddNewProduct(){
    let obj : any={
      lapId : this.lapInfo,
      name : this.lapInfo.name,
      rating: this.lapInfo.rating,
      price : this.lapInfo.price,
      details : this.lapInfo.details,
      imgUrl : this.lapInfo.imgUrl,
      status : this.lapInfo.status
    }
    this._addNewService.getAddNewItemsApi(obj)
  }
}
