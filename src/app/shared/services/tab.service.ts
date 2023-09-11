import { Injectable } from '@angular/core';
import { Itab } from '../models/allInterface';
import { Router } from '@angular/router';
import { SanckBarService } from './sanck-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  public tabArray : Array<Itab> =[
    {
      tabId : 1,
      name : 'Lenovo Tab',
      imgUrl : 'https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/4/n/0/zaae0008in-lenovo-original-imagzmkwqahk5yyb.jpeg?q=70',
      rating : '4',
      price : '13,990',
      status : 'Available',
      details : 'Lenovo Tab M10 FHD 3rd Gen 4 GB RAM 64 GB ROM 10.1 inch with Wi-Fi Only Tablet (Storm Grey)',
    },
    {
      tabId : 2,
      name : 'Realme Pad 2',
      imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/y/8/rmp2204-realme-original-imagrhcqdhdyc9tg.jpeg?q=70',
      rating : '4.5',
      price : '19,999',
      status : 'OutOfStock',
      details : 'realme Pad 2 6 GB RAM 128 GB ROM 11.5 inch with Wi-Fi+4G Tablet (Grey)',
    },
    {
      tabId : 3,
      name : 'REDMI Pad 4',
      imgUrl : 'https://rukminim2.flixcart.com/image/416/416/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70',
      rating : '4.4',
      price : '15,999',
      status : 'Available',
      details : 'REDMI Pad 4 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Graphite Gray)',
    },
    {
      tabId : 4,
      name : 'TCL Tab 10s',
      imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/e/e/p/-original-imagqjgp2haf2myw.jpeg?q=70',
      rating : '3.8',
      price : '8,999',
      status : 'OutOfStock',
      details : 'TCL Tab 10s 3 GB RAM 32 GB ROM 10.1 inches with Wi-Fi Only Tablet (Grey)',
    },
    {
      tabId : 5,
      name : 'SAMSUNG Galaxy Tab A8',
      imgUrl : 'https://rukminim2.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70',
      rating : '4.4',
      price : '13,499',
      status : 'Available',
      details : 'SAMSUNG Galaxy Tab A8 3 GB RAM 32 GB ROM 10.5 inch with Wi-Fi Only Tablet (Gray)',
    }
  ]
  constructor(private _router : Router,
    private _sanckbarService : SanckBarService) { }

  getAllTabApi(){
    return this.tabArray;
  }

  getSingleTabApi(id : number){
    return this.tabArray.find(tab => tab.tabId === id)!
  }

  getUpadatedTab(tabObj : Itab){
    this.tabArray.forEach(tab =>{
      if(tab.tabId === tabObj.tabId){
        tab.name = tabObj.name;
        tab.status = tabObj.status;
        tab.details = tabObj.details;
        tab.imgUrl = tabObj.imgUrl;
        tab.price = tabObj.price;
        tab.rating = tabObj.rating;
        this._router.navigate(['/tab'])
        this._sanckbarService.openSnackBar(`Add to cart new ${tab.name} product`, 'Close')
      }
    })
  }
}
