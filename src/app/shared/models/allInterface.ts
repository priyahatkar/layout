


export interface Imobile {
    moId : number;
    name: string;
    price: number;
    ram: string;
    imgUrl : string;
    details : string;
    rating : number;
    status : ImoStatus
}

export type ImoStatus = 'Available' | 'OutOfStock'



export interface Icomputer{
    cId: number;
    name: string;
    imgUrl: string;
    ram: string;
    price: number;
    rating: number;
    details: string;
    status : IcompStatus
}

export type IcompStatus = 'Available' | 'OutOfStock'

export interface Ilaptop{
    lapId: number;
    name: string;
    rating: string;
    price: string;
    details: string;
    imgUrl: string;
    status : IlapStatus
}
export type IlapStatus = 'Available' | 'OutOfStock'

export interface Itab{
    tabId: number;
    name: string;
    imgUrl: string;
    rating: string;
    price: string;
    details: string;
    status :ItabStatus;
}

export type ItabStatus = 'Available' | 'OutOfStock'


export interface IaddItems{
    addId: number;
    name: string;
    imgUrl: string;
    ram: string;
    price: number;
    rating: number;
    details: string;
    status : IaddStatus
}

export type IaddStatus = 'Available' | 'OutOfStock'