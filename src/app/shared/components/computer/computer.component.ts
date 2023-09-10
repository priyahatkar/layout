import { Component, OnInit } from '@angular/core';
import { Icomputer } from '../../models/allInterface';
import { ComputerService } from '../../services/computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {
  public compArray : Array<Icomputer> =[]
  constructor(private _compService : ComputerService) { }

  ngOnInit(): void {
    this.compArray = this._compService.getAllComputerApi()
  }
}
