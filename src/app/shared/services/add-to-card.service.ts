import { Injectable } from '@angular/core';
import { IaddItems } from '../models/allInterface';
import { SanckBarService } from './sanck-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCardService {
  public addNewArray : Array<IaddItems>= []
  constructor(private _sanckBarService : SanckBarService) { }

  getAddNewItems(){
    return this.addNewArray;
  }

  getAddNewItemsApi(obj : IaddItems){
    this.addNewArray.push(obj)
    this._sanckBarService.openSnackBar(`Add to cart new ${obj.name} product`, 'Close')
  }
}
