import { Injectable } from '@angular/core';
import { Ilaptop } from '../models/allInterface';
import { Router } from '@angular/router';
import { SanckBarService } from './sanck-bar.service';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
public laptopArray : Array<Ilaptop> =[
  {
    lapId : 1,
    name :'Realme Book',
    rating:'4.7',
    price :'56999',
    details :'realme Book Prime Core i5 11320H 11th Gen - (16 GB/512 GB SSD/Windows 11 Home) CloudPro002 Thin and Light Laptop  (14 inch, Green, 1.37 kg, With MS Office)',
    imgUrl : 'https://rukminim2.flixcart.com/image/312/312/l1b1oy80/computer/x/r/s/book-prime-thin-and-light-laptop-realme-original-imagcwmcxdwr4rvh.jpeg?q=70',
    status : 'OutOfStock',
  },
{
  lapId : 2,
  name :'Lenovo IdeaPad 3',
  rating :'4.3',
  price : '44090',
  details : 'Lenovo IdeaPad 3 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15ALC6 Thin and Light Laptop  (36.62 cm, Arctic Grey, 1.65 kg, With MS Office)',
  imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/i/u/-original-imagpa5fbvqzk2xn.jpeg?q=70',
  status : 'Available',
},
{
  lapId : 3,
  name :'HP 247',
  rating : '3.7',
  price : '23790',
  details : 'HP 247 G8 Athlon Dual Core - (8 GB/1 TB HDD/Windows 11 Home) 247 G8 Notebook Notebook  (14 inch, Black)',
  imgUrl : 'https://rukminim2.flixcart.com/image/312/312/l0jwbrk0/computer/e/k/r/240-g8-laptop-hp-original-imagcbgcgnqwenzx.jpeg?q=70',
  status : 'Available',
},
{
  lapId : 4,
  name : 'DELL Ryzen 5 ',
  rating : '4',
  price : '73990',
  details : 'DELL Ryzen 5 Hexa Core AMD R5-6600H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/120 Hz) G15-5525 Gaming Laptop  (38 cm, Phantom Grey With Speckles, 2.51 Kg, With MS Office)',
  imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/p/f/x/-original-imaghzahmt9zphps.jpeg?q=70',
  status : 'OutOfStock',
},
{
  lapId : 5,
  name : 'MSI Core i7',
  rating : '5',
  price : '190990',
  details : 'MSI Core i7 13700H 13th Gen - (32 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4070) Vector GP77 13VG-055IN Gaming Laptop  (17.3 Inch, Black, 2.8 Kg)',
  imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/0/k/vector-gp77-13vg-055in-gaming-laptop-msi-original-imagmmhkwjhqgrue.jpeg?q=70',
  status : 'Available',
}
]
  constructor( private _router : Router,
    private _snackbarService : SanckBarService) { }

  getAllLaptopApi(){
    return this.laptopArray;
  }
  getSingleLaptopApi(id : number){
    return this.laptopArray.find(lap => lap.lapId === id)!
  }

  getUpdatedLaptop(editObj : Ilaptop){
    this.laptopArray.forEach(lap => {
      if(lap.lapId === editObj.lapId){
        lap.name = editObj.name;
        lap.status = editObj.status;
        this._router.navigate(['/laptop'])
        this._snackbarService.openSnackBar(`Add to cart new ${lap.name} product`, 'Close')
      }
    })
  }
}
