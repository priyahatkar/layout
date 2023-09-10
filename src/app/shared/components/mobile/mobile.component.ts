import { Component, OnInit } from '@angular/core';
import { MobileService } from '../../services/mobile.service';
import { Imobile } from '../../models/allInterface';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  public moArray : Array<Imobile> = []
  constructor(private _moservice: MobileService) { }

  ngOnInit(): void {
    this.moArray = this._moservice.getAllMobilesApi()
    console.log(this.moArray);
    
  }

}
