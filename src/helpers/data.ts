import { ClipboardIcon, HeartIcon, SparklesIcon, ArrowCircleLeftIcon } from '@heroicons/react/outline';
import { INavbarDashboard } from "../../types/interface";

export const ListSidebar: INavbarDashboard[] = [
    { name: 'Inicio', to: '/dashboard/main', HeartIcon: ArrowCircleLeftIcon },
    { name: 'Lista de deseos', to: '/dashboard/wishlist', HeartIcon: HeartIcon },
    { name: 'Pedidos', to: '/dashboard/order', HeartIcon: ClipboardIcon },
    { name: 'Perfil', to: '/dashboard/account', HeartIcon: SparklesIcon },
];