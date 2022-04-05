import { ClipboardIcon, HeartIcon, ShoppingBagIcon, HomeIcon, UserIcon, ViewGridIcon, GlobeIcon, ScaleIcon } from '@heroicons/react/outline';
import { INavbarDashboard } from "../../types/interface";

export const ListSidebar: INavbarDashboard[] = [
    { name: 'Tienda', to: '/products', HeartIcon: ShoppingBagIcon },
    { name: 'Inicio', to: '/dashboard/main', HeartIcon: HomeIcon },
    { name: 'Lista de deseos', to: '/dashboard/wishlist', HeartIcon: HeartIcon },
    { name: 'Pedidos', to: '/dashboard/order', HeartIcon: ClipboardIcon },
    { name: 'Perfil', to: '/dashboard/account', HeartIcon: UserIcon },
];
export const ListNavbar: INavbarDashboard[] = [
    { name: 'Inicio', to: '/', HeartIcon: HomeIcon },
    { name: 'Tienda', to: '/products', HeartIcon: ShoppingBagIcon },
    { name: 'Categorias', to: '', HeartIcon: ViewGridIcon },
    { name: 'Nosotros', to: '', HeartIcon: GlobeIcon },
    { name: 'Políticas', to: '', HeartIcon: ScaleIcon },
];

