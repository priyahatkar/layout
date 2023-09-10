import { Component, OnInit } from '@angular/core';
import { Ilaptop } from '../../models/allInterface';
import { LaptopService } from '../../services/laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  public lapArray : Array<Ilaptop> = [] 
  constructor(private _lapService: LaptopService) { }

  ngOnInit(): void {
    this.lapArray = this._lapService.getAllLaptopApi()
  }

}
