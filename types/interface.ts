
export interface IProduct {
    id: number,
    get_category: string;
    title: string;
    price: string;
    compare_price: string;
    photo: string;
    slug: string;
    quantity: number;
}
export interface IProfile {
    id: number,
    enterprice: string;
    photo: string;
    city: string;
    address_line_1: string;
    address_line_2: string;
    district: string;
    zipcode: string;
    phone: string;
}
export interface IUser {
    id: number,
    email: string;
    first_name: string;
    last_name: string;
    get_full_name: string;
    get_short_name: string;
}

export interface IOrdenSumary {
    amount: number,
    isAuthenticated: boolean
}

export interface ICartItem {
    id: number,
    count: number,
    product: IProduct
}
export interface INavbarDashboard {
    name: string,
    to: string,
    HeartIcon(props: React.ComponentProps<'svg'>): JSX.Element
}