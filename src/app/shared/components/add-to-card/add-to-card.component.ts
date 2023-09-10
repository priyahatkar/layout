import { Component, OnInit } from '@angular/core';
import { AddToCardService } from '../../services/add-to-card.service';
import { IaddItems } from '../../models/allInterface';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss']
})
export class AddToCardComponent implements OnInit {
  public addCardInfo!: Array<IaddItems>;
  constructor(private _addCardService : AddToCardService) { }

  ngOnInit(): void {
    this.addCardInfo = this._addCardService.getAddNewItems()
  }

}
