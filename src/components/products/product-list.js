import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../appUtility/Api';
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/pro_list';
import Datatable from '../common/datatable'
import html from "../../assets/images/digital-product/html.png";

export class Digital_pro_list extends Component {
    state={
        productData:{

        },
        shopData:{

        },
    }
    componentDidMount(){
   this.getProductData();
    }

    getProductData = () => {
        axios({
            method: 'get',
            url: axios.defaults.baseURL.substr(0, axios.defaults.baseURL.length - 5) + 'app/club/products',
            headers: {
                Authorization: 'Bearer ' + '598e30643da17199e1a1eb984306de07bf1fe536',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then( (response) => {
            let formatedData = []
            response.data.products.forEach(el=>{
                formatedData.push({ image:<img alt="" src={el.images[0]} style={{width:50,height:50}} />, product_id:el.id, name:el.name, price:el.price, old_price:el.old_price, store_id:el.store_id, category:el.category })
            })
                console.log(formatedData)
             this.setState({productData:formatedData})
        });
    }

    render() {
        return (
            <Fragment>
            <Breadcrumb title="Product List" parent="Paylix Club" />
            {/* <!-- Container-fluid starts--> */}
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
            <div className="card">
            <div className="card-header">
            <h5>Product List</h5>
        </div>
        <div className="card-body">
            <div className="btn-popup pull-right">
            <Link to="/paylixclub/product/add-product">
            <button type="button" className="btn btn-primary"  data-original-title="test" >Add Product</button>
            </Link>
            </div>
            <div className="clearfix"></div>
            <div id="basicScenario" className="product-physical">
            {this.state.productData[0] &&
                    <Datatable
                multiSelectOption={false}
                myData={this.state.productData}
                pageSize={9}
                pagination={false}
                class="-striped -highlight"
                />
            }

            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        {/* <!-- Container-fluid Ends--> */}
    </Fragment>
    )
    }
}

export default Digital_pro_list
