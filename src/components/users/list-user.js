import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Breadcrumb from '../common/breadcrumb';
// import data from '../../assets/data/listUser';
import Datatable from '../common/datatable'


export class List_user extends Component {
    state={
        data:{

        }
    }
    componentDidMount(){
        this.getUsersData();
    }

    getUsersData = () =>{
        axios({
            method: 'get',
            url: 'http://paylix.loc/api/admin/getcoreusers',
            headers: {
                Authorization: 'Bearer ' + '598e30643da17199e1a1eb984306de07bf1fe536',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then( (response) => {
                let formatedData = []
                response.data.users.forEach(el=>{
                    formatedData.push({ id:el.id, email:el.email, password:el.password, first_name:el.first_name, last_name:el.last_name, status:el.status})
                })
                this.setState({data:formatedData})
            });
    }
    render() {
        return (
            <Fragment>
                <Breadcrumb title="User List" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>User Details</h5>
                        </div>
                        <div className="card-body">
                            <div className="btn-popup pull-right">
                                <Link to="/users/create-user" className="btn btn-secondary">Create User</Link>
                            </div>
                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
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
                </div>
            </Fragment>
        )
    }
}

export default List_user
