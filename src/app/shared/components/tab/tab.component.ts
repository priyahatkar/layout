import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/allInterface';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
    public tabArray : Array<Itab> =[]
  constructor(private _tabService : TabService) { }

  ngOnInit(): void {
    this.tabArray = this._tabService.getAllTabApi()
  }

}
