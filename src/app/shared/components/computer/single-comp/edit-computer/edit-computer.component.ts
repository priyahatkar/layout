import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IcompStatus, Icomputer } from 'src/app/shared/models/allInterface';
import { ComputerService } from 'src/app/shared/services/computer.service';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.scss']
})
export class EditComputerComponent implements OnInit {
    public editCompObj !: Icomputer;
    public editCompId !:number;
    public canEdit :boolean = false;
  constructor(private _route : ActivatedRoute,
                private _computerService : ComputerService) { }

  ngOnInit(): void {
    this.editCompId = +this._route.snapshot.params['cId'];
    this.editCompObj = this._computerService.getSingleComputerApi(this.editCompId)

    if(this._route.snapshot.queryParams['canEdit']=== 'Available'){
      this.canEdit = true;
    }
  }

  onUpdateProduct(pName:HTMLInputElement ,status : HTMLSelectElement){
    let obj : Icomputer = {
      name : pName.value,
      status :status.value as IcompStatus,
      imgUrl : this.editCompObj.imgUrl,
      ram : this.editCompObj.ram,
      price : this.editCompObj.price,
      rating : this.editCompObj.rating,
      details : this.editCompObj.details,
      cId : this.editCompId
    }
    this._computerService.getUpdateComp(obj)
  }
}
