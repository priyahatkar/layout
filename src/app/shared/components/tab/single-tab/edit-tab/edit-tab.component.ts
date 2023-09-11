import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itab, ItabStatus } from 'src/app/shared/models/allInterface';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-edit-tab',
  templateUrl: './edit-tab.component.html',
  styleUrls: ['./edit-tab.component.scss']
})
export class EditTabComponent implements OnInit {
  public tId !: number;
  public tabInfo !: Itab;
  public canEdit : boolean =false;
  constructor(private _tabService : TabService,
                private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tId = +this._route.snapshot.params['tabId']
    // console.log( this.tId);
    this.tabInfo = this._tabService.getSingleTabApi(this.tId)
    // console.log( this.tabInfo);
    
    // console.log(this._route.snapshot.queryParams['canEdit']);
    
    if(this._route.snapshot.queryParams['canEdit']=== 'Available'){
      this.canEdit = true;
    }
  }
  
  onUpdateTab(tabName : HTMLInputElement,status : HTMLSelectElement){
    let obj : Itab ={
      tabId: this.tId,
      name:tabName.value,
      imgUrl: this.tabInfo.imgUrl,
      rating: this.tabInfo.rating,
      price: this.tabInfo.price,
      details: this.tabInfo.details,
      status: status.value as ItabStatus
    }
    this._tabService.getUpadatedTab(obj)
    console.log( this._tabService.getUpadatedTab(obj));
    
  }
}
