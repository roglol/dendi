import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Paylix Club', icon: Box, type: 'sub', active: false, children: [
            { path: '/paylixclub/product/product-list', title: 'Product List', type: 'link' },
            { path: '/paylixclub/product/category', title: 'Category List', type: 'link' },
            { path: '/paylixclub/product/store', title: 'Store List', type: 'link' },
            // {
            //     title: 'Physical', type: 'sub', active: false, children: [
            //         { path: '/paylixclub/product/category', title: 'Category', type: 'link' },
            //         { path: '/paylixclub/product/sub-category', title: 'Sub Category', type: 'link' },
            //         { path: '/paylixclub/product/product-list', title: 'Product List', type: 'link' },
            //         { path: '/paylixclub/product/product-detail', title: 'Product Detail', type: 'link' },
            //         { path: '/paylixclub/product/add-product', title: 'Add Product', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'digital', type: 'sub', active: false, children: [
            //         { path: '/paylixclub/product/digital-category', title: 'Category', type: 'link' },
            //         { path: '/paylixclub/product/digital-sub-category', title: 'Sub Category', type: 'link' },
            //         { path: '/paylixclub/product/digital-product-list', title: 'Product List', type: 'link' },
            //         { path: '/paylixclub/product/digital-add-product', title: 'Add Product', type: 'link' },
            //     ]
            // },
        ]
    },
    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },
    {
        title: 'Customers', icon: Users, type: 'sub', active: false, children: [
            { path: '/customers/list_customers', title: 'Customer List', type: 'link' },
            { path: '/customers/create-customers', title: 'Create Customer', type: 'link' },
        ]
    },
    {
        title: 'Orders', icon: Box, type: 'sub', active: false, children: [
            { path: '/orders/list_orders', title: 'Order List', type: 'link' },
            { path: '/orders/create-orders', title: 'Create Order', type: 'link' },
        ]
    },
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/transactions', title: 'Transactions', type: 'link' },
        ]
    },
    {
        title: 'Coupons', icon: Tag, type: 'sub', active: false, children: [
            { path: '/coupons/list-coupons', title: 'List Coupons', type: 'link' },
            { path: '/coupons/create-coupons', title: 'Create Coupons', type: 'link' },
        ]
    },
    {
        title: 'Pages', icon: Clipboard , type: 'sub', active: false, children: [
            { path: '/pages/list-page', title: 'List Page', type: 'link' },
            { path: '/pages/create-page', title: 'Create Page', type: 'link' },
        ]
    },
    {
        title: 'Media', path: '/media', icon: Camera, type: 'link', active: false
    },
    {
        title: 'Menus', icon: AlignLeft, type: 'sub', active: false, children: [
            { path: '/menus/list-menu', title: 'List Menu', type: 'link' },
            { path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
        ]
    },
    {
        title: 'Localization', icon: Chrome, type: 'sub', children: [
            { path: '/localization/transactions', title: 'Translations', type: 'link' },
            { path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
            { path: '/localization/taxes', title: 'Taxes', type: 'link' }
        ]
    },
    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'Profile', type: 'link' },
        ]
    },
    {
        title: 'Invoice',path:'/invoice', icon: Archive, type: 'link', active: false
    },
    {
        title: 'Login',path:'/auth/login', icon: LogIn, type: 'link', active: false
    }
]
