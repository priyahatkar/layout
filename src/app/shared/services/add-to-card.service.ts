import { Injectable } from '@angular/core';
import { IaddItems } from '../models/allInterface';

@Injectable({
  providedIn: 'root'
})
export class AddToCardService {
  public addNewArray : Array<IaddItems>= []
  constructor() { }

  getAddNewItems(){
    return this.addNewArray;
  }

  getAddNewItemsApi(obj : IaddItems){
    this.addNewArray.push(obj)
  }
}
