import { Injectable } from '@angular/core';
import { Icomputer } from '../models/allInterface';
import { Route, Router } from '@angular/router';
import { SanckBarService } from './sanck-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  public computerArray: Array<Icomputer>=[
    {
      cId :1,
      name : 'Intel Core I3',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EqTBGjtESy4pwnp8eiG_lGfgnajfNaCrEg&usqp=CAU',
      ram : '500GB',
      price : 117030,
      rating : 3.5,
      status :'Available',
      details : 'BESTYLISH Intel Core i3 (2nd Generation) (8 GB RAM/NVIDIA GeForce GT 610 2GB DDR3 Graphics/3 TB Hard Disk/Windows 10 Pro (64-bit)/2 GB Graphics Memory) Mini Gaming Tower  (Core i3-2120 Processor | Flow-C2 | 2GB GT 610 Graphics | S/N : BHNP89GQSHNWZX)'
    },
    {
      cId :2,
      name : 'Celeron Quad Core',
      imgUrl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/r/w/o/gaming-computer-i7-2600-8gb-1tb-entwino-original-imagjnwhj68btb6w.jpeg?q=70',
      ram : '320GB',
      price :9999,
      rating :3.2,
      status :'Available',
      details:'ENTWINO Celeron Quad Core (4 GB / 320 GB / Windows 7 Home Premium) Assembled Desktop Computer  (15.4 inch Display)'
    },
    {
      cId:3,
      name : 'HP',
      imgUrl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/v/d/v/27-ca1142in-hp-original-imagnf8dfwejuxwj.jpeg?q=70',
      ram : '1TB',
      price :21990,
      rating :4.2,
      status :'OutOfStock',
      details:'HP 3JV39AA#ACJ Celeron Dual Core (4 GB DDR3/1 TB/Free DOS/19.45 Inch Screen/HP All-in- one PC 20 - c416il)  (Black)'
    },
    {
      cId: 4,
      name : 'Lenovo IdeaCentre AIO 3',
      imgUrl : 'https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/y/i/e/ideacentre-aio-3-lenovo-original-imaghqs6fgcwdjch.jpeg?q=70',
      ram : '8 GB ',
      price :51000,
      rating : 5,
      status : 'Available',
      details:'Lenovo IdeaCentre AIO 3 Core i3 (8 GB DDR4/Windows 11 Home/23.8 Inch Screen/IdeaCentre AIO 3)  (Black)'
    }
  ]
  constructor(private _router : Router, private _snackbarService : SanckBarService) { }
  getAllComputerApi(){
    return this.computerArray;
  }

  getSingleComputerApi(id: number){
    return this.computerArray.find(co =>co.cId === id)!
  }

  getUpdateComp(compObj : Icomputer){
    this.computerArray.forEach(comp =>{
      if(comp.cId === compObj.cId){
        comp.name = compObj.name;
        comp.status = compObj.status;
        this._router.navigate(['/computer'])
        this._snackbarService.openSnackBar(`Add to cart new ${comp.name} product`, 'Close')
      }
    })
  }
}
