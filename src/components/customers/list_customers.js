import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
// import data from '../../assets/data/listVendor';
import Datatable from '../common/datatable'
import axios from "axios";

export class List_vendors extends Component {
    state={
        data:{

        }
    }

    componentDidMount(){
        this.getCustomersData();
    }

    getCustomersData = () =>{
        axios({
            method: 'get',
            url: 'http://paylix.loc/api/admin/customer/getcustomers',
            headers: {
                Authorization: 'Bearer ' + '598e30643da17199e1a1eb984306de07bf1fe536',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then( (response) => {
            let formatedData = []
            response.data.users.forEach(el=>{
                formatedData.push({ id:el.id, username:el.username, password:el.password, first_name:el.first_name, last_name:el.last_name, email:el.email})
            })
            this.setState({data:formatedData})
        });
    }
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Customer List" parent="Customers" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>Customer Details</h5>
                        </div>
                        <div className="card-body vendor-table coupon-list-delete">
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
