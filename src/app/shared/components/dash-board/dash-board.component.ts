import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  goToProducts(){
    this._router.navigate(['/products']);
  }
}
