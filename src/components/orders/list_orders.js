import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
// import data from '../../assets/data/listVendor';
import Datatable from '../common/datatable'
import axios from "axios";
import FormControl from '@material-ui/core/FormControl';

export class List_vendors extends Component {
    state={
        data:{

        }
    }

    componentDidMount(){
        this.getOrderData();
    }

    handleChange = event => {
       this.getFilteredData(event.target.value)
    };

    getOrderData = () =>{
        axios({
            method: 'get',
            url: 'http://paylix.loc/api/app/club/orders',
            headers: {
                Authorization: 'Bearer ' + '598e30643da17199e1a1eb984306de07bf1fe536',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then( (response) => {
            let formatedData = []
            response.data.orders.forEach(el=>{
                formatedData.push({ id:el.id, user_id:el.user_id, store:el.store, status:el.status, currency:el.currency, shipment_price:el.shipment_price, city:el.city,street:el.street,order_date:el.time })
            })
            this.setState({data:formatedData})
        });
    }
    getFilteredData = (source) =>{
        axios({
            method: 'post',
            url: 'http://paylix.loc/api/app/club/filterorders',
            headers: {
                Authorization: 'Bearer ' + '598e30643da17199e1a1eb984306de07bf1fe536',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data:{
          source
            }
        }).then( (response) => {
            let formatedData = []
            response.data.orders.forEach(el=>{
                formatedData.push({ id:el.id, user_id:el.user_id, store:el.store, status:el.status, currency:el.currency, shipment_price:el.shipment_price, city:el.city,street:el.street,order_date:el.time })
            })
            this.setState({data:formatedData})
        });
    }
    render() {
        return (
            <Fragment>
            <Breadcrumb title="Order List" parent="Orders" />
            <div className="container-fluid">
            <div className="card">
            <div className="card-header" style={{"paddingBottom":"0px"}}>
            <h5>Order Details</h5>
        <FormControl className="mb-3 order-filter" style={{"marginTop":"15px"}}>
            <select id="status" className="browser-default custom-select" onChange={this.handleChange}>
            <option  value='all'>All</option>
            <option  value='merchant'>Merchant</option>
            <option  value='app'>Application</option>
            </select>
            </FormControl>
        </div>
        <div className="card-body vendor-table coupon-list-delete" style={{"paddingTop":"0px"}}>
            {this.state.data[0] &&
                    <Datatable
                multiSelectOption={true}
                myData={this.state.data}
                pageSize={10}
                pagination={true}
                class="-striped -highlight"
                />
            }

            </div>
            </div>
            </div>
            </Fragment>
    )
    }
}

export default List_vendors
