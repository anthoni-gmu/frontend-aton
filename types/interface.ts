export interface IProduct {
    id:number,
    get_category: string;
    title: string;
    price: string;
    compare_price: string;
    photo: string;
    slug: string;
    quantity:number;
}


export interface IOrdenSumary{
    amount:number,
    isAuthenticated:boolean
}

export interface ICartItem{
    id:number,
    count:number,
    product:IProduct
}