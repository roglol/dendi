import React, { Component, Fragment } from 'react'
import LoginTabset from './loginTabset';
import { ArrowLeft } from 'react-feather';
// import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import stats from '../../assets/images/dashboard/stats.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{
    SignIn
} from '../../actions/Auth';

export class Login extends Component {
    componentDidMount(){
        if(JSON.parse(localStorage.getItem('token'))){
            this.props.history.push(`${process.env.PUBLIC_URL}/paylixclub/product/category`)
        }
    }
    componentDidUpdate(){
        if(JSON.parse(localStorage.getItem('token'))){
            this.props.history.push(`${process.env.PUBLIC_URL}/paylixclub/product/category`)
        }
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false
        };
        return (
            <Fragment>
                <div className="page-wrapper">
                    <div className="authentication-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 p-0 card-left">
                                    <div className="card bg-primary">
                                        <div className="svg-icon">
                                            <img alt="" src={stats} className="Img-fluid" />
                                        </div>
                                        <Slider className="single-item" {...settings}>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                        </Slider >
                                    </div>
                                </div>
                                <div className="col-md-7 p-0 card-right">
                                    <div className="card tab2-card">
                                        <div className="card-body">
                                            <LoginTabset SignIn={this.props.SignIn}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://react.pixelstrap.com/multikart" target="_blank" className="btn btn-primary back-btn"><ArrowLeft />back</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({auth}) =>{
    const {authUser} = auth
    return {authUser}
}

export default withRouter(connect(mapStateToProps, {
    SignIn
})(Login));
