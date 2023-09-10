import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itab } from 'src/app/shared/models/allInterface';
import { AddToCardService } from 'src/app/shared/services/add-to-card.service';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-single-tab',
  templateUrl: './single-tab.component.html',
  styleUrls: ['./single-tab.component.scss']
})
export class SingleTabComponent implements OnInit {
  public tabId !: number;
  public tabInfo !: Itab;
  constructor(private _route:ActivatedRoute, 
                private _tabService : TabService,
                private _addNewService :AddToCardService) { }

  ngOnInit(): void {
      this.tabId = +this._route.snapshot.params['tabId']
      this.tabInfo = this._tabService.getSingleTabApi(this.tabId)
      console.log(this.tabInfo);
      
  }
  
  onAddNewProduct(){
    let obj : any={
      name : this.tabInfo.name,
      imgUrl : this.tabInfo.imgUrl,
      tabId : this.tabInfo.tabId,
      rating : this.tabInfo.rating,
      price : this.tabInfo.price,
      details : this.tabInfo.details,
      status : this.tabInfo.status
    }
    this._addNewService.getAddNewItemsApi(obj)
  }
}
