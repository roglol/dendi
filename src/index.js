import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from './store/index';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Router,withRouter,Redirect } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';




// Components
import Dashboard from './components/dashboard';

// Products physical
import Category from './components/products/category';
import Store from './components/products/store';
import Sub_category from './components/products/physical/sub-category';
import Product_list from './components/products/product-list';
import Add_product from './components/products/add-product';
import Product_detail from './components/products/physical/product-detail';

//Product Digital
import Digital_category from './components/products/digital/digital-category';
import Digital_sub_category from './components/products/digital/digital-sub-category';
import Digital_pro_list from './components/products/digital/digital-pro-list';
import Digital_add_pro from './components/products/digital/digital-add-pro';

//Sales
import Orders from './components/sales/orders';
import Transactions_sales from './components/sales/transactions-sales';
//Coupons
import ListCoupons from './components/coupons/list-coupons';
import Create_coupons from './components/coupons/create-coupons';

//Pages
import ListPages from './components/pages/list-page';
import Create_page from './components/pages/create-page';
import Media from './components/media/media';
import List_menu from './components/menus/list-menu';
import Create_menu from './components/menus/create-menu';
import List_user from './components/users/list-user';
import Create_user from './components/users/create-user';
import List_customers from './components/customers/list_customers';
import Create_customers from './components/customers/create.vendors';
import List_orders from './components/orders/list_orders';
import Create_orders from './components/orders/create.orders';
import Translations from './components/localization/translations';
import Rates from './components/localization/rates';
import Taxes from './components/localization/taxes';
import Profile from './components/settings/profile';
import Reports from './components/reports/report';
import Invoice from './components/invoice';
import Datatable from './components/common/datatable'
import Login from './components/auth/login';


const store = configureStore();
class Root extends Component {

    render() {
        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />

        <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} />
                        <App>
                            <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/category`} component={Category} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/store`} component={Store} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/product-list`} component={Product_list} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/add-product`} component={Add_product} />

      /*
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/sub-category`} component={Sub_category} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/product-detail`} component={Product_detail} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/add-product`} component={Add_product} />

        <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/digital-category`} component={Digital_category} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/digital-sub-category`} component={Digital_sub_category} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/digital-product-list`} component={Digital_pro_list} />
                            <Route path={`${process.env.PUBLIC_URL}/paylixclub/product/digital-add-product`} component={Digital_add_pro} />
*/
                            <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={Orders} />
                            <Route path={`${process.env.PUBLIC_URL}/sales/transactions`} component={Transactions_sales} />

                            <Route path={`${process.env.PUBLIC_URL}/coupons/list-coupons`} component={ListCoupons} />
                            <Route path={`${process.env.PUBLIC_URL}/coupons/create-coupons`} component={Create_coupons} />

                            <Route path={`${process.env.PUBLIC_URL}/pages/list-page`} component={ListPages} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/create-page`} component={Create_page} />

                            <Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

                            <Route path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={List_menu} />
                            <Route path={`${process.env.PUBLIC_URL}/menus/create-menu`} component={Create_menu} />

                            <Route path={`${process.env.PUBLIC_URL}/users/list-user`} component={List_user} />
                            <Route path={`${process.env.PUBLIC_URL}/users/create-user`} component={Create_user} />

                            <Route path={`${process.env.PUBLIC_URL}/customers/list_customers`} component={List_customers} />
                            <Route path={`${process.env.PUBLIC_URL}/customers/create-customers`} component={Create_customers} />
                             <Route path={`${process.env.PUBLIC_URL}/orders/list_orders`} component={List_orders} />
                            <Route path={`${process.env.PUBLIC_URL}/orders/create-orders`} component={Create_orders} />

                            <Route path={`${process.env.PUBLIC_URL}/localization/transactions`} component={Translations} />
                            <Route path={`${process.env.PUBLIC_URL}/localization/currency-rates`} component={Rates} />
                            <Route path={`${process.env.PUBLIC_URL}/localization/taxes`} component={Taxes} />

                            <Route path={`${process.env.PUBLIC_URL}/reports/report`} component={Reports} />

                            <Route path={`${process.env.PUBLIC_URL}/settings/profile`} component={Profile} />

                            <Route path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice} />

                            <Route path={`${process.env.PUBLIC_URL}/data-table`} component={Datatable} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root/>
    </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);


