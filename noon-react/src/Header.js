import React from 'react';
import "./Live-streaming-components/css/bootstrap-4-navbar.css"
import "./Live-streaming-components/css/header.css"
import "./Live-streaming-components/js/bootstrap-4-navbar"
import "./shared-libraries/open-iconic-bootstrap.css"


export class Header extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            title:props.title,
        }
    }
    
    render(){
        return(
        <div>
            <header className="cheader-top-head">
                <div className="container">
                    <div className="cdiv-top-header">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 cdiv-left">
                                <div className="cdiv-logo">
                                    <img src="./images/LiveStream-images/logo/logo.png" alt="Logo" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-6 cdiv-right">
                                <div className="cdiv-top-btns">
                                    <button type="button" className="btn btn-default">Signup</button>
                                    <button type="button" className="btn btn-default">Login</button>
                                    <button type="button" className="btn btn-default"><i className="fa fa-search"></i></button>
                                    <div className="cdiv-search">
                                        <form action='' method=''>
                                            <div className="form-group">
                                                <label htmlFor=""></label>
                                                <input type="text" className="form-control" name="" id="" placeholder="Search"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="cdiv-bottom-btns">
                                    <div className="cdiv-social-media">
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-facebook-f"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-twitter"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-instagram"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-google-plus-g"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-youtube"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-flickr"></i></button></a>
                                    </div>
                                    <div className="cdiv-language">
                                        <div className="dropdown show">
                                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                English <span className="oi" data-glyph="icon-name" title="icon name" aria-hidden="true"></span>

                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="#">Arabic</a>
                                                <a className="dropdown-item" href="#">English</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="cheader-bottom-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Home</a>
        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
        
                        <div className="collapse navbar-collapse fl-right" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sports <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item dropdown-toggle" href="#">Football</a>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className='cdiv-first'>
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Football</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="cdiv-second">
                                                            <div className="cart">
                                                                <div className="image">
                                                                    <img src="./images/LiveStream-images/general/img1.png" alt="image 1" />
                                                                </div>
                                                                <div className="text">
                                                                    <div className="head">
                                                                        <h6>Bascketball</h6>
                                                                        <span>1 min ago</span>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="cdiv-third">
                                                            <div className="cart">
                                                                <div className="image">
                                                                    <img src="./images/LiveStream-images/general/img1.png" alt="image 1" />
                                                                </div>
                                                                <div className="text">
                                                                    <div className="head">
                                                                        <h6>Bascketball</h6>
                                                                        <span>1 min ago</span>
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Tennis</a>
                                        </li>
                                        <li><a className="dropdown-item " href="#">Bascketball</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Combat Sport</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Swimming</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Individual Sport</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Volleyball</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Articals <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Images <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
        
                                        <a className="dropdown-item" href="#">Something else here</a>
        
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Videos <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown my-2 my-lg-0">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Magazine <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i> Shop</a>
                                </li>
                                <li className="nav-item cli-active-cust">
                                    <a className="nav-link" href="#"><span className="oi oi-audio"></span> Live Stream</a>
                                </li>
                            </ul>

                        </div>
                        <div className="cdiv-label">
                            <span>{this.state.title}</span>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
        );
    }
}
